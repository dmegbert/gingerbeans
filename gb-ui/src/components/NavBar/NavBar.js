import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import AppBarCollapse from "./AppBarCollapse"
import gbLogo from "../../gb-logo-wh-transparent-bg.png"
import {animateScroll as Scroll} from "react-scroll"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	menuLogo: {
		height: "85%",
		marginRight: 16,
		marginLeft: -12
	},
	navigation: {
		height: "10vh",
	},
	toggleDrawer: {},
	appTitle: {}
}

const useStyles = makeStyles(styles)

const ElevationScroll = (props) => {
	const {children} = props
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	})

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
}

const useWindowSize = () => {
	// Thanks internet: https://usehooks.com/useWindowSize/
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	})

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		// Add event listener
		window.addEventListener("resize", handleResize)

		// Call handler right away so state gets updated with initial window size
		handleResize()

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize)
	}, []) // Empty array ensures that effect is only run on mount

	return windowSize
}

const NavBar = (props) => {
	const classes = useStyles()
	const {height} = useWindowSize()
	const showLogo = useScrollTrigger({
		disableHysteresis: true,
		threshold: (height * .85),
	})
	return (
		<>
			<ElevationScroll {...props}>
				<AppBar position="fixed" className={classes.navigation} style={{display: showLogo ? "" : "none"}}>
					<Toolbar>
						<img src={gbLogo} alt="logo" className={classes.menuLogo} onClick={() => Scroll.scrollToTop()}/>
						<AppBarCollapse/>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</>
	)
}

export default NavBar
