import React, { useEffect, useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { useGetProductsQuery } from '../../../services/productApi';
import Card from './Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BestSeller = () => {


    const [filterData , setFilterData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

    const fetchData = async ()=>{
        setIsLoading(true);
        const res = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sellerTag=best seller&limit=10',{
            headers:{
                projectId: 'dsc4zhei2sjh'
            }
        });

        const data = await res.json();
        console.log("data", data)
        setFilterData(data?.data);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    // const { data: productData, isLoading } = useGetProductsQuery();

    // const filterData = productData?.data?.filter((product) => (
    //     product.sellerTag.toLowerCase() === 'best seller'
    // )).slice(0, 10);



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
        <div>
            {isLoading ? (
                <div>loading.....</div>
            ) : (
                <div>
                    {filterData && (
                        // <AliceCarousel
                        //     items={filterData?.map((item, index) => <Card key={index} {...item} />)}
                        //     responsive={{
                        //         0: { items: 1 },     
                        //         420: { items: 2 },     
                        //         650: { items: 3 },     
                        //         850: { items: 4 },  
                        //         1150: { items: 5 },  
                        //     }}

                        //     disableDotsControls={true}
                        // />

                        <Carousel responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        showDots={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px" >
                            {filterData?.map((item, index) => <Card key={index} {...item} />)}

</Carousel>
                    )}
                </div>
            )}
        </div>
    )

}

export default BestSeller