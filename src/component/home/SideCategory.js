import React from 'react'

function SideCategory() {
    return (
        <>
            <div className="page-sidebar">

            <div className="sidebar-widget-wrapper mb-30">
                
                <div className="sidebar-widget">
                    <h3 className="sidebar-widget-title">CATEGORIES</h3>
                    <ul className="category-list">
                        <li><a href="#">Bonsai (3)</a></li>
                        <li><a href="#">House Plants (6)</a></li>
                        <li><a href="#">Indoor Living (9)</a></li>
                        <li><a href="#">Outdoor Living (15)</a></li>
                        <li><a href="#">Perennials (5)</a></li>
                        <li><a href="#">Plant For Gift (5)</a></li>
                        <li className="has-children"><a href="#">Garden Tools (5)</a>
                            <ul>
                                <li><a href="#">Saws (0)</a></li>
                                <li><a href="#">Concrete Tools (6)</a></li>
                                <li><a href="#">Drills (2)</a></li>
                                <li><a href="#">Sanders (1)</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Tools (15)</a></li>
                    </ul>
                </div>
                
                <div className="sidebar-widget">
                    <h3 className="sidebar-widget-title mb-30 mt-0">FILTER BY PRICE</h3>
                    
                    <div className="sidebar-price">
                        <div id="price-range" className="mb-10"></div>
                        <input type="text" id="price-amount" className="price-amount" readOnly />
                    </div>
                </div>
                
                <div className="sidebar-widget">
                    <h3 className="sidebar-widget-title mt-0">MANUFACTURER</h3>
                    
                    <div className="sidebar-filter-group">
                        <a href="#">Christian Dior <span>(5)</span></a>
                        <a href="#">Diesel <span>(15)</span></a>
                        <a href="#">ferragamo <span>(4)</span></a>
                        <a href="#">hermes <span>(20)</span></a>
                        <a href="#">louis vuitton <span>(35)</span></a>
                    </div>
                </div>
                
                <div className="sidebar-widget">
                    <h3 className="sidebar-widget-title mt-0">SELECT BY COLOR</h3>
                    
                    <div className="sidebar-filter-group-color">
                        <a href="#">Black <span>(5)</span></a>
                        <a href="#">Blue <span>(6)</span></a>
                        <a href="#">Brown <span>(3)</span></a>
                        <a href="#">Green <span>(7)</span></a>
                        <a href="#">Pink <span>(8)</span></a>
                        <a href="#">Red <span>(3)</span></a>
                        <a href="#">White <span>(9)</span></a>
                        <a href="#">Yellow <span>(5)</span></a>
                    </div>
                </div>

            </div>

            <div className="page-sidebar-banner">
                <a href="shop-left-sidebar.html">
                    <img src="assets/img/banners/banner-sidebar.jpg" className="img-fluid" alt="" />
                </a>
            </div>


            </div>

        </>
    )
}

export default SideCategory
