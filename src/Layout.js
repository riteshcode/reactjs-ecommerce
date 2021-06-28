import React from 'react'
import NavbarTop from './component/header/NavbarTop'
import Navbar from './component/header/Navbar'
import BreadCrumb from './component/common/BreadCrumbs'
import Footer from './component/footer/Footer'

const Layout= (props) => {
    return (
        <>
        <div className="header-area header-sticky">
            <NavbarTop />
            <Navbar />
        </div>
        <BreadCrumb />
        <div className="page-section pb-40">
            {props.children}
        </div>
        <Footer />
        
        </>

    )
}

export default Layout
