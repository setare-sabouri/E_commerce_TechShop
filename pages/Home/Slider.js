import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slidercmp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <Slider {...settings}>
      <div>
        <img src='./images/banner/ROG-Zephyrus-banner-2.jpg' alt='Banner 1' />
      </div>
      <div>
        <img src='./images/banner/wide-range-of-laptops.jpg' alt='Banner 2' />
      </div>
      <div>
        <img src='./images/banner/MSI-AMG-Stealth16-banner2.jpg' alt='Banner 3' />
      </div>
      <div>
        <img src='./images/banner/g5-gaming-banner2.jpg' alt='Banner 4' />
      </div>
    </Slider>
  );
};

const CustomNextArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, display: 'block', width: '50px', height: '50px', zIndex: 2 }}
    onClick={props.onClick}
  >
    Next
  </div>
);

const CustomPrevArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, display: 'block', width: '50px', height: '50px', zIndex: 2, left: 0 }}
    onClick={props.onClick}
  >
    Prev
  </div>
);

export default Slidercmp;
