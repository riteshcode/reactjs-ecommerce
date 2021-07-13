import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {deleteItemFromCart,incrementItemQty,getCartList,decrementItemQty} from './cart-slice'
import { NavLink } from 'react-router-dom'


const CartProduct = () => {
  const cartitem = useSelector(getCartList)
  
  const [cartTotal, setCartTotal] = useState(0);
  
  const dispatch = useDispatch();

  const deleteItem = (productsku) =>{
    const status = dispatch(deleteItemFromCart(productsku))
    console.log(status)
  }
  useEffect(() => {
    let total = 0;
    cartitem.filter((cart)=>{
      return total += parseInt(cart.product_price) * parseInt(cart.pqty)
    })
    setCartTotal(total)
  }, [cartitem])


  return (
    <>

      <div className="container">
            <div className="row">
                <div className="col-12">
                    <form action="#">				
                        
                        <div className="cart-table table-responsive mb-40">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="pro-thumbnail">Image</th>
                                        <th className="pro-title">Product</th>
                                        <th className="pro-price">Price</th>
                                        <th className="pro-quantity">Quantity</th>
                                        <th className="pro-subtotal">Total</th>
                                        <th className="pro-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {cartitem.map((cart, index) => (
                    
                                      <tr key={index}>
                                          <td className="pro-thumbnail"><a href="single-product.html">
                                            <img src={cart.product_image} className="img-fluid" alt="Product" /></a></td>
                                          <td className="pro-title"><a href="single-product.html">{cart.product_name}</a></td>
                                          <td className="pro-price"><span>${cart.product_price}</span></td>
                                          <td className="pro-quantity">
                                            <div className="pro-qty">
                                            <span className="btn btn-sm btn-danger" onClick={ ()=>dispatch(decrementItemQty(cart.sku)) }>-</span>
                                              <input type="text" value={cart.pqty} />
                                              <span className="btn btn-sm btn-success" onClick={ ()=>dispatch(incrementItemQty(cart.sku))}>+</span>
                                            
                                            </div>
                                          </td> 
                                          <td className="pro-subtotal"><span>${cart.product_price * cart.pqty}</span></td>
                                          <td className="pro-remove">
                                            <span href="#" onClick={()=>deleteItem(cart.sku)}><i className="fa fa-trash-o"></i></span>
                                          </td>
                                      </tr>
                                      
                                  ))}
                                </tbody>
                            </table>
                        </div>
                        
                        
                        
                    </form>	
                        
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            
                            <div className="calculate-shipping">
                                <h4>Calculate Shipping</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-25">
                                            <select className="nice-select">
                                                <option>Bangladesh</option>
                                                <option>China</option>
                                                <option>country</option>
                                                <option>India</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-12 mb-25">
                                            <select className="nice-select">
                                                <option>Dhaka</option>
                                                <option>Barisal</option>
                                                <option>Khulna</option>
                                                <option>Comilla</option>
                                                <option>Chittagong</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-12 mb-25">
                                            <input type="text" placeholder="Postcode / Zip" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-25">
                                            <input type="submit" value="Estimate" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            
                            <div className="discount-coupon">
                                <h4>Discount Coupon Code</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-25">
                                            <input type="text" placeholder="Coupon Code" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-25">
                                            <input type="submit" value="Apply Code" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            
                        </div>

                        
                        <div className="col-lg-6 col-12 d-flex">
                        
                            <div className="cart-summary">
                                <div className="cart-summary-wrap">
                                    <h4>Cart Summary</h4>
                                    <p>Sub Total <span>${cartTotal}</span></p>
                                    <p>Shipping Cost <span>$00.00</span></p>
                                    <h2>Grand Total <span>${cartTotal}</span></h2>
                                </div>
                                <div className="cart-summary-button">
                                    <NavLink to="/checkout" className=" btn btn-success checkout-btn form-control">Checkout</NavLink>
                                </div>
                            </div>
                        
                            
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>



    </>
  );
};

export default CartProduct;
