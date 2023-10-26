import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useGetProductsQuery } from '../../../services/productApi';
import Card from './Card';


const Trending = () => {

    const { data: productData, isLoading } = useGetProductsQuery();


    const filterData = productData?.data?.filter((product) => (
        product.sellerTag.toLowerCase() === 'trending'
    )).slice(161, 171);

    return (
        <>{isLoading ? <div>loading.....</div> : (
            <>
                {filterData && (
                     <AliceCarousel
                     items={filterData?.map((item, index) => <Card key={index} {...item} />)}
                     responsive={{
                         0: { items: 1 },     
                         420: { items: 2 },     
                         650: { items: 3 },     
                         850: { items: 4 },  
                         1150: { items: 5 },  
                     }}

                     disableDotsControls={true}
                 />
                )}
            </>

        )}
        </>
    )
}

export default Trending