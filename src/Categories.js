import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel';
import Slider from "react-slick";
import $ from "jquery";




function Categories() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };

  return (
    
    <div>
      <div
        className="imgboxbg webpulse_home_featured"
        data-imgbgsrc="https://firecatcher.in/admin/uploads/section/banner-27-08-2023-1693136559-wp2592973 (2) (2) (2).webp"
        style={{
          background:
            "url('https://firecatcher.in/admin/uploads/section/banner-27-08-2023-1693136559-wp2592973 (2) (2) (2).webp')",
          backgroundPosition: "center center",
          position: "relative",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="title wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="section_title">Our Categories</div>
                <div className="underline"></div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-12">
              <Slider className="results" {...settings}>
                {/* Slide 1 */}
                <div className="slick-slide">
                  <div className="service_item wow fadeInDown" data-wow-delay=".0.2s">
                    <div className="service-block">
                      <div className="inner-box">
                        <div className="image-box imgbox" data-imgsrc="/bicycles/City-Bicycle" title="City Bicycle Manufacturers in Delhi">
                          <figure className="image">
                            <img className="product-img" src="CityCycle.webp" title="City Bicycle Manufacturers in Delhi" alt="City Bicycle Manufacturers in Delhi" />
                          </figure>
                          <div className="overlay-box">
                            <div className="inner">
                              <div className="text product-show-desc">What makes our company special Folding Bicycle Manufacturers In Delhi, is our clever way of making folding bicycles. We have a group of intelligent people who love both manufacturing and riding bicycles. They spent a lot of time coming up with bicycles that work well and look cool. The way we make our folding cycles lets people fold them up fast and efficiently. This is great because you can take the bike on buses or trains easily, keep it in tiny apartments, or even put it in the car's trunk without any trouble.</div>
                              <div className="link-box">
                                <a title="Folding Bicycle Manufacturers" href='/bicycles/Folding-Bicycle' tabIndex="-1">Read More</a>
                              </div>
                            </div>
                          </div>
                          <div className="caption-box">
                            <a title="Folding Bicycle Manufacturers" href='/bicycles/Folding-Bicycle' tabIndex="-1">
                              <span className="icon"><i className="fa fa-angle-right"></i></span>
                              <div className="title_h4_1">Folding Bicycle</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                {/* <div className="slick-slide">
                  <div className="service_item wow fadeInDown" data-wow-delay=".0.2s">
                    <div className="service-block">
                      <div className="inner-box">
                      <div className="image-box" data-imgsrc="" title="Fat Bicycle Manufacturers in Delhi">
                <figure className="image">
                  <img className="product-img" src="https://firecatcher.in/admin/uploads/category/subcategory-23-09-2023-1695465687-Bicycle Suppliers In Delhi (10).webp" title="Fat Bicycle Manufacturers in Delhi" alt="Fat Bicycle Manufacturers in Delhi" />
                </figure>
                <div className="overlay-box">
                  <div className="inner">
                    <div className="text product-show-desc">
                      We are reliable Fat Bicycle Manufacturers In Delhi because our team likes to make new and different bicycles. We have intelligent people who work together to make modern and cool fat bicycles. These bicycles don't just work well; they also look nice. The people who make them pay a lot of attention to their appearance and all the small and pretty parts.
                    </div>
                    <div className="link-box">
                      <a title="Fat Bicycle Manufacturers" href="https://firecatcher.in/product/fat-bicycle" tabIndex="-1">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="caption-box">
                <a title="Fat Bicycle Manufacturers" href="https://firecatcher.in/product/fat-bicycle" tabIndex="-1">
                  <span className="icon"><i className="fa fa-angle-right"></i></span>
                  <div className="title_h4_1">Fat Bicycle</div>
                </a>
              </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div> */}

                {/* Slide 3 */}
                <div className="slick-slide">
                  <div className="service_item wow fadeInDown" data-wow-delay=".0.2s">
                    <div className="service-block">
                      <div className="inner-box">
                      <div className="image-box" data-imgsrc="" title="Racing Bicycle Manufacturers in Delhi">
            <figure className="image">
              <img className="product-img" src="RangerCycle.webp" title="Racing Bicycle Manufacturers in Delhi" alt="Racing Bicycle Manufacturers in Delhi" />
            </figure>
            <div className="overlay-box">
              <div className="inner">
                <div className="text product-show-desc">
                  As reliable Racing Bicycle Manufacturers In Delhi, our company likes coming up with new ideas and using smart ways to make cycles. We have intelligent employees who work together with cycling pros and excellent riders to make cycles that are fast, not too heavy, and very strong. We make racing bicycles using advanced stuff like super strong carbon fiber for their frames. Because we use cool materials, our bicycles can go super-fast, react quickly, and be easily controlled.
                </div>
                <div className="link-box">
                  <a title="Racing Bicycle Manufacturers" href="/bicycles/Racing-Bicycle" tabIndex="-1">Read More</a>
                </div>
              </div>
            </div>
            <div className="caption-box">
            <a title="Racing Bicycle Manufacturers" href="/bicycles/Racing-Bicycle" tabIndex="-1">
              <span className="icon"><i className="fa fa-angle-right"></i></span>
              <div className="title_h4_1">Racing Bicycle</div>
            </a>
          </div>
            </div>


                      </div>
                    </div>
                  </div>
                </div>

                <div className="slick-slide">
                  <div className="service_item wow fadeInDown" data-wow-delay=".0.2s">
                    <div className="service-block">
                      <div className="inner-box">
                      <div class="image-box" data-imgsrc="" title="City Bicycle Manufacturers in Delhi">
                        <figure class="image">
                            <img class="product-img" src="CityCycle.webp" title="City Bicycle Manufacturers in Delhi" alt="City Bicycle Manufacturers in Delhi" />
                        </figure>

                        <div class="overlay-box">
                            <div class="inner">
                                <div class="text product-show-desc">As City Bicycle Manufacturers In Delhi, our team likes making cycles in new and cool ways. We have dedicated employees who think hard to make cycles that not only look awesome but also feel super comfy and work well when you ride them. We make all kinds of bicycles. Some look old-fashioned and charming, while others look modern and smooth. We do this so that different people can find bicycles they really like.</div>
                                <div class="link-box">
                                    <a title="City Bicycle Manufacturers" href='/bicycles/City-Bicycle' tabindex="-1">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="caption-box">
                        <a title="City Bicycle Manufacturers" href='/bicycles/City-Bicycle' tabindex="-1">
                            <span class="icon"><i class="fa fa-angle-right"></i></span>
                            <div class="title_h4_1">City Bicycle</div>
                        </a>
                    </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="slick-slide">
                  <div className="service_item wow fadeInDown" data-wow-delay=".0.2s">
                    <div className="service-block">
                      <div className="inner-box">
                      <div class="image-box" data-imgsrc="" title="Ranger Bicycle Manufacturers in Delhi">
                            <figure class="image">
                                <img class="product-img" src="https://firecatcher.in/admin/uploads/category/subcategory-23-09-2023-1695465994-Bicycle Suppliers In Delhi (16).webp" title="Ranger Bicycle Manufacturers in Delhi" alt="Ranger Bicycle Manufacturers in Delhi" />
                            </figure>

                            <div class="overlay-box">
                                <div class="inner">
                                    <div class="text product-show-desc">We are famous Ranger Bicycle Manufacturers In Delhi because our team makes cycles extra strong, looks really cool, and pays close attention to even the tiniest things. We make all kinds of cycles for different types of riding, like on the road, in the mountains, in the city, and just for fun. Every bike we make is carefully created using fancy materials and the newest technology. This ensures the bikes work well and last a long time.</div>
                                    <div class="link-box">
                                        <a title="Ranger Bicycle Manufacturers" href="/bicycles/Ranger-Bicycle" tabindex="0">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="caption-box">
                            <a title="Ranger Bicycle Manufacturers" href="/bicycles/Ranger-Bicycle" tabindex="0">
                                <span class="icon"><i class="fa fa-angle-right"></i></span>
                                <div class="title_h4_1">Ranger Bicycle</div>
                            </a>
                        </div>



                      </div>
                    </div>
                </div>
            </div>




              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
