import React from "react";
import './Navbar.css'
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { BiSolidUser, BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Navbar = () => {
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
                            <a href="/">
                                <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Bewakoof Logo" />
                            </a>
                        </div>
                        <div className="dropDownWrapper float">
                            <div className="dropDownDiv">
                                <span className="menuWrapper">
                                    <a href="/" className="menuSelectWrap"><span>MEN</span></a>
                                </span>
                                <span className="menuWrapper">
                                    <a href="/" className="menuSelectWrap"><span>WOMEN</span></a>
                                </span>
                                <span className="menuWrapper">
                                    <a href="/" className="menuSelectWrap"><span>MOBILE COVERS</span></a>
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
                                        <a href="/cart">
                                            <BsBag />
                                        </a>
                                    </span>
                                    <span className="actionMenu">
                                        <a href="/wishlist">
                                            <FaRegHeart />
                                        </a>
                                    </span>
                                    <span className="actionMenu">
                                        <Link to="/login" >
                                            <BiSolidUser />
                                        </Link>

                                    </span>
                                </div>
                            </div>
                            <div className="mainHeaderCols searchWrapper">
                                <div className="icon-addon addon-sm">
                                    <form className="searchContainer">
                                        <input className="searchInput form-controls" placeholder="Search by product, category or collection" type="text" autoComplete="off" />
                                        <BiSearch />
                                    </form>
                                    <div className="seperator "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="sideNavBox">
                <header className="mHeaderDiv mHeaderSticky visible-sm visible-xs">
                    <div className="noMg mHeader">
                        <label htmlFor="hambu" className="mLogoDiv">
                            <img src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg" alt="" className="mMenuBtn" />
                        </label>
                        <input type="checkbox" id="hambu" />
                        <div className="mActionMenu">
                            <span className="mBewakoofLogoDiv">
                                <a href="/" title="Online Lifestyles Brand - Bewakoof.com">
                                    <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" alt="Bewakoof_Logo" />
                                </a>
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
                                <div>
                                    <img src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg" alt="wishlist-icon" className="header-icon" />
                                </div>
                            </span>
                            <span>
                                <a href="/cart">
                                    <span>
                                        <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" alt="cart-icon" className="header-icon" />
                                        <span className="cartCount cartCountHome" >2</span>
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Navbar;