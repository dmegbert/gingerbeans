/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react"
import {Button, MenuItem} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import ButtonAppBarCollapse from "./ButtonAppBarCollapse"
import {Link as ScrollLink} from "react-scroll"

const styles = theme => ({
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
	}
})

const AppBarCollapse = props => (
	<div className={props.classes.root}>
		<ButtonAppBarCollapse>
			<ScrollLink
				activeClass="buttonActive"
				to="services"
				spy={true}
				offset={0}
				duration={1000}
				smooth={true}
			>
				<MenuItem>
					Services
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
		</ButtonAppBarCollapse>
		<div className={props.classes.buttonBar} id="appbar-collapse">
			<ScrollLink
				activeClass="buttonActive"
				to="services"
				spy={true}
				offset={0}
				duration={1000}
				smooth={true}
			>
				<Button color="inherit">Services</Button>
			</ScrollLink>
			<ScrollLink
				activeClass="buttonActive"
				to="portfolio"
				spy={true}
				offset={0}
				duration={1000}
				smooth={true}
			>
				<Button color="inherit">Portfolio</Button>
			</ScrollLink>
		</div>
	</div>
)

export default withStyles(styles)(AppBarCollapse)
