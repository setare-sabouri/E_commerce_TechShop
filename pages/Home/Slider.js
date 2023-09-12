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
        <img src='./images/slider.png' alt='Banner 1' />
      </div>
      <div>
        <img src='./images/bannerAll.jpg' alt='Banner 2' />
      </div>
      <div>
        <img src='./images/ACER-predator-gaming-laptop-banner.jpg' alt='Banner 3' />
      </div>
      <div>
        <img src='./images/ACER-predator-gaming-laptop-banner.jpg' alt='Banner 4' />
      </div>
    </Slider>
  );
};

const CustomNextArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, display: 'block', background: 'green', width: '50px', height: '50px', zIndex: 2 }}
    onClick={props.onClick}
  >
    Next
  </div>
);

const CustomPrevArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, display: 'block', background: 'red', width: '50px', height: '50px', zIndex: 2 }}
    onClick={props.onClick}
  >
    Prev
  </div>
);

export default Slidercmp;
