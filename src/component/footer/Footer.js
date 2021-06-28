import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom'

function Footer() {

    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        rows: 2
        
      };

    return (
        <>  
        <div className="footer-area">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-lg-12">
                        <div className="footer-content-wrapper border-top pt-40">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-footer-widget">
                                        <div className="footer-logo mb-25">
                                            <img src="assets/img/logo-alula2.png" className="img-fluid" alt="" />
                                        </div>
                
                                        <div className="footer-text-block mb-10">
                                            <h5 className="footer-text-block__title">Address</h5>
                                            <p className="footer-text-block__content">4710-4890 Breckinridge St, UK Burlington, VT 05401</p>
                                        </div>
                
                                        <div className="footer-text-block mb-10">
                                            <h5 className="footer-text-block__title">Need Help?</h5>
                                            <p className="footer-text-block__content">Call: 1-800-345-6789</p>
                                        </div>
                
                                        <div className="footer-social-icon-block">
                                            <ul>
                                                <li><NavLink className="facebook-icon" to="//www.facebook.com"><i className="ion-social-facebook"></i></NavLink></li>
                                                <li><NavLink className="twitter-icon" to="//www.twitter.com"><i className="ion-social-twitter"></i></NavLink></li>
                                                <li><NavLink className="googleplus-icon" to="//plus.google.com"><i className="ion-social-googleplus"></i></NavLink></li>
                                                <li><NavLink className="instagram-icon" to="//www.instagram.com"><i className="ion-social-instagram-outline"></i></NavLink></li>
                                                <li><NavLink className="youtube-icon" to="//www.youtube.com"><i className="ion-social-youtube"></i></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="col-lg-4 col-md-6 mt-sm-30">
                                    
                                    <div className="single-footer-widget">
                                        <h4 className="footer-widget-title"><NavLink to="/">Follow on instagram</NavLink></h4>
                
                                        <div className="instagram-image-slider-wrapper">
                                            <div className="ht-slick-slider">
                                                <Slider {...settings}>
                                                
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a1.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a2.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a3.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a4.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a5.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a6.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a3.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a4.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a5.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a6.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a3.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a4.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a5.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>
                                                    
                                                    
                                                    <div className="single-instagram-image">
                                                        <NavLink to="/"><img src="assets/img/instagram/a6.jpg" className="img-fluid" alt="" /></NavLink>
                                                    </div>

                                                </Slider>
                                                
                                            </div>
                                        </div>  
                                    </div>
                                    
                                </div>
                
                                <div className="col-lg-4 col-md-6 mt-md-30 mt-sm-30">
                                    
                                    <div className="single-footer-widget">
                                        <h5 className="montserrat-footer-widget-title">Information</h5>
                
                                        <div className="footer-navigation">
                                            <nav>
                                                <ul>
                                                    <li><NavLink to="/">About Us</NavLink></li>
                                                    <li><NavLink to="/">Privacy Policy</NavLink></li>
                                                    <li><NavLink to="/">Contact Us</NavLink></li>
                                                    <li><NavLink to="/">Gift Certificates</NavLink></li>
                                                    <li><NavLink to="/">Specials</NavLink></li>
                                                    <li><NavLink to="/">Delivery Information</NavLink></li>
                                                    <li><NavLink to="/">Terms  Conditions</NavLink></li>
                                                    <li><NavLink to="/">Brands</NavLink></li>
                                                    <li><NavLink to="/">Affiliate</NavLink></li>
                                                    <li><NavLink to="/">Site Map</NavLink></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-text-area">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center text-md-left mb-sm-15">
                                    <div className="copyright-text">
                                        <p>Copyright © 2019 <NavLink to="/">Alula</NavLink>. All Right Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center text-md-right">
                                    <div className="payment-logo">
                                        <img src="assets/img/icons/payment.png" className="img-fluid" alt="" />
                                    </div>
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

export default Footer
