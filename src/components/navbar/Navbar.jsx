import React from "react";
import { FaShoppingBag, FaRegHeart} from "react-icons/fa";
import { BsBag } from "react-icons/bs";

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
              <div className="pull-right mainHeaderCols activeMenuWrp">
                <div className="actionMenu">
                  <span className="actionMenu">
                    <a>
                      <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="country" />
                    </a>
                  </span>
                  <span className="actionMenu">
                    <a href="/cart">
                      <BsBag  />
                    </a>
                  </span>
                  <span className="actionMenu">
                  <a href="/wishlist">
                      <FaRegHeart  />
                    </a>
                  </span>
                  <div className="actionMenu"></div>
                </div>
              </div>
              <div className="pull-right mainHeaderCols searchWrapper"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;