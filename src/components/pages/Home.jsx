import React from 'react'
import './Home.css'
import { Sales } from '../data/data'
import BottomHeader from '../navbar/BottomHeader'

const Home = () => {
    return (
        <>
            <BottomHeader />
            <div className='basePageBuilderStyle'>

                {/* first section start from here */}

                <div className='container-fluid'>
                    <div id='pb0' className='row'>
                        <div id='pb0-0' className='col-xs-12'>
                            <div>
                                <div>
                                    <div id='pb0-0-0'>
                                        <div style={{ marginLeft: '0px', marginRight: '0px' }}>
                                            <div>
                                                <i className="icon_previous slickNextarrow"></i>
                                            </div>
                                            <div className="swiper-container swiper-container-horizontal swiper-container-wp8-horizontal">
                                                <div className="swiper-wrapper"
                                                    // style={{transform: 'translate3d(-3403.36px, 0px, 0px)', transitionDuration: '0ms'}}
                                                    style={{ overflowY: 'scroll' }}
                                                >
                                                    {Sales.map((item) => <>
                                                        <a key={item.id} href={`/${item.href}`} className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" style={{ display: 'block', paddingTop: '35.7143%', position: 'relative', width: '32%', marginRight: '15px' }} data-swiper-slide-index={`${item.index}`}>
                                                            <img src={`${item.url}`} style={{ position: 'absolute', top: '0px', width: '100%', cursor: 'pointer', borderRadius: '0px' }} alt='title' />
                                                        </a>
                                                    </>
                                                    )}

                                                    {/* <a href="/hoodies-and-sweatshirts" className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" style={{display: 'block', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="3">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Sweats-common-oof-1696862922.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/joggers" className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" style={{display: 'block', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="4">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-ULTIMATEJOGGERS--2--1696855752.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/campaign/bewakoof-oof-sale" className="swiper-slide swiper-slide-duplicate-next" style={{display: 'block', marginLeft: '0px', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="0">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/OOF-SALE-Common-1x1-1696507938.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/buy-3-for-1199" className="swiper-slide" style={{display: 'block', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="1">

                                                    <img src="https://images.bewakoof.com/uploads/grid/app/1x1-b31199-1696669433.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/buy-one-get-one-free" className="swiper-slide" style={{display: 'block', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="2">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/1x1-B1G1F-1696841980.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/hoodies-and-sweatshirts" className="swiper-slide swiper-slide-prev" style={{display: 'block', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="3">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Sweats-common-oof-1696862922.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/joggers" className="swiper-slide swiper-slide-active" style={{display: 'block', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="4">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-ULTIMATEJOGGERS--2--1696855752.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/campaign/bewakoof-oof-sale" className="swiper-slide swiper-slide-duplicate swiper-slide-next" style={{display: 'block', marginLeft: '0px', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="0">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/OOF-SALE-Common-1x1-1696507938.jpg" className='swiper-slide-img' alt='sales' />
                                                </a>
                                                <a href="/buy-3-for-1199" className="swiper-slide swiper-slide-duplicate" style={{display: 'block', paddingTop: '35.7143%', position: 'relative', width: '533.929px', marginRight: '15px'}} data-swiper-slide-index="1">
                                                    <img src="https://images.bewakoof.com/uploads/grid/app/1x1-b31199-1696669433.jpg" className='swiper-slide-img' alt='sales' />
                                                </a> */}
                                                </div>
                                                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                                                    <span className="swiper-pagination-bullet">
                                                    </span>
                                                    <span className="swiper-pagination-bullet">
                                                    </span>
                                                    <span className="swiper-pagination-bullet">
                                                    </span>
                                                    <span className="swiper-pagination-bullet">
                                                    </span>
                                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active">
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <i className="icon_next slickPrevarrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second section start from here */}

                <div className='container'>
                    <div id='pb1' className='row'>
                        <div id='pb1-0' className='col-xs-12'>
                            <div>
                                <div>
                                    <div id='pb1-0-0'>
                                        <div className='widgetSliderWrapper'>
                                            <ul>
                                                <li>
                                                    <div className='widgetSliderInner' style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-common-1682570370.jpg" alt="New Arrivalsimage" />
                                                            </div>
                                                            <p>New Arrivals</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg" alt="Bestsellersimage" />
                                                            </div>
                                                            <p>Bestsellers</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-official-collab-common-1682570371.jpg" alt="Official Collaborationsimage" />
                                                            </div>
                                                            <p>Official Collaborations</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg" alt="Customizationimage" />
                                                            </div>
                                                            <p>Customization</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif" alt="Combosimage" />
                                                            </div>
                                                            <p>Combos</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg" alt="Vote for Designsimage" />
                                                            </div>
                                                            <p>Vote for Designs</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="Last Sizes Leftimage" />
                                                            </div>
                                                            <p>Last Sizes Left</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: '0px 25px 0px 0px' }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-plus-size-common-1682570373.jpg" alt="Plus Sizeimage" />
                                                            </div>
                                                            <p>Plus Size</p>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{ margin: "0px 10px 0px 0px" }}>
                                                        <a href='/'>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/image-1668598708.png" alt="Coupon Offersimage" />
                                                            </div>
                                                            <p>Coupon Offers</p>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* third section start from here */}

                <div className="container-fluid">
                    <div id="pb2" className="row">
                        <div id="pb2-0" className="col-xs-12">
                            <div>
                                <div>
                                    <div id="pb2-0-0">
                                        <div>
                                            <div>Designs of the Week</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* forth section start from here */}

                <div className="container-fluid">
                    <div id="pb3" className="row">
                        <div id="pb3-0" className="col-xs-6">
                            <div>
                                <div>
                                    <div id="pb3-0-0">
                                        <a href='/' title="" style={{ display: 'block', width: '100%', paddingTop: '57.1429%', position: 'relative' }}>
                                            <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1696916713.jpg" alt="" style={{ position: 'absolute', width: '100%', top: '0px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pb3-1" className="col-xs-6">
                            <div>
                                <div>
                                    <div id="pb3-1-0">
                                        <a href='/' title="" style={{ display: 'block', width: '100%', paddingTop: '57.1429%', position: 'relative' }}>
                                            <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1696916708.jpg" alt="" style={{ position: 'absolute', width: '100%', top: '0px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* fifth section start from here */}

                <div  className="container-fluid">
                    <div id="pb4"  className="row">
                        <div id="pb4-0"  className="col-xs-12">
                            <div>
                                <div>
                                    <div id="pb4-0-0">
                                        <div>
                                            <div>BLOCKBUSTER DEAL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sixth section start from here */}

                <div  className="container-fluid">
                    <div id="pb5"  className="row">
                        <div id="pb5-0"  className="col-xs-12">
                            <div>
                                <div>
                                    <div id="pb5-0-0">
                                        <div  className="dealOFWeekWrapper">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* seventh section start from here  */}

                <div  className="container-fluid">
                    <div id="pb6"  className="row">
                        <div id="pb6-0"  className="col-xs-12">
                            <div>
                                <div>
                                    <div id="pb6-0-0">
                                        <div  className="dealOFWeekWrapper">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* eighth section start from here  */}

                <div  className="container-fluid">
                    <div id="pb7"  className="row">
                        <div id="pb7-0"  className="col-xs-12">
                            <div>
                                <div>
                                    <div id="pb7-0-0">
                                        <a href='/' title="" style={{display: 'block', width: '100%', paddingTop: '10.4167%', position: 'relative'}}>
                                            <img src="https://images.bewakoof.com/uploads/grid/app/daily-deal-desktop-jogs--1---1--1696849857.jpg" alt="" style={{position: 'absolute', width: '100%', top: '0px'}} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home