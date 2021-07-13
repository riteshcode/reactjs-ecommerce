import './App.css'
import './assets/css/vendors.css'
import './assets/css/style.css'

import { Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from './featured/home/Home'
import Cart from './featured/cart/cart'
import Checkout from './featured/checkout/Checkout'
import Thankyou from './featured/thankyou/Thankyou'
import SingleProduct from './featured/detailpage/SingleProduct'
import Paytm  from "./component/payment/Paytm";

import React,{ useState } from 'react'

function App() {
 
  const [isLogging, setisLogging] = useState(false)
  return (
    <>
    <Layout>
    
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' render={ ()=> <Cart /> } />  {/* if we use passs props in route component */}
            <Route exact path='/checkout' render={ ()=> <Checkout /> } /> 
            <Route exact path='/thankyou/:order_id' component={Thankyou} /> 
            <Route exact path='/product/:slug' component={ SingleProduct }  /> 
            <Route exact path='/payment/:paymentType/:order_id' component={ Paytm }  /> 
        </Switch>
        
    </Layout>
      
    </>
  );
}

export default App;
