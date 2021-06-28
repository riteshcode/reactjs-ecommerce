import React from 'react'

import { NavLink } from 'react-router-dom'

import TopCart from './navbar-top/Topcart'

function NavbarTop() {
    
    return (
        <>
        <div className="navigation-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                                            
                        <div className="navigation-top-topbar pt-10 pb-10"> 
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-6 text-center text-md-left">
                       
                                    <div className="header-top-social-links">
                                        <span className="follow-text mr-15">Follow Us:</span>
                                        
                                        <ul className="social-link-small">
                                            <li><a href="//www.facebook.com"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="//www.twitter.com"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="//plus.google.com"><i className="ion-social-googleplus-outline"></i></a></li>
                                            <li><a href="//www.instagram.com"><i className="ion-social-instagram-outline"></i></a></li>
                                            <li><a href="//www.youtube.com"><i className="ion-social-youtube"></i></a></li>
                                        </ul>
                                        
                                    </div>
                                    
                                    
                                </div>
                                <div className="col-lg-4 offset-lg-4 col-md-6">
                                    
                                    <div className="headertop-dropdown-container justify-content-center justify-content-md-end">
                                        <div className="header-top-single-dropdown">
                                            <NavLink to="/login" className="active-dropdown-trigger" id="user-options">My Account <i className="ion-ios-arrow-down"></i></NavLink>
                                            
                                            <div className="header-top-single-dropdown__dropdown-menu-items deactive-dropdown-menu extra-small-mobile-fix">
                                                <ul>
                                                    <li><NavLink to="/register">Register</NavLink></li>
                                                    <li><NavLink to="/login">Login</NavLink></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        <span className="separator">|</span>
                                        <div className="header-top-single-dropdown">
                                            <a href="javascript:void(0)" className="active-dropdown-trigger" id="language-options"> <img src="assets/img/icons/en-gb.png" alt="" /> En-Gb <i className="ion-ios-arrow-down"></i></a>
                                            
                                            <div className="header-top-single-dropdown__dropdown-menu-items deactive-dropdown-menu">
                                                <ul>
                                                    <li><a href="#"> <img src="assets/img/icons/en-gb.png" alt="" /> English </a></li>
                                                    <li><a href="#"> <img src="assets/img/icons/de-de.png" alt="" /> Germany </a></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        <span className="separator">|</span>
                                        <div className="header-top-single-dropdown">
                                            <a href="javascript:void(0)" className="active-dropdown-trigger" id="currency-options">USD <i className="ion-ios-arrow-down"></i></a>
                                            
                                            <div className="header-top-single-dropdown__dropdown-menu-items deactive-dropdown-menu">
                                                <ul>
                                                    <li><a href="#">€ EURO</a></li>
                                                    <li><a href="#">£ Pound Sterling</a></li>
                                                    <li><a href="#">$ US Dollar</a></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    

                        <div className="navigation-top-search-area pt-25 pb-25">
                            <div className="row align-items-center">
                                <div className="col-6 col-xl-2 col-lg-3 order-1 col-md-6 col-sm-5">
                                    
                                    <div className="logo">
                                        <NavLink to="/">
                                            <img src="assets/img/logo.png" className="img-fluid" alt="" />
                                        </NavLink>
                                    </div>
                                    
                                </div>

                                <div className="col-xl-5 offset-xl-1 col-lg-4 order-4 order-lg-2 mt-md-25 mt-sm-25">
                                    
                                    <div className="search-bar">
                                        <form action="#">
                                            <input type="search" placeholder="Search entire store here ..." />
                                            <button type="submit"> <i className="icon-search"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 order-3 order-sm-2 order-lg-3 order-xs-3 col-md-4 col-sm-5 text-center text-sm-left mt-xs-25">
                                    
                                    <div className="customer-support-text">
                                        <div className="icon">
                                            <img src="assets/img/icons/icon-header-phone.png" className="img-fluid" alt="" />
                                        </div>

                                        <div className="text">
                                            <span>Customer Support</span>
                                            <p>(08) 12 345 789</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                 {/* top cart count and list show */}

                                <TopCart />
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavbarTop
