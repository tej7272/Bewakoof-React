import React, { useContext, useState } from "react";
import './Navbar.css'
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { BiSolidUser, BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import Profile from "../support/Profile";
import { useGetCartItemsQuery } from "../../services/productApi";
import { SearchContext } from "../../App";
import SideNav from "../loginsignup/sideNav/SideNav";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token;

    const { data: cartData } = useGetCartItemsQuery();
    const { searchTerm, setSearchTerm } = useContext(SearchContext);


    const currentLocation = window.location.pathname;
    const navigate = useNavigate();

    const handleCartBtn = () => {
        if (!token) {
            navigate(`/login?redirectPath=${currentLocation}`);
        }
        else {
            navigate("/cart")
        }
    }

    const handleWishlistBtn = () => {
        if (!token) {
            navigate(`/login?redirectPath=${currentLocation}`);
        }
        else {
            navigate("/wishlist")
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/searchPage')
    }

    const clearInput = (e) => {
        e.preventDefault();
        setSearchTerm('');
    }

    return (
        <div>
            <header className="headerDivWrapper hidden-sm hidden-xs">
                <div className="topBarWrapper">
                    <div className="topBar">
                        <div className="pull-left">
                            <li className="headerLinks">offers</li>
                            <li className="headerLinks">Fanbook</li>
                            <li className="headerLinks">Download App</li>
                            <li className="headerLinks">TriBe Membership</li>
                        </div>
                        <div className="pull-right">
                            <li className="headerLinks">Contact Us</li>
                            <li className="headerLinks">Track Order</li>
                        </div>
                    </div>
                </div>
                <div className="mainHeaderWrapper">
                    <div className="mainHeader">
                        <div className="bewakoofLogoDiv float" >
                            <Link to="/">
                                <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Bewakoof Logo" />
                            </Link>
                        </div>
                        <div className="dropDownWrapper float">
                            <div className="dropDownDiv">
                                <span className="menuWrapper">
                                    <Link to="/men" className="menuSelectWrap"><span>MEN</span></Link>
                                </span>
                                <span className="menuWrapper">
                                    <Link to="/women" className="menuSelectWrap"><span>WOMEN</span></Link>
                                </span>
                                <span className="menuWrapper">
                                    <Link to="/mobile-cover" className="menuSelectWrap"><span>MOBILE COVERS</span></Link>
                                </span>
                            </div>
                        </div>
                        <div className="float mainHeaderCols searchMyAccount">
                            <div className="mainHeaderCols activeMenuWrp">
                                <div className="actionMenu">
                                    <span className="actionMenu">
                                        <a href="/country" className="country">
                                            <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="country" />
                                        </a>
                                    </span>
                                    <span className="actionMenu">
                                        <button type="submit" onClick={handleCartBtn}>
                                            <BsBag />
                                        </button>
                                    </span>
                                    <span className="actionMenu">
                                        <button type="submit" onClick={handleWishlistBtn}>
                                            <FaRegHeart />
                                        </button>
                                    </span>
                                    <span className="actionMenu">
                                        {!token ? (<Link to="/login" style={{ textDecoration: 'none', color: "black" }}>
                                            Login
                                        </Link>) : (<div className="profile-box" style={{ paddingTop: '5px' }}>
                                            <BiSolidUser className="profile-icon" />
                                            <div className="profile">
                                                <Profile />
                                            </div>
                                        </div>)}
                                    </span>

                                </div>
                            </div>
                            <div className="mainHeaderCols searchWrapper">
                                <div className="icon-addon addon-sm">
                                    <form className="searchContainer" onSubmit={handleSearch}>
                                        <input className="searchInput form-controls" placeholder="Search by product, category or collection" type="text" autoComplete="off" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onClick={clearInput} />
                                        <BiSearch />
                                    </form>
                                    <div className="seperator "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* side navbar start from here  */}


            <div className="sideNavBox">
                <header className="mHeaderDiv mHeaderSticky visible-sm visible-xs">
                    <div className="noMg mHeader">
                        <label htmlFor="hambu" className="mLogoDiv" style={{cursor:'pointer'}}>
                            <img src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg" alt="" className="mMenuBtn" />
                        </label>
                        <input type="checkbox" id="hambu"
                            onClick={() => setOpen(true)}
                        />
                        <SideNav open={open} setOpen={setOpen} />
                        <div className="mActionMenu">
                            <span className="mBewakoofLogoDiv">
                                <Link to="/" title="Online Lifestyles Brand - Bewakoof.com">
                                    <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" alt="Bewakoof_Logo" />
                                </Link>
                            </span>
                        </div>
                        <div className="iconMenuOption">
                            <span width="auto">
                                <form className="msearchContainer">
                                    <label>
                                        <img src="https://images.bewakoof.com/web/ic-web-head-search.svg" alt="search-icon" className="header-icon ml-1" />
                                    </label>
                                </form>
                            </span>
                            <span>
                                <button type="submit" onClick={handleWishlistBtn} >
                                    <img src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg" alt="wishlist-icon" className="header-icon" />
                                </button>
                            </span>
                            <span>
                                <button type="submit" onClick={handleCartBtn}>
                                    <span>
                                        <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" alt="cart-icon" className="header-icon" />
                                        <span className="cartCount cartCountHome" >{cartData?.results}</span>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Navbar;