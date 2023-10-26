import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import { Carousel } from 'nuka-carousel';

import NukaCarousel from 'nuka-carousel';

import { useGetProductsQuery } from '../../../services/productApi';

import Card from './Card';

const BestSeller = () => {

    const { data: productData, isLoading } = useGetProductsQuery();

    const filterData = productData?.data?.filter((product) => (
        product.sellerTag.toLowerCase() === 'best seller'
    )).slice(0, 10);


    const responsiveSettings = [
        {
          breakpoint: 1024, // Large desktop screens
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768, // Tablets and smaller screens
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 480, // Mobile devices
          settings: {
            slidesToShow: 2,
          },
        },
      ];

    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1150 },
    //         items: 5,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     minidesktop: {
    //         breakpoint: { max: 1150, min: 850 },
    //         items: 4,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     tablet: {
    //         breakpoint: { max: 850, min: 650 },
    //         items: 3,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     miniTablet: {
    //         breakpoint: { max: 650, min: 420 },
    //         items: 2,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     mobile: {
    //         breakpoint: { max: 420, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //     }
    // };

    return (
        <>{isLoading ? <div>loading.....</div> : (
            <>
                {filterData &&
                    // <Carousel responsive={responsive} >

                    <NukaCarousel
                    slidesToShow={5} // Default number of items
                    cellSpacing={20}
                    renderBottomCenterControls={null} // Remove pagination dots
                    wrapAround // For infinite looping
                    heightMode="first"
                    initialSlideHeight={200}
                    autoplay
                    autoplayInterval={3000}
                    decorators={[
                        {
                          component: CustomPrevButton, // Custom previous button
                          position: 'CenterLeft',
                        },
                        {
                          component: CustomNextButton, // Custom next button
                          position: 'CenterRight',
                        },
                      ]}
                    responsive={responsiveSettings} 
                  > 


                        {filterData?.map((item, index) => {
                            return <Card key={index} {...item} />
                        }
                        )}
                    </NukaCarousel>
                }
            </>

        )}

        </>
    )

}

const CustomPrevButton = ({ previousSlide }) => (
    <button className="custom-button custom-prev-button" onClick={previousSlide}>
      &lt; Previous
    </button>
  );
  
  // Custom next button component
  const CustomNextButton = ({ nextSlide }) => (
    <button className="custom-button custom-next-button" onClick={nextSlide}>
      Next &gt;
    </button>
  );

export default BestSeller