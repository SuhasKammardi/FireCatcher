import React from "react";
import './Theme2.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bootstrap.css'

function Latestblogs(){

    return(
        <section class="webpulse-home_blog">
            <div class="container">
                <div class="title wow fadeInDown" data-wow-delay=".2s">
                    <h4 class="section_title">Latest <span>Blogs</span></h4>
                    <div class="underline"></div>
                </div>
                <div class="row" style={{marginLeft: '200px'}}>
                <div class="results1 slick-initialized slick-slider"><div class="slick-list draggable">
                    <div class="slick-track" style={{opacity: 1, width: '750px', transform: 'translate3d(0px, 0px, 0px)'}}>
                <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '250px'}}>
                    <div><div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                            <div class="blog-2">
                                <div class="blog-photo clip-home" data-imgsrc="">
                                    <img src="Blog1.webp" alt="Upgrade Your Ride: 5 Reasons to Choose a Gear Cycle" title="Upgrade Your Ride: 5 Reasons to Choose a Gear Cycle" class="img-fluid bp product-img" />
                                    <div class="date-box">
                                        Mon Aug 01, 2022                                    </div>
                                </div>
                                <div class="detail">
                                    <h4 class="blog_title_1">
                                        <a href="/Blog1" title="Upgrade Your Ride: 5 Reasons to Choose a Gear Cycle" tabindex="0"><span>Upgrade Your Ride: 5 Reasons to Choose a Gear Cycl</span></a>
                                    </h4>
                                    <div class="post-content">
                                        Hey there, young adventurers! Are you ready to explore the world on two wheels? If you're thinking about getting a new bicycle, we've got some exciting news for you. Have you ever heard about                                     </div><br />
                                    <div class="read_more_btn">
                                        <a href="/Blog1" title="Read More" tabindex="0">Read More <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></div></div>
                        <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{width: '250px'}}>
                            <div><div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                            <div class="blog-2">
                                <div class="blog-photo clip-home" data-imgsrc="">
                                    <img src="Blog2.webp" alt="Stay Ahead of the Monsoon: Proven Maintenance Tips for Your Cycle" title="Stay Ahead of the Monsoon: Proven Maintenance Tips for Your Cycle" class="img-fluid bp product-img" />
                                    <div class="date-box">
                                        Thu Jun 08, 2023                                    </div>
                                </div>
                                <div class="detail">
                                    <h4 class="blog_title_1">
                                        <a href="/Blog2" title="Stay Ahead of the Monsoon: Proven Maintenance Tips for Your Cycle" tabindex="0"><span>Stay Ahead of the Monsoon: Proven Maintenance Tips</span></a>
                                    </h4>
                                    <div class="post-content">
                                        Hello, young cyclists! The monsoon season is here, and you know what that means – rainy days and puddles to splash in. But wait, have you thought about how to keep your bicycle safe during the rainy days? Don't worry, because</div><br />
                                    <div class="read_more_btn">
                                        <a href="/Blog2" title="Read More" tabindex="0">Read More <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></div></div>
                        {/* <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{width: '250px'}}>
                            <div><div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                            <div class="blog-2">
                                <div class="blog-photo clip-home" data-imgsrc="">
                                    <img src="Blog3.webp" alt="Stay on Track with Essential Roadside Mountain Biking&nbsp;Tips" title="Stay on Track with Essential Roadside Mountain Biking&nbsp;Tips" class="img-fluid bp product-img" />
                                    <div class="date-box">
                                        Thu Jun 08, 2023                                    </div>
                                </div>
                                <div class="detail">
                                    <h4 class="blog_title_1">
                                        <a href="https://firecatcher.in/blog-details/stay-on-track-with-essential-roadside-mountain-biking-tips" title="Stay on Track with Essential Roadside Mountain Biking&nbsp;Tips" tabindex="0"><span>Stay on Track with Essential Roadside Mountain Bik</span></a>
                                    </h4>
                                    <div class="post-content">
                                        Hey there, young adventurers! Do you love the thrill of riding your bicycle through rugged trails and rocky paths? If you're a fan of mountain biking, you know how exciting it can be. But don't worry, we've got your back with                                     </div><br />
                                    <div class="read_more_btn">
                                        <a href="https://firecatcher.in/blog-details/stay-on-track-with-essential-roadside-mountain-biking-tips" title="Read More" tabindex="0">Read More <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></div></div> */}
                        </div>
                    </div>
                </div>



                </div>
            </div>
        </section>
    );
}

export default Latestblogs