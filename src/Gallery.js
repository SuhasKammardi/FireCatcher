import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Theme2.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dheader from "./Dheader";
import Footer from "./Footer";
import Clients from "./Clients";

function Gallery(){

    return(
        <div>
            <Dheader />

            <section class="heading_banner about_us_banner" style={{backgroundImage: "url('Bannerbg.jpg')"}} >
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center">
                            <h4 class="cat_title">Our Gallery</h4>
                            <div class="clearfix"></div>
                            <div class="cat_title2">See Our Images</div>                        
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
                                <li class="active">Our Gallery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12 slick-initialized slick-slider">
                        <div class="slick-list draggable">
                        <div class="slick-track" style={{opacity: 1, width: '720px', transform: 'translate3d(0px, 0px, 0px)'}}>
                        <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '720px'}}>
                            <div>
                            <h1 class="" style={{width: '100%', display: 'inline-block'}}> </h1>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div align="center">
                        <button class="btn btn-default filter-button" data-filter="all">All</button>
                            <button class="btn btn-default filter-button" data-filter="1">Racing Bicycle</button>
                            <button class="btn btn-default filter-button" data-filter="3">Folding Bicycle</button>
                            <button class="btn btn-default filter-button" data-filter="5">Mountain Bicycle</button>
                            <button class="btn btn-default filter-button" data-filter="6">Ranger Bicycle</button>
                            <button class="btn btn-default filter-button" data-filter="7">City Bicycle</button>
                    </div>
                    <br />

                    <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 1">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Racing1.webp" title="Racing Bicycle Manufacturers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 1">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Racing2.webp" title="Racing Bicycle Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 1">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Racing3.webp" title="Racing Bicycle Dealers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 1">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Racing4.webp" title="Racing Bicycle Wholesale Supplier in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                                            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 2">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Fat5.webp" title="Fat Bicycle Manufacturers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 2">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Fat6.webp" title="Fat Bicycle Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 2">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Fat3.webp" title="Fat Bicycle Dealers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 2">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Fat2.webp" title="Fat Bicycle Wholesale Supplier in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 2">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Fat1.webp" title="Fat Bicycle Manufacturer in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                                            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 3">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Folding2.webp" title="Folding Bicycle Manufacturers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 3">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Folding4.webp" title="Folding Bicycle Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 3">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Folding3.webp" title="Folding Bicycle Dealers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 3">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Folding1.webp" title="Folding Bicycle Wholesale Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                                            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 4">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Full Suspension1.webp" title="Full Suspension Bicycle Manufacturers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 4">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Full Suspension5.webp" title="Full Suspension Bicycle Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 4">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Full Suspension4.webp" title="Full Suspension Bicycle Dealers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 4">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Full Suspension3.webp" title="Full Suspension Bicycle Wholesale Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 4">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Full Suspension2.webp" title="Full Suspension Bicycle Manufacturer in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                                            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 5">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Mountain3.webp" title="Mountain Bicycle Manufacturers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 5">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Mountain4.webp" title="Mountain Bicycle Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 5">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Mountain2.webp" title="Mountain Bicycle Dealers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 5">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Mountain1.webp" title="Mountain Bicycle Wholesale Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                                            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 6">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Ranger1.webp" title="Ranger Bicycle Manufacturers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 6">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Ranger4.webp" title="Ranger Bicycle Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 6">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Ranger3.webp" title="Ranger Bicycle Dealers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 6">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/Ranger2.webp" title="Ranger Bicycle Wholesale Supplier in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                                            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 7">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/City1.webp" title="City Bicycle Manufacturers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 7">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/City4.webp" title="City Bicycle Suppliers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 7">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/City3.webp" title="City Bicycle Dealers in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter 7">
                        <div class="gallery_product1">
                            <img src="https://firecatcher.in/admin/uploads/gallery/City2.webp" title="City Bicycle Wholesale Supplier in Delhi" class="img-responsive" />
                        </div>
                    </div>
                                        
                </div>
            </div>



            <Clients />
            <Footer />
        </div>

    );
}

export default Gallery