import React from 'react'
import './Navbar.css'
import './Theme2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quote from './Quote'
// import 'font-awesome/css/font-awesome.min.css';


function Dheader(){


    return(
        // <Router>
        <div className="webpulse-main-wrapper wrapper-wide" style={{marginTop: '50px'}}>
            <div className='container'>
            <div id="topnav" className="defaultscroll sticky">
                <a className="logo" href='/'>
                    <img src='https://firecatcher.in/admin/uploads/logo/Dark-Logo-23-09-2023-1695455070-Dark-Logo-15-09-2023-1694764696-Untitled%20design%20(86).webp' width='200px' alt='logo' />
                </a>

                <div className="menu-extras">
                        <div className="menu-item">
                                {/* Mobile menu toggle */}
                            <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            {/* End mobile menu toggle */}
                        </div>
                </div>

                <div id='navigation'>
                    <ul className='navigation-menu'>
                        <li> <a href='/' className="sub-menu-item"> HOME </a> </li>
                        <li> <a href='/About' className="sub-menu-item" > COMPANY PROFILE</a> </li>


                        {/* Bicycles */}
                        <li className="has-submenu parent-menu-item product--menu">
                            <a href="javascript:void(0)">Bicycle</a>
                            <span onClick="myFunction(this)" className="menu-arrow"></span>
                            <ul className="submenu " >
                                <li className="has-submenu parent-menu-item">
                                    <a href='/bicycles/City-Bicycle'>City Bicycle</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a href='/bicycles/Ranger-Bicycle'>Ranger Bicycle</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a href='/bicycles/Mountain-Bicycle'>Mountain Bicycle</a>
                                </li>
                                
                                <li className="has-submenu parent-menu-item">
                                    <a href='/bicycles/Folding-Bicycle'>Folding Bicycle</a>
                                </li>
                            
                                <li className="has-submenu parent-menu-item">
                                    <a href='/bicycles/Racing-Bicycle'>Racing Bicycle</a>
                                </li>

                            </ul>
                        </li>


                        {/* Bicycle Parts */}
                        <li className="has-submenu parent-menu-item product--menu">
                            <a href="javascript:void(0)">Bicycle Parts</a>
                            <span onClick="myFunction(this)" className="menu-arrow"></span> 
                            <ul className="submenu " >
                                <li className="has-submenu parent-menu-item">
                                    <a>Steel ball</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Mild Steel ball</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Chrome Steel ball</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Air Pump</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Gear Parts</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Alloy Rim</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Gel Cover</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Disk Break Machine</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Lock </a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Spokes</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Bells</a>
                                </li>
                                <li className="has-submenu parent-menu-item">
                                    <a>Bicycle Light</a>
                                </li>
                            </ul>
                        </li>



                        <li> <a href='/blogs' className="sub-menu-item"> BLOG</a> </li>
                        <li> <a href='/contact' className="sub-menu-item"> CONTACT US</a> </li>

                        {/* <Route path="/get-a-quote" component={<Quote />} /> */}

                        <li>
                            <Link to="/get-a-quote" className="header-quote" title="Send Enquiry">
                            <span style={{ backgroundColor: 'red', padding: '15px', borderRadius: '25px', color: 'white', marginTop: '350px' }}>
                                Get A Quote
                            </span>
                            </Link>
                        </li>

                        <li style={{marginTop: "20px"}}>
                                    <ul className="social-icons"></ul>
                        </li>
                    </ul>
                </div></div>
                {/* <a id="scroll-up" href="javascript:void()" title="Go to Top"><i className="fa fa-angle-up"></i></a>          
            <div className="clearfix"></div> */}
            </div>
            <a id="scroll-up" href="javascript:void()" title="Go to Top"><i className="fa fa-angle-up"></i></a>          
            <div className="clearfix"></div>
         </div> 
  

    );
}

export default Dheader