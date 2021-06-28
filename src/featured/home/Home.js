import React, { useState,useEffect } from 'react'
import SideCategory from '../../component/home/SideCategory'
import Product from '../../component/home/Product'
import axios from 'axios'
import { additemtocart } from '../../featured/cart/cart-slice'
import { useDispatch, useSelector } from 'react-redux';
 

function Home() {
    
    const [productlist, setProductList] = useState([])
    const dispatch = useDispatch();
  

    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/api/product').then( (response)=>{
            console.log(response.data.data)
            setProductList(response.data.data)
        }).catch( (error)=>{
            console.log(error)
        })

    }, [])

    
    return (
        <>
        <div className="container">
        <div className="row">
                <div className="col-lg-3 order-2 order-lg-1">
                    <SideCategory />
                    
                </div>
                <div className="col-lg-9 order-1 order-lg-2">
                    
                    <div className="shop-banner mb-30">
                        <img src="assets/img/banners/shop-banner.jpg" className="img-fluid" alt="" />
                    </div>
                    
                    
                    <div className="shop-header mb-30">
                        <div className="shop-header__left">
                            <div className="grid-icons mr-20">
                                <button data-target="grid three-column" data-tippy="3" data-tippy-inertia="true" data-tippy-animation="fade" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme = "sharpborder" className="three-column"></button>
                                <button data-target="grid four-column" data-tippy="4" data-tippy-inertia="true" data-tippy-animation="fade" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme = "sharpborder"  className="four-column d-none d-lg-block"></button>
                                <button data-target="list" data-tippy="List" data-tippy-inertia="true" data-tippy-animation="fade" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme = "sharpborder"  className="active list-view"></button>
                            </div>

                            <div className="shop-header__left__message">
                                Showing 1 to 9 of 15 (2 Pages)
                            </div>
                        </div>

                        <div className="shop-header__right">

                            <div className="single-select-block d-inline-block mr-50 mr-lg-10 mr-md-10 mr-sm-10">
                                <span className="select-title">Show:</span>
                                <select>
                                    <option value="1">10</option>
                                    <option value="2">20</option>
                                    <option value="3">30</option>
                                    <option value="4">40</option>
                                </select>
                            </div>

                            <div className="single-select-block d-inline-block">
                                <span className="select-title">Sort By:</span>
                                <select>
                                    <option value="1">Default</option>
                                    <option value="2">Name (A-Z)</option>
                                    <option value="3">Price (min - max)</option>
                                    <option value="4">Color</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="row shop-product-wrap mb-10 grid three-column">
                        
                        { productlist.map( (product)=> <Product key={product.sku} data={product} />) }
                    </div>
                    
                    
                    <div className="pagination-section mb-md-30 mb-sm-30">
                        <ul className="pagination">
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">7|</a></li>
                        </ul>

                        <div className="pagination-text">
                            Showing 1 to 9 of 15 (2 Pages)
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
