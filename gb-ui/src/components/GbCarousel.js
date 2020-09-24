import React from "react";
import {CarouselProvider, Image, Slide, Slider} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import evergreen1 from "../imgs/evergreen-home.png";
import evergreen2 from "../imgs/evergreen-protoype.jpg";
import evergreen3 from "../imgs/evergreen-dashboard.png";

const GbCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={1200}
      naturalSlideHeight={800}
      totalSlides={3}
      interval={3000}
      isPlaying={true}
      infinite={true}
    >
      <Slider>
        <Slide index={0}>
          <Image alt="evergreen home page" src={evergreen1}/>
        </Slide>
        <Slide index={1}>
          <Image alt="evergreen prototype" src={evergreen2}/>
        </Slide>
        <Slide index={2}>
          <Image alt="evergreen dashboard" src={evergreen3}/>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default GbCarousel
