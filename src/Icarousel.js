import React from 'react';
import Slider from 'react-slick';
import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Icarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        vertical: false,
        verticalSwiping: false,
        arrows: true,
    };

    return (
        <Slider {...settings} className="custom-slider">
            <div>
                <img
                    src="image1.webp"
                    className="product-img"
                    title="Bicycle Wholesaler Suppliers in Delhi"
                    alt="Bicycle Wholesaler Suppliers in Delhi"
                />
            </div>
            <div>
                <img
                    src="image2.png"
                    className="product-img"
                    title="Bicycle Manufacturers Company in [area]"
                    alt="Bicycle Manufacturers Company in [area]"
                />
            </div>
        </Slider>
    );
}

export default Icarousel;
