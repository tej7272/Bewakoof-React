import React, { useContext, useEffect, useState } from 'react'
import './Collection.css'
import { AiOutlineDown } from 'react-icons/ai'
import { useGetProductsQuery } from '../../../services/productApi'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'
import Loader from '../../../loader/Loader'
import { SearchContext } from '../../../App'

const Collection = () => {

    const { type } = useParams();
    const {searchTerm} = useContext(SearchContext);

    let content;

    switch (type) {
        case 'men':
            content = 'Men Clothing';
            break;

        case 'women':
            content = 'Women Clothing';
            break;

        case 'new-arrival':
            content = "New Arrival";
            break;

        case 'bestseller':
            content = "Best Seller";
            break;

        case 'top-rated':
            content = "Top Rated";
            break;


        case 'official-collaborations':
            content = "Tshirt";
            break;

        case 'Customization':
            content = "Shirt";
            break;

        case 'combos':
            content = "Jeans";
            break;

        case 'coupon-offers':
            content = "Trending";
            break;

        case 'hoodies-and-sweatshirts':
            content = "Jeans";
            break;

        case 'joggers':
            content = "Jogger";
            break;

        case 'bewakoof-oof-sale':
            content = "New Arrival";
            break;

        case 'buy-one-get-one-free':
            content = "Shirt";
            break;

        case 'buy-3-for-1199':
            content = "Top Rated";
            break;

        case 'clothes':
            content = "Clothes";
            break;

        case 'bewakoof':
            content = "Bewakoof®";
            break;

        case 'mobile-cover':
            content = "";
            break;

        case 'pyjamas':
            content = "Jogger";
            break;

        case 'searchPage':
            content = searchTerm?searchTerm:"";
            break;

        default:
            content = 'All';
            break;

    }
    const [sortBy, setSortBy] = useState("Popular");

    const [filteredData, setFilteredData] = useState([]);

    // let priceArray = [];

    const { data: productData, isLoading } = useGetProductsQuery();

    useEffect(() => {
        if (productData && type) {
            const apiData = productData?.data?.filter((product) =>
                product.gender.toLowerCase() === type.toLowerCase() ||
                product.gender.toLowerCase() === content.toLowerCase() ||
                product.sellerTag.toLowerCase().includes(content.toLowerCase()) ||
                product.subCategory.toLowerCase().includes(content.toLowerCase()) ||
                product.category.toLowerCase().includes(content.toLowerCase()) ||
                product.brand.toLowerCase().includes(content.toLowerCase()) || 
               (content !== "men" && product.description.toLowerCase().includes(content.toLowerCase())) ||
               (content !== "men" && product.name.toLowerCase().includes(content.toLowerCase()))

            );

            // priceArray = apiData?.map((element) => element.price)
            const sortedData = sortData(apiData, sortBy);
            setFilteredData(sortedData);
        }

    }, [productData, type, sortBy, content,])

    // const maxPrice = priceArray.reduce((initialVal, curVal) => Math.max(initialVal, curVal), 0);

    const sortData = (data, option) => {
        switch (option) {
            case 'high':
                return data.sort((a, b) => b.price - a.price);
            case 'low':
                return data.sort((a, b) => a.price - b.price);
            case 'popular':
            default:
                return data;
        }
    };

    const handleSortChange = (option) => {
        setSortBy(option);
    };

    return (
        <>
            {isLoading ? <Loader /> : (
                <div className='collectionWrapper'>
                    <div className='collection-heading container '>
                        <div className='mainHeading'>
                            <h1 className="searchResults" style={{textTransform:'capitalize'}}>{content ? content : "All items"}</h1>
                            <span className="totalProductCount">({filteredData.length})</span>
                        </div>
                    </div>
                    <div className='collectionItems container'>
                        <div className='fillterContainer hidden-xs'>
                            <div className="filterBoxMain">
                                <div className="filterHeadingDesktop">
                                    <h4>Filters</h4>
                                    <div className="clearAllBtn">
                                        <span className="anchorStyle">Clear All</span>
                                    </div>
                                </div>
                                <div className="accordionWrapper">
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>gender</span> <i className="icon_down" style={{ float: 'right' }}> </i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>category</span><i className="icon_bullet bulletIcon"></i>
                                            <i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>sizes</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>Brand</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>color</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>design</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>fit</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>sleeve</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>neck</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>type</span><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>


                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix">
                                            <span>Sort By</span><i className="icon_bullet bulletIcon"></i><i className="icon_down" style={{ float: 'right' }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='itemsContainer'>
                            <div className='sortByWrapper hidden-xs'>
                                <div className='hoverMenuWrapper'>
                                    <button className='sortByButton'>
                                        sort by
                                        <span> {sortBy}</span>
                                        <i className="icon_down">
                                            <AiOutlineDown />

                                        </i>
                                        <div className='hoverMenu'>
                                            <ul>
                                                <li onClick={() => handleSortChange('popular')}>popular
                                                    {/* <a aria-current="false" href="/sort=popular" style={{ color: 'rgb(66, 162, 162)' }} onClick={()=>handleSortChange('popular')} >Popular</a> */}
                                                </li>
                                                <li onClick={() => handleSortChange('new')}> new
                                                    {/* <a aria-current="false" href="/sort=new" onClick={()=>handleSortChange('new')} >New</a> */}
                                                </li>
                                                <li>
                                                    <a aria-current="false" href="/sort=high" onClick={() => handleSortChange('high')} >Price : High to Low</a>
                                                </li>
                                                <li>
                                                    <a aria-current="false" href="/sort=low" onClick={() => handleSortChange('low')} >Price : Low to High</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='productContainer'>
                                <div className='productCardContainer'>
                                    {filteredData?.map((items, index, type) => (
                                        <ProductCard key={index} {...items} {...type} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Collection