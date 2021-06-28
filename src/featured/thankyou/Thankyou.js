import React from 'react'
import { useParams } from 'react-router'

const Thankyou = ()=> {
    const{ order_id } = useParams();

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Thank You For Purchasing</h1>
                    <h1>Your Order id:  {order_id}</h1>
                </div>
            </div>
        </>
    )
}

export default Thankyou
