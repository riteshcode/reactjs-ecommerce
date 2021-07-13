import React from 'react'
import { useParams } from 'react-router'

const Thankyou = ()=> {
    const{ order_id } = useParams();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div>
                            <i class="icon-x-circle success-icon" ></i>
                        </div>
                        <br/>
                        <h4>Thank You For Purchasing</h4>
                        <h1>Your Order id -  #{order_id}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thankyou
