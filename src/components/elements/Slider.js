// src/components/elements/Slider.js
import React, { useState, useRef } from 'react';
import '../styles/slider.css';
import image1 from '../../resource/background3.png';
import image2 from '../../resource/background1.png';

const slides = [
    {
      index: 0,
      headline: 'Become a Member',
      button: 'Join Now',
      src: image1,
      link: '/become-member'
    },
    {
      index: 1,
      headline: 'Member Portal',
      button: 'Enter Portal',
      src: image2,
      link: '/member-portal'
    }
  ];
  
  const Slider = () => {
    const [current, setCurrent] = useState(0);
  
    return (
      <div className="slider">
        <div className="slider__wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide__image-wrapper">
                <img src={slide.src} alt={slide.headline} className="slide__image" />
                <div className="slide__content">
                  <h2 className="slide__headline">{slide.headline}</h2>
                  <a href={slide.link} className="slide__action btn">{slide.button}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Slider;