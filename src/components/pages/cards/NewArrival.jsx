import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useGetProductsQuery } from '../../../services/productApi';
import Card from './Card';
import './Card.css';

const NewArrival = () => {

    const { data: productData } = useGetProductsQuery();



    const filterData = productData?.data?.filter((product) => (
        product.sellerTag.toLowerCase() === 'new arrival'
    )).slice(127, 137);



    return (
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
    )
}

export default NewArrival