import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetProductsQuery } from '../../../services/productApi';
import Card from './Card';

const NewArrival = () => {

    const { data: productData, isLoading } = useGetProductsQuery();



    const filterData = productData?.data?.filter((product) => (
        product.sellerTag.toLowerCase() === 'new arrival'
    )).slice(127, 137);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1150 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        minidesktop: {
            breakpoint: { max: 1150, min: 850 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 850, min: 650 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        miniTablet: {
            breakpoint: { max: 650, min: 420 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 420, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <>{isLoading ? <div>loading.....</div> : (
            <>
                {filterData &&
                    <Carousel responsive={responsive} >

                        {filterData?.map((item, index) => {
                            return <Card key={index} {...item} />
                        }
                        )}
                    </Carousel>
                }
            </>

        )}
        </>
    )
}

export default NewArrival