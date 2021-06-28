import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    
    return (
        
        <div className="navigation-menu-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-menu d-none d-lg-block">
                            <nav>
                                <ul>
                                    <li className="active menu-item-has-children">
                                        <NavLink to="/">HOME</NavLink>
                                    </li>
                                    
                                    <li className="menu-item-has-children"><a href="#">PAGES</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children"><a href="#">Page List One</a>
                                                <ul className="sub-menu">
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">page list two</a>
                                                <ul className="sub-menu">
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="login-register.html">Login Register</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">Page list three</a>
                                                <ul className="sub-menu">
                                                    <li><a href="compare.html">Compare</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="about.html">About Us</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item-has-children"><a href="shop-left-sidebar.html">SHOP</a>
                                        <ul className="mega-menu four-column">
                                            <li><a href="#">Shop Grid</a>
                                                <ul>
                                                    <li><a href="shop-3-column.html">shop 3 column</a></li>
                                                    <li><a href="shop-4-column.html">shop 4 column</a></li>
                                                    <li><a href="shop-left-sidebar.html">shop left sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li><a href="shop-list-left-sidebar.html">Shop List</a>
                                                <ul>
                                                    <li><a href="shop-list.html">shop List</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">shop List Left Sidebar</a></li>
                                                    <li><a href="shop-list-right-sidebar.html">shop List Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="single-product.html">Single Product</a>
                                                <ul>
                                                    <li><a href="single-product.html">Single Product</a></li>
                                                    <li><a href="single-product-variable.html">Single Product variable</a></li>
                                                    <li><a href="single-product-affiliate.html">Single Product affiliate</a></li>
                                                    <li><a href="single-product-group.html">Single Product group</a></li>
                                                    <li><a href="single-product-tabstyle-2.html">Tab Style 2</a></li>
                                                    <li><a href="single-product-tabstyle-3.html">Tab Style 3</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li><a href="single-product.html">Single Product</a>
                                                <ul>
                                                    <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                    <li><a href="single-product-gallery-right.html">Gallery Right</a></li>
                                                    <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                    <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                    <li><a href="single-product-slider-box.html">Slider Box</a></li>
                                                </ul>
                                            </li>
                                            <li className="megamenu-banner d-none d-lg-block mt-30 w-100">
                                                <a href="shop-left-sidebar.html" className="mb-0">
                                                    <img src="assets/img/banners/img-bottom-menu.jpg" className="img-fluid" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item-has-children"><a href="blog-left-sidebar.html">BLOG</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog-post-left-sidebar.html">Blog Post Left Sidebar</a></li>
                                            <li><a href="blog-post-right-sidebar.html">Blog Post Right Sidebar</a></li>
                                            <li><a href="blog-post-image-format.html">Blog Post Image Format</a></li>
                                            <li><a href="blog-post-image-gallery.html">Blog Post Image Gallery</a></li>
                                            <li><a href="blog-post-audio-format.html">Blog Post Audio Format</a></li>
                                            <li><a href="blog-post-video-format.html">Blog Post Video Format</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="contact.html">CONTACT</a></li>
                                </ul>
                            </nav>
                        
                        </div>
                        <div className="mobile-menu-wrapper d-block d-lg-none pt-15">
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
