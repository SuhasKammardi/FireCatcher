import React from "react";
import './Theme2.css'
import './bootstrap.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'

function Weoffer(){

    return(
        
        <div class="home_we_offer">
        <div class="objects-left left wow fadeInLeft" data-wow-delay=".6s">
            <img class="img-fluid objects-1" src="BGCycle.png" alt="Left Image" title="Left Image" />
        </div>
        <div class="objects-right right wow fadeInRight" data-wow-delay=".6s">
            <img class="img-fluid objects-2" src="BGCycle2.png" alt="Right Image" title="Left Image" />
            </div>
        <div class="container">
            <div class="title wow fadeInDown" data-wow-delay=".1s">
                <div class="section_title">What We <span style={{color: 'red'}}> Work</span></div>
                <div class="underline"></div>
            </div>
            <ul>
                                        <li class="wow fadeInLeft" data-wow-delay=".2s">
                    <div class="offer-colm">
                        <div class="work-icon"title="Top-notch Quality" >
                            <i class="las la-medal"></i>                                </div>
                        
                        <div class="title3_1" >Top-notch Quality</div>
                        <p>With a worldwide network of tanneries, we manufacture the finest quality of Bicycles</p>
                    </div>
                </li>
                                       <li class="wow fadeInLeft" data-wow-delay=".2s">
                    <div class="offer-colm">
                        <div class="work-icon"title="Exclusive Designs" >
                            <i class="las la-hand-paper"></i>                                </div>
                        
                        <div class="title3_1">Exclusive Designs</div>
                        <p>All the bicycles are made by our experienced and skilled persons.</p>
                    </div>
                </li>
                                       <li class="wow fadeInLeft" data-wow-delay=".2s">
                    <div class="offer-colm">
                        <div class="work-icon"title="Extensive Collection" >
                            <i class="las la-money-bill-wave"></i>                                </div>
                        
                        <div class="title3_1">Extensive Collection</div>
                        <p>We manufacture a wide collection of bicycles, each with its unique design and features.</p>
                    </div>
                </li>
                                       <li class="wow fadeInLeft" data-wow-delay=".2s">
                    <div class="offer-colm">
                        <div class="work-icon"title="On-time Delivery" >
                            <i class="las la-truck"></i>                                </div>
                        
                        <div class="title3_1">On-time Delivery</div>
                        <p>We deliver our wide range of bicycles in the stipulated duration.</p>
                    </div>
                </li>
                
            </ul>
            <div class="halp-call text-center wow fadeInUp" data-wow-delay=".5s">
                {/* <img alt="" title="" class="bottom_image wow zoomIn" data-wow-delay=".6s" src="https://firecatcher.in/admin/uploads/section/banner-24-08-2023-1692890835-Untitled design (60).png" /> */}
                <img alt="" title="" class="showhide_1" src="https://firecatcher.in/admin/uploads/logo/Light-Logo-23-09-2023-1695455826-Light-Logo-24-08-2023-1692890066-Untitled design (58).png" />
                <span>Have any question ?</span>
                <div class="phone_number_1 text-red"><a href="tel:+91-8920193059" style={{color: 'red'}}>+91-8920193059</a></div>
            </div>
        </div>
    </div>
    );

}
export default Weoffer