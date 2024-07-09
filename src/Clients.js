import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Theme2.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Clients() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, // Set the number of slides to show at a time
    centerMode: true,
    centerPadding: "15%"
  };

  return (
    <section className="webpulse_home_clients">
      <div className="container">
        <div className="products_heading wow fadeInDown" data-wow-delay=".1s">
          <h4>Our Clients</h4>
          <div className="separator separatorss">
            <span>
              <i></i>
            </span>
          </div>
        </div>
        <div className="clearfix"></div>
        <Slider {...sliderSettings}>
          <div className="item wow fadeInDown" data-wow-delay=".2s">
            <div className="clients">
              <div className="image">
                <img
                  src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866690-white-black_cyclop_21kb_logo_png_100x.avif"
                  title="Bicycle Manufacturers"
                  alt="Bicycle Manufacturers"
                />
              </div>
            </div>
          </div>
          <div className="item wow fadeInDown" data-wow-delay=".2s">
            <div className="clients">
              <div className="image">
                <img
                  src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866913-l-02_1-removebg-preview.png"
                  title="Bicycle Wholesale Suppliers"
                  alt="Bicycle Wholesale Suppliers"
                />
              </div>
            </div>
          </div>
          <div className="item wow fadeInDown" data-wow-delay=".2s">
            <div className="clients">
              <div className="image">
                <img
                  src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866899-l-03-removebg-preview.png"
                  title="Bicycle Suppliers"
                  alt="Bicycle Suppliers"
                />
              </div>
            </div>
          </div>
          <div className="item wow fadeInDown" data-wow-delay=".2s">
            <div className="clients">
              <div className="image">
                <img
                  src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866889-l-04_1-removebg-preview (1).png"
                  title="Bicycle Dealers"
                  alt="Bicycle Dealers"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
