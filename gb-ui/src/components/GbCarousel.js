import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import evergreen1 from "../imgs/evergreen-home.png"
import evergreen2 from "../imgs/evergreen-protoype.jpg"
import evergreen3 from "../imgs/evergreen-dashboard.png"

const GbCarousel = () => {

	return (
		<Carousel showThumbs={false} swipeable={true} autoPlay={true} emulateTouch={true} infiniteLoop={true} stopOnHover={true} showStatus={false}>
			<div>
				<img src={evergreen1} alt="evergreen home"/>
			</div>
			<div>
				<img src={evergreen2} alt="evergreen prototype"/>
			</div>
			<div>
				<img src={evergreen3} alt="evergreen dashboard"/>
			</div>
		</Carousel>
	)
}

export default GbCarousel