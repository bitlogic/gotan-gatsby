import "./ImageCarousel.scss";
import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ data }) => {
  const firstLineSlides = [...data.firstLineSlides, ...data.firstLineSlides];
  const secondLineSlides = [...data.secondLineSlides, ...data.secondLineSlides];

  return (
    <div className="image-carousel section-padding">
      <div>
        <div className="carousel-wrapper">
          {firstLineSlides.map((slide, index) => (
            <div className="carousel-slide" key={slide._key + index}>
              <SanityImage {...slide.image} alt={`${slide.image.alt}`} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="carousel-wrapper">
          {secondLineSlides.map((slide, index) => (
            <div className="carousel-slide" key={slide._key + index}>
              <SanityImage {...slide.image} alt={`${slide.image.alt}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;