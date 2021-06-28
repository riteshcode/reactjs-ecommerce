import React from 'react'
import { useParams } from 'react-router-dom'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SingleProduct = ()=> {
    const { slug } = useParams();

    
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000

        
    };

    const settings_2={
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        asNavFor: ".big-image-slider99",
        focusOnSelect: true,
        arrows: true,
        prevArrow: {"buttonclassName": "slick-prev", "iconclassName": "ion-ios-arrow-left" },
        nextArrow: {"buttonclassName": "slick-next", "iconclassName": "ion-ios-arrow-right" }
    };

    const responsive = [
        {"breakpoint":1501, "settings": {"slidesToShow": 1} },
        {"breakpoint":1199, "settings": {"slidesToShow": 1} },
        {"breakpoint":991, "settings": {"slidesToShow": 1} },
        {"breakpoint":767, "settings": {"slidesToShow": 1} },
        {"breakpoint":575, "settings": {"slidesToShow": 1} },
        {"breakpoint":479, "settings": {"slidesToShow": 1} }
    ];


    return (
        <>

            <div className="product-details-area mb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-md-30 mb-sm-25">
                                            
                                <div className="big-image-slider-wrapper big-image-slider-wrapper--change-cursor">
                                    <div className="ht-slick-slider big-image-slider99">

                                    <Slider {...settings} {...responsive}>
                                                        
                                        <div className="big-image-slider-single-item">
                                            <img src="%PUBLIC_URL%/assets/img/products/big1-1.jpg" className="img-fluid" alt="" />
                                        </div>
                                        
                                                    
                                        <div className="big-image-slider-single-item">
                                            <img src="%PUBLIC_URL%assets/img/products/big1-2.jpg" className="img-fluid" alt="" />
                                        </div>
                                        
                                                    
                                        <div className="big-image-slider-single-item">
                                            <img src="%PUBLIC_URL%assets/img/products/big1-3.jpg" className="img-fluid" alt="" />
                                        </div>
                                        
                                                    
                                        <div className="big-image-slider-single-item">
                                            <img src="%PUBLIC_URL%assets/img/products/big1-4.jpg" className="img-fluid" alt="" />
                                        </div>
                                        
                                                    
                                        <div className="big-image-slider-single-item">
                                            <img src="%PUBLIC_URL%assets/img/products/big1-5.jpg" className="img-fluid" alt="" />
                                        </div>
                                        
                                                    
                                        <div className="big-image-slider-single-item">
                                            <img src="%PUBLIC_URL%assets/img/products/big1-6.jpg" className="img-fluid" alt="" />
                                        </div>
                                    </Slider>

                                    </div>
                                </div>
                                
                                
                                {/* <!--=======  small image slider  =======--> */}
                                
                                <div className="small-image-slider-wrapper small-image-slider-wrapper--quickview">
                                    <div className="ht-slick-slider small-image-slider">
                                    
                                    <Slider {...settings_2}>
                                        <div className="small-image-slider-single-item">
                                            <img src="assets/img/products/small1-1.jpg" className="img-fluid" alt="" />
                                        </div>
                                    </Slider>

                                    </div>
                                </div>
                                
                                {/* <!--=======  End of small image slider  =======--> */}
                                
                        </div>

                        <div className="col-lg-6">
                            {/* <!--=======  product details content  =======--> */}
                                                
                            <div className="product-detail-content">
                                <div className="tags mb-5">
                                    <span className="tag-title">Tags:</span>
                                    <ul className="tag-list">
                                        <li><a href="#">Plant</a>,</li>
                                        <li><a href="#">Garden</a></li>
                                    </ul>
                                </div>

                                <h3 className="product-details-title mb-15">Lorem ipsum indoor plants</h3>
                                <div className="rating d-inline-block mr-15">
                                    <i className="ion-android-star active"></i>
                                    <i className="ion-android-star active"></i>
                                    <i className="ion-android-star active"></i>
                                    <i className="ion-android-star active"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="review-links d-inline-block">
                                    <a href="#">(1 Review)</a> <span className="separator">|</span> <a href="#">Write A Review</a>
                                </div>
                                <p className="product-price product-price--big mb-10"><span className="discounted-price">$100.00</span> <span className="main-price discounted">$120.00</span></p>

                                <div className="product-info-block mb-30">
                                    <div className="single-info">
                                        <span className="title">Ex Tax:</span>
                                        <span className="value">$95.00</span>
                                    </div>
                                    <div className="single-info">
                                        <span className="title">Brand:</span>
                                        <span className="value"><a href="#">Brac</a></span>
                                    </div>
                                    <div className="single-info">
                                        <span className="title">Product Code:</span>
                                        <span className="value">abcd1234</span>
                                    </div>
                                    <div className="single-info">
                                        <span className="title">Availability:</span>
                                        <span className="value stock-red">In stock</span>
                                    </div>
                                </div>

                                <div className="product-short-desc mb-25">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas consectetur inventore voluptatem dignissimos nemo repellendus est, harum maiores veritatis quidem.</p>
                                </div>

                                <div className="quantity mb-20">
                                    <span className="quantity-title mr-20">Qty</span> 
                                    <div className="pro-qty mr-15 mb-lg-20 mb-md-20 mb-sm-20">
                                        <input type="text" value="1" />
                                    </div>
                                    <button className="theme-button product-cart-button">+ Add to Cart</button>
                                </div>

                                <div className="compare-button d-inline-block mr-40">
                                    <a href="#"><i className="icon-sliders"></i> Compare This Product</a>
                                </div>

                                <div className="wishlist-button d-inline-block">
                                    <a href="#"><i className="icon-heart"></i> Add to Wishlist</a>
                                </div>

                                <div className="product-details-feature-wrapper d-flex justify-content-start mt-20">
                                        
                                    <div className="single-icon-feature single-icon-feature--product-details">
                                        <div className="single-icon-feature__icon">
                                            <img src="assets/img/icons/free-shipping.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="single-icon-feature__content">
                                            <p className="feature-text">Free Shipping</p>
                                            <p className="feature-text">Ships Today</p>
                                        </div>
                                    </div>
                                    
                                        
                                    <div className="single-icon-feature single-icon-feature--product-details ml-30 ml-xs-0 ml-xxs-0">
                                        <div className="single-icon-feature__icon">
                                            <img src="assets/img/icons/return.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="single-icon-feature__content">
                                            <p className="feature-text">Easy</p>
                                            <p className="feature-text">Returns</p>
                                        </div>
                                    </div>
                                    
                                        
                                    <div className="single-icon-feature single-icon-feature--product-details ml-30 ml-xs-0 ml-xxs-0">
                                        <div className="single-icon-feature__icon">
                                            <img src="assets/img/icons/guarantee.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="single-icon-feature__content">
                                            <p className="feature-text">Lowest Price</p>
                                            <p className="feature-text">Guarantee</p>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="social-share-buttons mt-20">
                                    <h3>share this product</h3>
                                    <ul>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                    </ul>
                                </div>

                            </div>

                            {/* <!--=======  End of product details content  =======-->                     */}
                        </div>
                    </div>
                </div>
            </div>
            {/* product detail end */}
            

            {/* review and description */}
            

            
            <div className="product-description-review-area mb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=======  product description review container  =======--> */}
                            
                            <div className="tab-slider-wrapper product-description-review-container">
                                <nav>
                                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="description-tab" data-toggle="tab" href="#product-description" role="tab"
                                            aria-selected="true">Description</a>
                                        <a className="nav-item nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab"
                                            aria-selected="false">Review</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="product-description" role="tabpanel" aria-labelledby="description-tab">
                                        {/* <!--=======  product description  =======--> */}
                                        
                                        <div className="product-description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                            
                                            <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                                        </div>
                                        
                                        {/* <!--=======  End of product description  =======--> */}
                                    </div>
                                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                        {/* <!--=======  review content  =======--> */}
                                        
                                        <div className="product-ratting-wrap">
                                            <div className="pro-avg-ratting">
                                                <h4>4.5 <span>(Overall)</span></h4>
                                                <span>Based on 9 Comments</span>
                                            </div>
                                            <div className="ratting-list">
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <span>(5)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <span>(3)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <span>(1)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <span>(0)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <span>(0)</span>
                                                </div>
                                            </div>
                                            <div className="rattings-wrapper">

                                                <div className="sin-rattings">
                                                    <div className="ratting-author">
                                                        <h3>Cristopher Lee</h3>
                                                        <div className="ratting-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span>(5)</span>
                                                        </div>
                                                    </div>
                                                    <p>enim ipsam voluptatem quia voluptas sit
                                                        aspernatur aut odit aut fugit, sed quia res eos
                                                        qui ratione voluptatem sequi Neque porro
                                                        quisquam est, qui dolorem ipsum quia dolor sit
                                                    amet, consectetur, adipisci veli</p>
                                                </div>

                                                <div className="sin-rattings">
                                                    <div className="ratting-author">
                                                        <h3>Rashed Mahmud</h3>
                                                        <div className="ratting-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span>(5)</span>
                                                        </div>
                                                    </div>
                                                    <p>enim ipsam voluptatem quia voluptas sit
                                                        aspernatur aut odit aut fugit, sed quia res eos
                                                        qui ratione voluptatem sequi Neque porro
                                                        quisquam est, qui dolorem ipsum quia dolor sit
                                                    amet, consectetur, adipisci veli</p>
                                                </div>

                                                <div className="sin-rattings">
                                                    <div className="ratting-author">
                                                        <h3>Hasan Mubarak</h3>
                                                        <div className="ratting-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span>(5)</span>
                                                        </div>
                                                    </div>
                                                    <p>enim ipsam voluptatem quia voluptas sit
                                                        aspernatur aut odit aut fugit, sed quia res eos
                                                        qui ratione voluptatem sequi Neque porro
                                                        quisquam est, qui dolorem ipsum quia dolor sit
                                                    amet, consectetur, adipisci veli</p>
                                                </div>

                                            </div>
                                            <div className="ratting-form-wrapper fix">
                                                <h3>Add your Comments</h3>
                                                <form action="#">
                                                    <div className="ratting-form row">
                                                        <div className="col-12 mb-15">
                                                            <h5>Rating:</h5>
                                                            <div className="ratting-star fix">
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-15">
                                                            <label for="name">Name:</label>
                                                            <input id="name" placeholder="Name" type="text" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-15">
                                                            <label for="email">Email:</label>
                                                            <input id="email" placeholder="Email" type="text" />
                                                        </div>
                                                        <div className="col-12 mb-15">
                                                            <label for="your-review">Your Review:</label>
                                                            <textarea name="review" id="your-review"
                                                            placeholder="Write a review"></textarea>
                                                        </div>
                                                        <div className="col-12">
                                                            <input value="add review" type="submit" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        
                                        {/* <!--=======  End of review content  =======--> */}
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!--=======  End of product description review container  =======--> */}
                        </div>
                    </div>
                </div>
            </div>


    {/* end review ans description */}





            
            {/* related product */}
        
            <div className="product-single-row-slider-area mb-40">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=======  section title  =======--> */}
                            
                            <div className="section-title mb-20">
                                <h2>Related Products</h2>
                            </div>
                            
                            {/* <!--=======  End of section title  =======--> */}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=======  product single row slider wrapper  =======--> */}
                            
                            <div className="product-single-row-slider-wrapper">
                                <div className="ht-slick-slider"
                                data-slick-setting='{
                                    "slidesToShow": 4,
                                    "slidesToScroll": 1,
                                    "dots": false,
                                    "autoplay": false,
                                    "autoplaySpeed": 5000,
                                    "speed": 1000,
                                    "arrows": true,
                                    "infinite": false,
                                    "prevArrow": {"buttonclassName": "slick-prev", "iconclassName": "ion-ios-arrow-left" },
                                    "nextArrow": {"buttonclassName": "slick-next", "iconclassName": "ion-ios-arrow-right" }
                                }'
                                data-slick-responsive='[
                                    {"breakpoint":1501, "settings": {"slidesToShow": 4} },
                                    {"breakpoint":1199, "settings": {"slidesToShow": 4} },
                                    {"breakpoint":991, "settings": {"slidesToShow": 3} },
                                    {"breakpoint":767, "settings": {"slidesToShow": 2, "arrows": false} },
                                    {"breakpoint":575, "settings": {"slidesToShow": 2, "arrows": false} },
                                    {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false} }
                                ]'
                                >
                                    
                                    <div className="single-slider-product-wrapper">
                                        <div className="single-slider-product">
                                            <div className="single-slider-product__image">
                                                <a href="single-product.html">
                                                    <img src="%PUBLIC_URL%assets/img/products/medium14.jpg" className="img-fluid" alt="" />
                                                    <img src="%PUBLIC_URL%assets/img/products/medium15.jpg" className="img-fluid" alt="" />
                                                </a>

                                                <span className="discount-label discount-label--green">-20%</span>

                                                <div className="hover-icons">
                                                    <ul>
                                                        <li><a data-toggle = "modal" data-target="#quick-view-modal-container" href="javascript:void(0)"><i className="icon-eye"></i></a></li>
                                                        <li><a href="javascript:void(0)"><i className="icon-heart"></i></a></li>
                                                        <li><a href="javascript:void(0)"><i className="icon-sliders"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="single-slider-product__content">
                                                <p className="product-title"><a href="single-product.html">Cillum dolore garden tools</a></p>
                                                <div className="rating">
                                                    <i className="ion-android-star active"></i>
                                                    <i className="ion-android-star active"></i>
                                                    <i className="ion-android-star active"></i>
                                                    <i className="ion-android-star active"></i>
                                                    <i className="ion-android-star"></i>
                                                </div>
                                                <p className="product-price"><span className="discounted-price">$30.00</span> <span className="main-price discounted">$50.00</span></p>
            
                                                <span className="cart-icon"><a href="javascript:void(0)"><i className="icon-shopping-cart"></i></a></span>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            
                            {/* <!--=======  End of product single row slider wrapper  =======-->
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
