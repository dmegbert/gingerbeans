import React from "react"
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel"

const renderSlide = (index, alt, src) => {
  return (
    <Slide index={index}>
      <Image alt={alt} src={src} />
    </Slide>
  )
}

const GbCarousel = (props) => {
  const { slides, width = 1200, height = 800, interval = 3000 } = props

  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={3}
      interval={interval}
      isPlaying={true}
      infinite={true}
    >
      <Slider>
        {slides.map((slide, index) => renderSlide(index, slide.alt, slide.src))}
      </Slider>
    </CarouselProvider>
  )
}

export default GbCarousel
