import React from 'react'
import './Home.css'
import BottomHeader from '../../navbar/BottomHeader'
import Banner from './Banner'
import { categories } from '../../data/data'
import { Link } from 'react-router-dom'
import BestSeller from '../cards/BestSeller'
import Trending from '../cards/Trending'
import NewArrival from '../cards/NewArrival'
// import ProductCard from '../collection/ProductCard'
// import { useGetProductsQuery } from '../../../services/productApi'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


const Home = () => {

    return (
        <>
            <BottomHeader />
            <div className='basePageBuilderStyle'>

                {/* first section start from here */}

                <div className='container-fluid'>
                    <div id='pb0-0' className='col-xs-12'>
                        <div className="swiper-container">
                            <div className="swiper-wrapper" >
                                <Banner />
                            </div>
                        </div>
                    </div>
                </div>

                {/* second section start from here */}

                <div className='container-fluid'>
                    <div id='pb1-0' className='col-xs-12'>
                        <div id='pb1-0-0'>
                            <div className='widgetSliderWrapper'>

                                <ul>
                                    {categories.map((item) =>
                                        <li key={item.id}>
                                            <div className='widgetSliderInner'  >
                                                <Link to={`/${item.href}`}>
                                                    <div className="widgetImg">
                                                        <img src={item.url} alt={item.title} />
                                                    </div>
                                                    <p>{item.title}</p>
                                                </Link>
                                            </div>
                                        </li>
                                    )}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                {/* third section start from here */}

                <div className="container-fluid">
                    <div id="pb2-0" className="col-xs-12">
                        <div id="pb2-0-0">
                            <div>Designs of the Week</div>
                        </div>
                    </div>
                </div>

                {/* forth section start from here */}

                <div className="container-fluid">
                    <div id="pb3-0" className="col-xs-6">
                        <div id="pb3-0-0" className='weekly-design'>
                            <Link to='/men' title="" >
                                <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1696916713.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div id="pb3-1" className="col-xs-6">
                        <div id="pb3-1-0" className='weekly-design'>
                            <Link to='/women' title="">
                                <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1696916708.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* fifth section start from here */}

                <div className="container-fluid">
                    <div id="pb4-0" className="col-xs-12">
                        <div id="pb4-0-0">
                            <div>
                                <div>BLOCKBUSTER DEAL</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sixth section start from here */}

                <div className="container-fluid">
                    <div id="pb7-0" className="col-xs-12">
                        <div id="pb7-0-0" className="blockBuster-deals">
                            <Link to='/pyjamas' title="" >
                                <img src="https://images.bewakoof.com/uploads/grid/app/daily-deal-desktop-jogs--1---1--1696849857.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BestSeller container start from here  */}

                <div className="container-fluid">
                    <div id="pb4-0" className="col-xs-12">
                        <div id="pb4-0-0">
                            <div>
                                <div>Bestseller</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid' style={{padding:'20px'}}>
                  <BestSeller />
                </div>

                {/* trending section start from here  */}

                <div className="container-fluid">
                    <div id="pb4-0" className="col-xs-12">
                        <div id="pb4-0-0">
                            <div>
                                <div>Trending</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid' style={{padding:'20px'}}>
                  <Trending />
                </div>


                {/* New arrival section start from here  */}

                <div className="container-fluid">
                    <div id="pb4-0" className="col-xs-12">
                        <div id="pb4-0-0">
                            <div>
                                <div>New Arrival</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid' style={{padding:'20px'}}>
                  <NewArrival />
                </div>

            </div >
        </>
    )
}

export default Home