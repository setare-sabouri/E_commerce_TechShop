import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';

interface SliderProps { }

const Slidercmp: React.FC<SliderProps> = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: React.FC<ArrowProps> = (props) => (
  <div
    className={`${props.className} ${styles.arrow}`}
    style={{ ...props.style, display: 'block', right: 35, zIndex: 2 }}
    onClick={props.onClick}
  >
    Next
  </div>
);

const CustomPrevArrow: React.FC<ArrowProps> = (props) => (
  <div
    className={`${props.className} ${styles.arrow}`}
    style={{ ...props.style, display: 'block', zIndex: 2, left: 10 }}
    onClick={props.onClick}
  >
    Prev
  </div>
);

export default Slidercmp;
