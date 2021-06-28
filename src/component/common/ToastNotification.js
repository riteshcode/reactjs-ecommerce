import React from 'react'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure()

export const notify = (msg,typeColor) =>{
    switch (typeColor) {
        case 'success':
            toast.success(msg,{position: toast.POSITION.BOTTOM_RIGHT})        
            break;
    
        case 'error':
            toast.error(msg,{position: toast.POSITION.BOTTOM_RIGHT})        
            break;

        case 'warning':
            toast.warning(msg,{position: toast.POSITION.BOTTOM_RIGHT})        
            break;
        
        case 'info':
            toast.info(msg,{position: toast.POSITION.BOTTOM_RIGHT})        
            break;
        
        default:
            break;
    }
}


function ToastNotification() {
    
    return (
        <> 
        </>
    )
}

export default ToastNotification
