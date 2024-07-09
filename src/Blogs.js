import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Theme2.css'
import Dheader from "./Dheader";
import Footer from "./Footer";
import Clients from "./Clients";


function Blogs(){

    return(
        <div>
            <Dheader />

            <section class="heading_banner about_us_banner" style={{backgroundImage: "url('Bannerbg.jpg')"}} >
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center">
                            <h4 class="cat_title">Our Blog</h4>
                            <div class="clearfix"></div>
                            <div class="cat_title2">Read our latest blog</div>                        
                        </div>
                    </div>
                </div>
            </section>

            <div class="inner_breadcrumb hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                            <ul class="breadcrumb">
                                <li><a href="/" title="Home">Home</a></li>
                                <li class="active">Our blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section class="blog_page webpulse_tm_universal_title_holder">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="blog_left">
                                <div class="title_holder_inner"><h1>Our Blog</h1></div>
                                <div class="row">
                                                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-lg-4 col-sm-4 col-xs-12 col-12">
                                        <div class="blog_grid">
                                            <a href="/Blog1" title="Upgrade Your Ride: 5 Reasons to Choose a Gear Cycle">
                                                <div class="image">
                                                    <img src="Blog1.webp" alt="Upgrade Your Ride: 5 Reasons to Choose a Gear Cycle" title="Upgrade Your Ride: 5 Reasons to Choose a Gear Cycle"/>
                                                </div>
                                            </a>
                                            <div class="article_title">
                                                <hr class="article_line" />
                                                <h4 class="text-limit-100px">
                                                    <a href="/Blog1">Upgrade Your Ride: 5 Reasons to Choose a Gear Cycle</a>
                                                </h4>
                                                <div class="article_desc post-content">Hey there, young adventurers! Are you ready to explore the world on two wheels? If you're thinking about getting a new bicycle, we've got some exciting news for you. Have you ever heard about </div>
                                                <span class="article_category_name">
                                                    <a href="/Blog1">
                                                        <span><i class="fa fa-clock-o"></i> Mon Aug 01, 2022</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-lg-4 col-sm-4 col-xs-12 col-12">
                                        <div class="blog_grid">
                                            <a href="/Blog2" title="Stay Ahead of the Monsoon: Proven Maintenance Tips for Your Cycle">
                                                <div class="image">
                                                    <img src="Blog2.webp" alt="Stay Ahead of the Monsoon: Proven Maintenance Tips for Your Cycle" title="Stay Ahead of the Monsoon: Proven Maintenance Tips for Your Cycle" />
                                                </div>
                                            </a>
                                            <div class="article_title">
                                                <hr class="article_line" />
                                                <h4 class="text-limit-100px"><a href="/Blog2">Stay Ahead of the Monsoon: Proven Maintenance Tips for Your Cycle</a></h4>
                                                <div class="article_desc post-content">Hello, young cyclists! The monsoon season is here, and you know what that means – rainy days and puddles to splash in. But wait, have you thought about how to keep your bicycle safe during the rainy days? Don't worry, becaus</div>
                                                <span class="article_category_name">
                                                    <a href="/Blog2">
                                                        <span><i class="fa fa-clock-o"></i> Thu Jun 08, 2023</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-lg-4 col-sm-4 col-xs-12 col-12">
                                        <div class="blog_grid">
                                            <a href="/Blog1" title="Stay on Track with Essential Roadside Mountain Biking&nbsp;Tips">
                                                <div class="image">
                                                    <img src="Blog3.webp" alt="Stay on Track with Essential Roadside Mountain Biking&nbsp;Tips" title="Stay on Track with Essential Roadside Mountain Biking&nbsp;Tips" />
                                                </div>
                                            </a>
                                            <div class="article_title">
                                                <hr class="article_line" />
                                                <h4 class="text-limit-100px"><a href="/Blog1">Stay on Track with Essential Roadside Mountain Biking&nbsp;Tips</a></h4>
                                                <div class="article_desc post-content">Hey there, young adventurers! Do you love the thrill of riding your bicycle through rugged trails and rocky paths? If you're a fan of mountain biking, you know how exciting it can be. But don't worry, we've got your back with </div>
                                                <span class="article_category_name">
                                                    <a href="/Blog1">
                                                        <span><i class="fa fa-clock-o"></i> Thu Jun 08, 2023</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                                                        <div class="clearfix"></div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                                        <p class="paging"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Clients />
            <Footer />
        </div>
    );
}

export default Blogs