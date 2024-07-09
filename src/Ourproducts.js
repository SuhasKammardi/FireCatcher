import React from 'react';
import Slider from 'react-slick';
import './Theme2.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function OurProducts() {

    // const PrevArrow = (props) => {
    //     const { className, onClick } = props;
    //     return (
    //         <div className={className} onClick={onClick}>
    //           <button className="slick-prev slick-arrow" aria-label="Next" type="button" style={{ display: 'block' }}>Next</button>
    //         </div>
    //       );
          
    //   };
    
    //   const NextArrow = (props) => {
    //     const { className, onClick } = props;
    //     return (
    //       <div className={className} onClick={onClick}>
    //         <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: 'block' }}>Next</button>
    //       </div>
    //     );
    //   };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  };

  

  return (
    <section
      className="webpulse_home_featured background_1"
      style={{
        background: "url('https://firecatcher.in/admin/uploads/section/-wp2592973 (2) (2) (2).webp') center center / cover fixed",
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title wow fadeInDown" data-wow-delay=".2s">
              <h4 className="section_title">Our <span> Products</span></h4>
              <div className="underline"></div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-12">
          <Slider {...sliderSettings}>
                <div className="slick-slide">
                    <div className="product_item wow fadeInDown" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                    <div className="product_block" data-imgsrc="">
                        <div className="image_02">
                        {/* <a href="#" title="Mild Steel Ball Manufacturers in Delhi"> */}
                            <img className="product-img" src="MSteelBall.webp" alt="Mild Steel Ball" title="Mild Steel Ball Manufacturers in Delhi" />
                        {/* </a> */}
                        </div>
                        <div className="product_title">
                        <h4 className="title_h3_4">
                            <a  title="Mild Steel Ball Manufacturers in Delhi"><span>Mild Steel Ball</span></a>
                        </h4>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="slick-slide">
                <div class="product_item wow fadeInDown" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                    <div class="product_block" data-imgsrc="">
                        <div class="image_02">
                            {/* <a href="https://firecatcher.in/product/bicycle-air-pump" title="Bicycle Air Pump Manufacturers in Delhi" tabindex="-1"> */}
                                <img class="product-img" src="AirPump.webp" alt="Bicycle Air Pump" title="Bicycle Air Pump Manufacturers in Delhi" />
                            {/* </a> */}
                        </div>
                        <div class="product_title">
                            <h4 class="title_h3_4">
                                <a  title="Bicycle Air Pump Manufacturers in Delhi" tabindex="-1"><span>Bicycle Air Pump</span></a>
                            </h4>
                        </div>
                    </div>
                </div>
                </div>

                <div className="slick-slide">
                <div class="product_item wow fadeInDown" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                    <div class="product_block" data-imgsrc="">
                        <div class="image_02">
                            {/* <a href="https://firecatcher.in/product/chrome-steel-ball" title="Chrome Steel Ball Manufacturers in Delhi" tabindex="0"> */}
                                <img class="product-img" src="ChromeBall.webp" alt="Chrome Steel Ball" title="Chrome Steel Ball Manufacturers in Delhi" />
                            {/* </a> */}
                        </div>
                        <div class="product_title">
                            <h4 class="title_h3_4">
                                <a  title="Chrome Steel Ball Manufacturers in Delhi" tabindex="0"><span>Chrome Steel Ball</span></a>
                            </h4>
                        </div>
                    </div>
                </div>

                </div>

                <div className="slick-slide">
                <div class="product_item wow fadeInDown" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                    <div class="product_block" data-imgsrc="">
                        <div class="image_02">
                            {/* <a href="https://firecatcher.in/product/bicycle-lock" title="Bicycle Lock Manufacturers in Delhi" tabindex="-1"> */}
                                <img class="product-img" src="BicycleLock.webp" alt="Bicycle Lock" title="Bicycle Lock Manufacturers in Delhi" />
                            {/* </a> */}
                        </div>
                        <div class="product_title">
                            <h4 class="title_h3_4">
                                <a  title="Bicycle Lock Manufacturers in Delhi" tabindex="-1"><span>Bicycle Lock</span></a>
                            </h4>
                        </div>
                    </div>
                </div>
                </div>

                <div className="slick-slide">
                <div class="product_item wow fadeInDown" data-wow-delay=".0.3s" style={{width: '100%', display: 'inline-block'}}>
                    <div class="product_block" data-imgsrc="">
                        <div class="image_02">
                            {/* <a href="https://firecatcher.in/product/bicycle-bells" title="Bicycle Bell Manufacturers in Delhi" tabindex="-1"> */}
                                <img class="product-img" src="BicycleBell.webp" alt="Bicycle Bells" title="Bicycle Bell Manufacturers in Delhi" />
                            {/* </a> */}
                        </div>
                        <div class="product_title">
                            <h4 class="title_h3_4">
                                <a  title="Bicycle Bell Manufacturers in Delhi" tabindex="-1"><span>Bicycle Bells</span></a>
                            </h4>
                        </div>
                    </div>
                </div>

                </div>


</Slider>

          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
