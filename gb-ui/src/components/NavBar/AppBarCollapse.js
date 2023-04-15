/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react"
import {Button, MenuItem} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import ButtonAppBarCollapse from "./ButtonAppBarCollapse"
import {Link as ScrollLink} from "react-scroll"


const useStyles = makeStyles((theme) => ({
	root: {
		position: "absolute",
		right: 0
	},
	buttonBar: {
		[theme.breakpoints.down("xs")]: {
			display: "none"
		},
		margin: "10px",
		paddingLeft: "16px",
		right: 0,
		position: "relative",
		width: "100%",
		background: "transparent"
	},
	buttonText: {
		color: "white",
		textTransform: "uppercase",
		fontSize: "1.25rem",
		paddingLeft: 20,
	}
}))

const AppBarLink = (props) => {
	const { sectionName, path, landingPage, menuItem } = props
	const classes = useStyles()
	const linkPath = path || `/#${sectionName}`
	const onLandingPage = linkPath === `/#${sectionName}`

	if (landingPage && onLandingPage) {
		return (
			<ScrollLink
			activeClass="buttonActive"
			to={sectionName}
			spy={true}
			offset={0}
			duration={1000}
			smooth={true}
		>
			{menuItem ? (
				<MenuItem>
					{sectionName}
				</MenuItem>) : (
					<Button className={classes.buttonText}>
						{sectionName}
					</Button>
			)}
		</ScrollLink>
		)
	} else {
		return (
			<a href={linkPath} style={{ textDecoration: "none" }}>
			{menuItem ? (
				<MenuItem>
					{sectionName}
				</MenuItem>) : (
					<Button color="inherit" className={classes.buttonText}>
						{sectionName}
					</Button>
			)}
		</a>
		)
	}
}

const AppBarCollapse = (props) => {
	const classes = useStyles()
	const { landingPage } = props

	return (
		<div className={classes.root}>
			<ButtonAppBarCollapse>
				<AppBarLink sectionName="Services"  landingPage={landingPage} menuItem={true} />
				<ScrollLink
					activeClass="buttonActive"
					to="about"
					spy={true}
					offset={0}
					duration={1000}
					smooth={true}
				>
					<MenuItem>
						About
					</MenuItem>
				</ScrollLink>
				<ScrollLink
					activeClass="buttonActive"
					to="portfolio"
					spy={true}
					offset={0}
					duration={1000}
					smooth={true}
				>
					<MenuItem>Portfolio</MenuItem>
				</ScrollLink>
				<ScrollLink
					activeClass="buttonActive"
					to="contact"
					spy={true}
					offset={0}
					duration={1000}
					smooth={true}
				>
					<MenuItem>Contact</MenuItem>
				</ScrollLink>
			</ButtonAppBarCollapse>
			<div className={classes.buttonBar} id="appbar-collapse">
				<AppBarLink sectionName="services"  landingPage={landingPage} menuItem={false} />
				<AppBarLink sectionName="about"  landingPage={landingPage} menuItem={false} />
				<AppBarLink sectionName="portfolio"  landingPage={landingPage} menuItem={false} />
				<AppBarLink sectionName="contact"  landingPage={landingPage} menuItem={false} />
				<AppBarLink sectionName="blog" path="/blog"  landingPage={landingPage} menuItem={false} />
			</div>
	</div>
	)
}

export default AppBarCollapse
