import React from "react"

import GingerHero from "../sections/GingerHero"
import Services from "../sections/Services"
import Portfolio from "../sections/Portfolio"
import NavBar from "../components/NavBar/NavBar"
import ContactUs from "../sections/ContactUs"


const LandingPage = () => {

	return (
		<div>
			<NavBar/>
			<GingerHero/>
			<Services/>
			<Portfolio/>
			<ContactUs/>
		</div>

	)
}

export default LandingPage