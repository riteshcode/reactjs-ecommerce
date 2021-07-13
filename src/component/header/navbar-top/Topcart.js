import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { getCartQuantity,deleteItemFromCart,getCartList } from '../../../featured/cart/cart-slice'
import { NavLink } from 'react-router-dom'


function Topcart() {

    const cartQuantity = useSelector(getCartQuantity);
    
    const cartShow = ()=>{
        var elemt = document.getElementById('topcart-list');
        elemt.classList.add('opencart');

    }

    const cartitem = useSelector(getCartList)
  
    const [cartTotal, setCartTotal] = useState(0);
    
    const dispatch = useDispatch();
  
    const deleteItem = (productsku) =>{
      const status = dispatch(deleteItemFromCart(productsku))
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
            <div className="col-6 col-xl-1 col-lg-2 text-right order-2 order-sm-3 order-lg-4 order-xs-2 col-md-2 col-sm-2">
                                    
                <div className="header-cart-icon">
                    <NavLink to='/cart' href="" id="small-cart-trigger" onMouseOver={ ()=>cartShow() } className="small-cart-trigger">
                        <i className="icon-shopping-cart"></i>
                        <span className="cart-counter">{cartQuantity}</span>
                    </NavLink>

                    
                    <div className="small-cart deactive-dropdown-menu" id="topcart-list" onMouseLeave={()=>{ 
                        var elemt = document.getElementById('topcart-list');
                        elemt.classList.remove('opencart');}
                        }>
                        <div className="small-cart-item-wrapper">
                            
                            {cartitem.map((cart, index) => (
                                <div className="single-item" key={index}>
                                    <div className="image">
                                        <a href="single-product.html">
                                            <img src={cart.product_image} className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <p className="cart-name"><a href="single-product.html">{cart.product_name}</a></p>
                                        <p className="cart-quantity"><span className="quantity-mes">{cart.pqty} x </span> ${cart.product_price}</p>
                                    </div>
                                    <a href="" className="remove-icon" onClick={()=>deleteItem(cart.sku)}><i className="ion-close-round"></i></a>
                                </div>
                            ))}
                        </div>

                        <div className="cart-calculation-table">
                            <table className="table mb-25">
                                <tbody>
                                    <tr>
                                        <td className="text-left">Sub-Total :</td>
                                        <td className="text-right">${cartTotal}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">Shipping :</td>
                                        <td className="text-right">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">Total :</td>
                                        <td className="text-right">${cartTotal}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="cart-buttons">
                                <NavLink to='/cart' className="theme-button">View Cart</NavLink>
                                <NavLink to='/checkout' className="theme-button">Checkout</NavLink>
                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>   
        </>
    )
}

export default Topcart
