import React from 'react'
import Carousel from 'react-elastic-carousel'
import "react-multi-carousel/lib/styles.css";
import { useGetProductsQuery } from '../../../services/productApi';
import Card from './Card';

const NewArrival = () => {

    const { data: productData, isLoading } = useGetProductsQuery();



    const filterData = productData?.data?.filter((product) => (
        product.sellerTag.toLowerCase() === 'new arrival'
    )).slice(127, 137);

    const breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false},
        { width: 360, itemsToShow: 2 ,pagination: false},
        { width: 550, itemsToShow: 3, itemsToScroll: 1, pagination: false },
        { width: 850, itemsToShow: 4, pagination: false },
        { width: 1150, itemsToShow: 5, itemsToScroll: 1, pagination: false },
        { width: 1450, itemsToShow: 5, pagination: false },
        { width: 1750, itemsToShow: 6, pagination: false },
    ];

  return (
    <>{isLoading ? <div>loading.....</div> : (
        <>
            {filterData &&
                <Carousel breakPoints={breakPoints} >

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