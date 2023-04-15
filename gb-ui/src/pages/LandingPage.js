import React from "react"

import GingerHero from "../sections/GingerHero"
import About from "../sections/About"
import Services from "../sections/Services"
import Portfolio from "../sections/Portfolio"
import NavBar from "../components/NavBar/NavBar"
import ContactUs from "../sections/ContactUs"


const LandingPage = () => {

	return (
		<div>
			<NavBar landingPage={true} />
			<GingerHero/>
			<Services/>
			<About />
			<Portfolio/>
			<ContactUs/>
		</div>

	)
}

export default LandingPage