import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { notify } from "../../component/common/ToastNotification";
import {getCartList} from '../../featured/cart/cart-slice';

function Checkout() {
    let history = useHistory();

    const [shippingData, setshippingData] = useState({
        'billing_fname':'',
        'billing_lname':'',
        'billing_email':'',
        'billing_phone':'',
        'billing_company':'',
        'billing_add1':'',
        'billing_add2':'',
        'billing_country':'',
        'billing_city':'',
        'billing_state':'',
        'billing_zipcode':'',
        'shipping_diff':false,
        'shipping_fname':'',
        'shipping_lname':'',
        'shipping_email':'',
        'shipping_phone':'',
        'shipping_company':'',
        'shipping_add1':'',
        'shipping_add2':'',
        'shipping_country':'',
        'shipping_city':'',
        'shipping_state':'',
        'shipping_zipcode':'',
        'payment_method':'',
        
    })

    const [isShippingDiff, setisShippingDiff] = useState(true)

    const ToggleShipping = ()=>{
        
        if(isShippingDiff){
            document.getElementById('shipping-form').classList.add('openShipping');
            setisShippingDiff(false)
            shippingData.shipping_diff = true;
        }else{
            document.getElementById('shipping-form').classList.remove('openShipping');
            setisShippingDiff(true)

            shippingData.shipping_diff = false;
        }
        setshippingData(shippingData);

    }


    const [cartTotal, setCartTotal] = useState(0);
    const cartitem = useSelector(getCartList)
    useEffect(() => {
        let total = 0;
        cartitem.filter((cart)=>{
        return total += parseInt(cart.product_price) * parseInt(cart.pqty)
        })
        setCartTotal(total)
    }, [cartitem])

    // form input handle
    const HandlerInput = (event) =>{

        // var filedname = event.target.name;
        var filedname = 'billing_fname';
        let value = event.target.value;

        console.log(filedname);
        console.log(value);
        shippingData.filedname = value;
        setshippingData(shippingData);
        console.log(shippingData);
        
    }

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    function box_red(htmlid,type){
        if(type == 'add')
            document.getElementsByName(htmlid)[0].classList.add('errorInput');
        else
            document.getElementsByName(htmlid)[0].classList.remove('errorInput');
    
    }


/*
place order function

*/

    const placeOrder = (event) =>{
        event.preventDefault();

        /* adding validation empty condition check logic here */

        let error_status = [];
        var i=1;
        for (let key in shippingData){
            if(shippingData.hasOwnProperty(key)){

                if(key == 'shipping_diff'){
                    if(shippingData[key]==false)
                        break;
                
                }else{

                    if(shippingData[key] == ''){
                        console.log(key+' empyt - '+shippingData[key]);
                        box_red(key,'add')
                        printError(key+'_err','Please enter '+key);
                        error_status[i++] = false;
                    }else{
                        error_status[i++] = true;
                    }
                    
                }
                console.log(`${key} : ${shippingData[key]}`)
            }
        }

        // if any field not fill stop the form submit excution

        var found = error_status.find(function(value){
            return value==false;
        })
        
        if(found == false){         
            return false;
        }

        
        shippingData.product = cartitem;
        
        axios.post(process.env.REACT_APP_SERVER_URL+'place_order',shippingData)
            .then((res)=>{
                console.log(res)
                if(res.data.status){
                    let order_id = res.data.order_id;

                    if(shippingData.payment_method == 'paytm')
                        history.push('/payment/paytm/'+order_id);
                    
                }
            })
            .catch((error)=>{
                console.log(error);
                notify('Some technical issue !','warning');
                    
            });

                    

    }

    /* end place order  */

    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-12">
                    
                    <form action="#" className="checkout-form" onSubmit={ (e) => placeOrder(e)}>
                        <div className="row row-40">
                            
                            <div className="col-lg-7 mb-20">
                                
                                <div id="billing-form" className="mb-40">
                                    <h4 className="checkout-title">Billing Address</h4>
    
                                    <div className="row">
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>First Name*</label>
                                            <input type="text" placeholder="First Name" className="" name="billing_fname" onChange={ 
                                                (e) => {
                                                    box_red('billing_fname','')
                                                    printError('billing_fname_err','');
                                                    shippingData.billing_fname = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } />
                                            <div class="errorInputText" id="billing_fname_err"></div>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Last Name*</label>
                                            <input type="text" placeholder="Last Name" name="billing_lname"  onChange={ 
                                                (e) => {
                                                    box_red('billing_lname','remove')
                                                    printError('billing_lname_err','');
                                                    shippingData.billing_lname = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } />
                                            <div class="errorInputText" id="billing_lname_err"></div>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input type="email" placeholder="Email Address" name="billing_email" onChange={ 
                                                (e) => {
                                                    shippingData.billing_email = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } />
                                            <div class="errorInputText" id="billing_email_err"></div>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Phone no*</label>
                                            <input type="text" placeholder="Phone number" name="billing_phone" onChange={ 
                                                (e) => {
                                                    shippingData.billing_phone = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } /> 
                                            <div class="errorInputText" id="billing_phone_err"></div>
                                        </div>
    
                                        <div className="col-12 mb-20">
                                            <label>Company Name</label>
                                            <input type="text" placeholder="Company Name" name="billing_company" onChange={ 
                                                (e) => {
                                                    shippingData.billing_company = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } />
                                            <div class="errorInputText" id="billing_company_err"></div>
                                        </div>
    
                                        <div className="col-12 mb-20">
                                            <label>Address*</label>
                                            <input type="text" placeholder="Address line 1"  name="billing_add1" onChange={ 
                                                (e) => {
                                                    shippingData.billing_add1 = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            }/>
                                            <div class="errorInputText" id="billing_add1_err"></div>

                                            <input type="text" placeholder="Address line 2"  name="billing_add2" onChange={ 
                                                (e) => {
                                                    shippingData.billing_add2 = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            }/>
                                            <div class="errorInputText" id="billing_add2_err"></div>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Country*</label>
                                            <select className="nice-select" name="billing_country" onChange={ 
                                                (e) => {
                                                    shippingData.billing_country = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            }>
                                                <option>Bangladesh</option>
                                                <option>China</option>
                                                <option>country</option>
                                                <option>India</option>
                                                <option>Japan</option>
                                            </select>
                                            <div class="errorInputText" id="billing_country_err"></div>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Town/City*</label>
                                            <input type="text" placeholder="Town/City" name="billing_city" onChange={ 
                                                (e) => {
                                                    shippingData.billing_city = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } />
                                            <div class="errorInputText" id="billing_city_err"></div>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>State*</label>
                                            <input type="text" placeholder="State" name="billing_state" onChange={ 
                                                (e) => {
                                                    shippingData.billing_state = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } />
                                            <div class="errorInputText" id="billing_state_err"></div>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Zip Code*</label>
                                            <input type="text" placeholder="Zip Code" name="billing_zipcode" onChange={ 
                                                (e) => {
                                                    shippingData.billing_zipcode = e.target.value;
                                                    setshippingData(shippingData);
                                                } 
                                            } />
                                            <div class="errorInputText" id="billing_zipcode_err"></div>
                                        </div>
    
                                        <div className="col-12 mb-20">
                                            <div className="check-box">
                                                <input type="checkbox" id="shiping_address" data-shipping onClick={ToggleShipping}  name="shipping_diff"/>
                                                <label for="shiping_address">Ship to Different Address</label>
                                            </div>
                                        </div>
    
                                    </div>
    
                                </div>
                                
                                <div id="shipping-form" className="mb-40">
                                    <h4 className="checkout-title">Shipping Address</h4>
    
                                    <div className="row">
    
                                    <div className="col-md-6 col-12 mb-20">
                                            <label>First Name*</label>
                                            <input type="text" placeholder="First Name" name="shipping_fname" />
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Last Name*</label>
                                            <input type="text" placeholder="Last Name" name="shipping_lname"  />
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input type="email" placeholder="Email Address" name="shipping_email" />
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Phone no*</label>
                                            <input type="text" placeholder="Phone number" name="shipping_phone" /> 
                                        </div>
    
                                        <div className="col-12 mb-20">
                                            <label>Company Name</label>
                                            <input type="text" placeholder="Company Name" name="shipping_company" />
                                        </div>
    
                                        <div className="col-12 mb-20">
                                            <label>Address*</label>
                                            <input type="text" placeholder="Address line 1"  name="shipping_add1"/>
                                            <input type="text" placeholder="Address line 2"  name="shipping_add2"/>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Country*</label>
                                            <select className="nice-select" name="shipping_country">
                                                <option>Bangladesh</option>
                                                <option>China</option>
                                                <option>country</option>
                                                <option>India</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Town/City*</label>
                                            <input type="text" placeholder="Town/City" name="shipping_city" />
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>State*</label>
                                            <input type="text" placeholder="State" name="shipping_state" />
                                        </div>
    
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Zip Code*</label>
                                            <input type="text" placeholder="Zip Code" name="shipping_zipcode" />
                                        </div>
    
                                    </div>
    
                                </div>
                                
                            </div>
                            
                            <div className="col-lg-5">
                                <div className="row">
                                    
                                    <div className="col-12 mb-60">
                                    
                                        <h4 className="checkout-title">Cart Total</h4>
                                
                                        <div className="checkout-cart-total">
    
                                            <h4>Product <span>Total</span></h4>
                                            
                                            <ul>
                                                {cartitem.map((cart, index) => (
                                                    <li>{cart.product_name} X {cart.pqty} <span>${cart.product_price * cart.pqty}</span></li>
                                                ))}
                                            
                                            </ul>
                                            
                                            <p>Sub Total <span>${cartTotal}</span></p>
                                            <p>Shipping Fee <span>$00.00</span></p>
                                            
                                            <h4>Grand Total <span>${cartTotal}</span></h4>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-12">
                                    
                                        <h4 className="checkout-title">Payment Method</h4>
                                
                                        <div className="checkout-payment-method">
                                            
                                            <div className="single-method">
                                                <input type="radio" id="payment_check" name="payment_method" value="check"  onChange={ 
                                                    (e) => {
                                                        shippingData.payment_method = e.target.value;
                                                        setshippingData(shippingData);
                                                    } 
                                                } />
                                                <label for="payment_check">Check Payment</label>
                                                <p data-method="check">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                            </div>
                                            
                                            <div className="single-method">
                                                <input type="radio" id="payment_bank" name="payment_method" value="bank" onChange={ 
                                                    (e) => {
                                                        shippingData.payment_method = e.target.value;
                                                        setshippingData(shippingData);
                                                    } 
                                                } />
                                                <label for="payment_bank">Direct Bank Transfer</label>
                                                <p data-method="bank">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                            </div>
                                            
                                            <div className="single-method">
                                                <input type="radio" id="payment_cash" name="payment_method" value="cash"  onChange={ 
                                                    (e) => {
                                                        shippingData.payment_method = e.target.value;
                                                        setshippingData(shippingData);
                                                    } 
                                                }/>
                                                <label for="payment_cash">Cash on Delivery</label>
                                                <p data-method="cash">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                            </div>
                                            
                                            <div className="single-method">
                                                <input type="radio" id="payment_paypal" name="payment_method" value="paytm" onChange={ 
                                                    (e) => {
                                                        shippingData.payment_method = e.target.value;
                                                        setshippingData(shippingData);
                                                    } 
                                                }/>
                                                <label for="payment_paypal">Paytm</label>
                                                <p data-method="paypal">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                            </div>
                                            
                                            <div className="single-method">
                                                <input type="radio" id="payment_payoneer" name="payment_method" value="payoneer" onChange={ 
                                                    (e) => {
                                                        shippingData.payment_method = e.target.value;
                                                        setshippingData(shippingData);
                                                    } 
                                                } />
                                                <label for="payment_payoneer">Payoneer</label>
                                                <p data-method="payoneer">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                            </div>
                                             
                                        </div>
                                        
                                        <button className="place-order">Place order</button>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>  
        </>
    )
}

export default Checkout
