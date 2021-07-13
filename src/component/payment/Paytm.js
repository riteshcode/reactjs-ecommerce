import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Paytm() {
    const [orderData, setOrderData] = useState({});

    const {order_id} = useParams('order_id');
    // const order_id = useParams('order_id');

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL+'order/'+order_id).then( (response)=>{
            console.log(response.data)
            setOrderData(response.data.data)

        }).catch( (error)=>{
            console.log(error)
        })
    }, [])

    console.log(orderData);

    // const {order_id,total_amount,checksum_id} = props.PaymentData
    return (
        <>
            <table align='center'>
                <tr>
                    <td><strong>Transaction is being processed,</strong></td>
                </tr>
                <tr>
                    <td><font color='blue'>Please wait ...</font></td>
                </tr>
                <tr>
                    <td>(Please do not press 'Refresh' or 'Back' button</td>
                </tr>
            </table>
            <form className="text-center" name='TESTFORM' action='https://securegw-stage.paytm.in/order/process' method='POST'>
            <input type='hidden' name='MID' value='WKVVIL18341685658718' />
                <input type="hidden" name="WEBSITE" value="WEBSTAGING" />
                <input type='hidden' name='TXN_AMOUNT' value={orderData.total_amount} />
                <input type='hidden' name='ORDER_ID' value={order_id} />
                <input type="hidden" name="CUST_ID" value="9" />
                <input type="hidden" name="MOBILE_NO" value="9599337311" />
                <input type="hidden" name="EMAIL" value="test@tes.com" />
                <input type="hidden" name="INDUSTRY_TYPE_ID" value="Retail" />
                <input type="hidden" name="CHANNEL_ID" value="WEB" />
                <input type="hidden" name="CALLBACK_URL" value={process.env.REACT_APP_SERVER_URL+'paytm/response'} />
                <input type='hidden' name='CHECKSUMHASH' value={orderData.checksum_id} />
                <button type="submit" className="btn btn-success btn-lg">Pay With Paytm</button>
            </form>
        </>
    )
}

export default Paytm
