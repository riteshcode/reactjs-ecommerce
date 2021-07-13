import React from 'react'
import { additemtocart } from '../../featured/cart/cart-slice'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'


import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure()


function Product(props) {
    
    const dispatch = useDispatch();
  
    {/* cart add */}

    const addToCart = (elem) =>{

        dispatch(additemtocart(elem));
    
    }
    console.log(props.data);
    const { product_name,product_price,id,product_image,product_slug } = props.data
    
    return (
        <>
        <div className="col-12 col-md-6 col-sm-6 mb-20 col-lg-4">
                            
                            <div className="single-slider-product grid-view-product">
                                <div className="single-slider-product__image">
                                    <NavLink to={`/product/${product_slug}`}>
                                        <img src={product_image} className="img-fluid" alt="" />
                                    </NavLink>

                                    <span className="discount-label discount-label--green">-10%</span>

                                    <div className="hover-icons">
                                        <ul>
                                            <li><a data-toggle = "modal" data-target="#quick-view-modal-container" href="/"><i className="icon-eye"></i></a></li>
                                            <li><a href="/"><i className="icon-heart"></i></a></li>
                                            <li><a href="/"><i className="icon-sliders"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="single-slider-product__content">
                                    <p className="product-title">
                                        <NavLink to={`/product/${product_slug}`}>
                                            {product_name}
                                        </NavLink>
                                    </p>
                                    <div className="rating">
                                        <i className="ion-android-star active"></i>
                                        <i className="ion-android-star active"></i>
                                        <i className="ion-android-star active"></i>
                                        <i className="ion-android-star active"></i>
                                        <i className="ion-android-star"></i>
                                    </div>
                                    <p className="product-price"><span className="discounted-price">${product_price}</span> <span className="main-price discounted">${product_price}</span></p>

                                    <span className="cart-icon"><a  onClick={ () =>addToCart(props.data) }><i className="icon-shopping-cart"></i></a></span>
                                </div>
                            </div>
                            
                            <div className="single-slider-product single-slider-product--list-view list-view-product">
                                <div className="single-slider-product__image single-slider-product--list-view__image">
                                    <a href="single-product.html">
                                        <img src="assets/img/products/medium10.jpg" className="img-fluid" alt="" />
                                    </a>

                                    <span className="discount-label discount-label--green">-10%</span>
                                </div>

                                <div className="single-slider-product__content  single-slider-product--list-view__content">
                                    <div className="single-slider-product--list-view__content__details">
                                        <p className="product-title"><a href="single-product.html">Cillum dolore garden lorem ipsum plant</a></p>
                                        <div className="rating">
                                            <i className="ion-android-star active"></i>
                                            <i className="ion-android-star active"></i>
                                            <i className="ion-android-star active"></i>
                                            <i className="ion-android-star active"></i>
                                            <i className="ion-android-star"></i>
                                        </div>
                                        
                                        <p className="short-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.</p>
                                    </div>

                                    <div className="single-slider-product--list-view__content__actions">
                                        <div className="availability mb-10">
                                            <span className="availability-title">Availabe:</span>
                                            <span className="availability-value">Out of stock</span>
                                        </div>

                                        <p className="product-price"><span className="discounted-price">$50.00</span> <span className="main-price discounted">$120.00</span></p>

                                        <a href="#" className="theme-button list-cart-button mb-10">Add to Cart</a>

                                        <div className="hover-icons">
                                            <ul>
                                                <li><a data-toggle = "modal" data-target="#quick-view-modal-container" href="/"><i className="icon-eye"></i></a></li>
                                                <li><a href="/"><i className="icon-heart"></i></a></li>
                                                <li><a href="/"><i className="icon-sliders"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            

                        </div>
            
        </>
    )
}

export default Product
