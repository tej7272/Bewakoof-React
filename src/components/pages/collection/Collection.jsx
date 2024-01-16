import React, { useContext, useEffect, useState } from 'react'
import './Collection.css'
import { useGetProductsQuery } from '../../../services/productApi'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'
import Loader from '../../../loader/Loader'
import { SearchContext } from '../../../App'
import { HiOutlineChevronDown } from 'react-icons/hi';
import { subCategory, gender, brand, color, sellerTag } from '../../data/data'


const Collection = () => {

    const { type } = useParams();
    const { searchTerm } = useContext(SearchContext);
    const [toggle, setToggle] = useState({ gender: false, subCategory: false, sellerTag: false, brand: false, color: false })

    const [genderVal, setGenderVal] = useState('');
    const [subCategoryVal, setSubCategoryVal] = useState('');
    const [brandVal, setBrandVal] = useState('');
    const [colorVal, setColorVal] = useState('');
    const [sellerTagVal, setSellerTagVal] = useState('');
    const [filterColorGender, setFilterColorGender] = useState('');
    const [filterColorSubCategory, setFilterColorSubCategory] = useState('');
    const [filterColorBrand, setFilterColorBrand] = useState('');
    const [filterColorSellerTag, setFilterColorSellerTag] = useState('');
    const [filterColor, setFilterColor] = useState('');

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
            content = searchTerm ? searchTerm : "";
            break;

        default:
            content = 'All';
            break;

    }

    const [filteredData, setFilteredData] = useState([]);

    const { data: productData, isLoading } = useGetProductsQuery();


    useEffect(() => {
        if (productData && type) {
            const apiData = productData?.data?.filter((product) => {
                const initialFilter =
                    product.gender.toLowerCase() === type.toLowerCase() ||
                    product.gender.toLowerCase() === content.toLowerCase() ||
                    product.sellerTag.toLowerCase().includes(content.toLowerCase()) ||
                    product.subCategory.toLowerCase().includes(content.toLowerCase()) ||
                    product.category.toLowerCase().includes(content.toLowerCase()) ||
                    product.brand.toLowerCase().includes(content.toLowerCase()) ||
                    (content !== "men" && product.name.toLowerCase().includes(content.toLowerCase()))


                const isMenOrWomen = type === 'men' || type === 'women';
                const genderFilter = isMenOrWomen || (type !== 'men' && type !== 'women' && (!genderVal || product.gender.toLowerCase() === genderVal.toLowerCase()));
                const colorFilter = !colorVal || product.color.toLowerCase() === colorVal.toLowerCase();
                const subCategoryFilter = !subCategoryVal || product.subCategory.toLowerCase() === subCategoryVal.toLowerCase();
                const brandFilter = !brandVal || product.brand.toLowerCase() === brandVal.toLowerCase();
                const sellerTagFilter = !sellerTagVal || product.sellerTag.toLowerCase() === sellerTagVal.toLowerCase();

                return initialFilter && colorFilter && genderFilter && brandFilter && subCategoryFilter && sellerTagFilter;
            });

            setFilteredData(apiData);

        }
    }, [productData, content, subCategoryVal, colorVal, type, genderVal, sellerTagVal, brandVal]);

    const handleClearAll = () => {
        setBrandVal('');
        setColorVal('');
        setGenderVal('');
        setSellerTagVal('');
        setSubCategoryVal('');
        setFilterColor('');
        setFilterColorGender('');
        setFilterColorBrand('');
        setFilterColorSellerTag('');
        setFilterColorSubCategory('');
    }


    return (
        <>
            {isLoading ? <Loader /> : (
                <div className='collectionWrapper'>
                    <div className='collection-heading container '>
                        <div className='mainHeading'>
                            <h1 className="searchResults" style={{ textTransform: 'capitalize' }}>{content ? content : "All items"}</h1>
                            <span className="totalProductCount">({filteredData?.length})</span>
                        </div>
                    </div>
                    <div className='collectionItems container'>
                        <div className='fillterContainer hidden-xs'>
                            <div className="filterBoxMain">
                                <div className="filterHeadingDesktop">
                                    <h4>Filters</h4>
                                    <div className="clearAllBtn">
                                        <span className="anchorStyle" onClick={handleClearAll}>Clear All</span>
                                    </div>
                                </div>
                                <div className="accordionWrapper">

                                    {type !== 'men' && type !== 'women' && <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix" onClick={() => setToggle({ ...toggle, gender: !toggle.gender })}>
                                            <span>gender</span> <HiOutlineChevronDown style={{ float: 'right' }} />
                                        </div>
                                        {toggle.gender && <div style={{ margin: '4px 0' }}>
                                            {gender.map((element, index) => (
                                                <button key={index} value={element} style={{ background: element === filterColorGender ? '#55e7ad' : ' ' }} className='filter-btn' onClick={() => { setGenderVal(element === genderVal ? '' : element); setFilterColorGender(element === filterColorGender ? '' : element) }}>{element}</button>
                                            ))}
                                        </div>}
                                    </div>}


                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix" onClick={() => setToggle({ ...toggle, subCategory: !toggle.subCategory })}>
                                            <span>subCategory</span><HiOutlineChevronDown style={{ float: 'right' }} />
                                        </div>
                                        {toggle.subCategory && <div style={{ margin: '4px 0' }}>
                                            {subCategory.map((element, index) => (
                                                <button key={index} value={element} className='filter-btn' style={{ background: element === filterColorSubCategory ? '#55e7ad' : ' ' }} onClick={() => { setSubCategoryVal(element === subCategoryVal ? '' : element); setFilterColorSubCategory(element === filterColorSubCategory ? '' : element) }}>{element}</button>
                                            ))}
                                        </div>}
                                    </div>


                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix" onClick={() => setToggle({ ...toggle, brand: !toggle.brand })}>
                                            <span>Brand</span><HiOutlineChevronDown style={{ float: 'right' }} />
                                        </div>

                                        {toggle.brand && <div style={{ margin: '4px 0' }}>
                                            {brand.map((element, index) => (
                                                <button key={index} value={element} className='filter-btn' style={{ background: element === filterColorBrand ? '#55e7ad' : ' ' }} onClick={() => { setBrandVal(element === brandVal ? '' : element); setFilterColorBrand(element === filterColorBrand ? '' : element) }}>{element}</button>
                                            ))}
                                        </div>}

                                    </div>

                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix" onClick={() => setToggle({ ...toggle, color: !toggle.color })}>
                                            <span>color</span><HiOutlineChevronDown style={{ float: 'right' }} />
                                        </div>

                                        {toggle.color && <div style={{ margin: '4px 0' }}>
                                            {color.map((element, index) => (
                                                <div className="filter-color-block" key={index} style={{ background: element === filterColor ? '#55e7ad' : ' ' }}  >
                                                    <button value={element} className='filter-color-btn' style={{ background: element }} onClick={() => { setColorVal(element === colorVal ? '' : element); setFilterColor(element === filterColor ? '' : element) }}></button>
                                                </div>
                                            ))}
                                        </div>}

                                    </div>

                                    <div className="accordionBox clearfix">
                                        <div className="filterHeader clearfix" onClick={() => setToggle({ ...toggle, sellerTag: !toggle.sellerTag })}>
                                            <span>SellerTag</span><HiOutlineChevronDown style={{ float: 'right' }} />
                                        </div>

                                        {toggle.sellerTag && <div style={{ margin: '4px 0' }}>
                                            {sellerTag.map((element, index) => (
                                                <button key={index} value={element} className='filter-btn' style={{ background: element === filterColorSellerTag ? '#55e7ad' : ' ' }} onClick={() => { setSellerTagVal(element === sellerTagVal ? '' : element); setFilterColorSellerTag(element === filterColorSellerTag ? '' : element) }}>{element}</button>
                                            ))}
                                        </div>}

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='itemsContainer'>
                            <div className='productContainer'>
                                {filteredData.length ? <>  <div className='productCardContainer'>
                                    {filteredData?.map((items, index) => (
                                        <ProductCard key={index} {...items} />
                                    ))}
                                </div>
                                </> : <><h1 style={{ fontSize: '45px', marginLeft: '20%', marginTop: '10%', opacity: 0.6 }}>Item not available</h1></>}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Collection