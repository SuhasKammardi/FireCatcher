import React from "react";
import './Theme2.css';

function Footer(){


    return(
        <div>
        <footer class="web-pulse-india" style={{background: 'rgb(54, 54, 54)'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 wow fadeInDown" data-wow-delay=".5s">
                            <h6 class="footer_title_h4">About <span>Singhi Cycle</span></h6>
                            <p>As Top Bicycle Manufacturers In Delhi, we want our bikes to be super strong and work really well. That’s why our team only uses the best stuff to make the bicycles, so the cycles last a long time and...</p>
                            <div class="read_more_btn">
                                <a href="/about" title="Read More">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-6 wow fadeInDown" data-wow-delay=".7s">
                            <h6 class="footer_title_h4">Contact <span>Us</span></h6>
                            <ul class="contact">
                                <li> <i class="fa fa-map-marker"></i><span><b>Head Office : </b>431, Esplande Rd, Katra Mashru, Chandni Chowk, Delhi, 110006</span> </li>
                                                                <li><i class="fa fa-envelope"></i><a href="mailto:Singhicycle@gmail.com" class="text-white">Singhicycle@gmail.com</a></li>
                                                                <li><i class="fa fa-phone"></i><a href="tel:+91-8920193059">+91-8920193059</a></li>
                                                            </ul>
                            <h6 class="footer_title_h4">You can <span>Follow us at:</span></h6>
                            <ul class="social-icons">
                                                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-6 wow fadeInDown" data-wow-delay=".3s">
                            <h6 class="footer_title_h4">Quick <span>Links</span></h6>
                            <ul class="footer-links">
                                <li><a href="/" title="Home"> Home</a></li>
                                <li><a href="/about" title="Company Profile">Company Profile</a></li>
                                <li><a href="/bicycles" title="Our Gallery">Our Gallery</a></li>
                                <li><a href="/blogs" title="Blog"> Blog</a></li>
                                <li><a href="/clients" title="Our Clients"> Our Clients</a></li>
                                <li><a href="/FAQ" title="Faq">Faq</a></li>
                                {/* <li><a href="https://firecatcher.in/sitemap.php" title="Sitemap"> Sitemap</a></li> */}
                                <li><a href="/contact" title="Contact Us"> Contact Us</a></li>
                                {/* <li><a href="https://firecatcher.in/market-area.php" title="Market Area"> Market Area</a></li> */}
                            </ul>
                        </div>

                        <div class="col-lg-2 col-md-2 col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                            <h6 class="footer_title_h4">Our Products</h6>
                            <ul class="footer-links">
                                                                <li>
                                    <a href="/bicycles/City-Bicycle" title="City Bicycle"><i class="fa fa-caret-right"></i> City Bicycle</a>
                                </li>
                                                                <li>
                                    <a href="/bicycles/Ranger-Bicycle" title="Ranger Bicycle"><i class="fa fa-caret-right"></i> Ranger Bicycle</a>
                                </li>
                                                                <li>
                                    <a href="/bicycles/Mountain-Bicycle" title="Mountain Bicycle"><i class="fa fa-caret-right"></i> Mountain Bicycle</a>
                                </li>
                                                                {/* <li>
                                    <a href="https://firecatcher.in/product/full-suspension-bicycle" title="Full Suspension Bicycle"><i class="fa fa-caret-right"></i> Full Suspension Bicycle</a>
                                </li> */}
                                                                <li>
                                    <a href="/bicycles/Folding-Bicycle" title="Folding Bicycle"><i class="fa fa-caret-right"></i> Folding Bicycle</a>
                                </li>
                                                                {/* <li>
                                    <a href="https://firecatcher.in/product/fat-bicycle" title="Fat Bicycle"><i class="fa fa-caret-right"></i> Fat Bicycle</a>
                                </li> */}
                                                                <li>
                                    <a href="/bicycles/Racing-Bicycle" title="Racing Bicycle"><i class="fa fa-caret-right"></i> Racing Bicycle</a>
                                </li>
                                                             { /*   <li>
                                    <a href="https://firecatcher.in/product/steel-ball" title="Steel Ball"><i class="fa fa-caret-right"></i> Steel Ball</a>
                                </li>
                                                                <li>
                                    <a href="https://firecatcher.in/product/mild-steel-ball" title="Mild Steel Ball"><i class="fa fa-caret-right"></i> Mild Steel Ball</a>
                                </li> */}
                                                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="wps_copy">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 text-center text-lg-left mb-3">© 2023 Singhi Cycle. All Rights Reserved</div> <br />
                        <div class="col-lg-7 col-md-7 text-center text-lg-left ">Crafted with ❤ by Webclex Solution - <a href="/home" target="_blank" rel="noopener noreferrer">Best Web Designing and Digital Marketing&nbsp;Company</a></div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Footer