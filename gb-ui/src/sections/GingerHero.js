import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { Link as ScrollLink } from "react-scroll"

import gbLogoWhite from '../imgs/gb-hero-logo.png'


const useStyles = makeStyles((theme) => ({
	heroImage: {
		backgroundColor: theme.palette.primary.main,
		backgroundImage: `url(${gbLogoWhite})`,
		width: "100%",
		height: "100vh",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		position: "relative",
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	heroText: {
		position: "absolute",
		top: "75%",
    left: "50%",
    transform: "translate(-50%, -50%)"
	}
}))

const GingerHero = () => {
	const classes = useStyles()
	return (
		<>
		<div className={classes.heroImage}>
			<div className={classes.heroText}>
				<Typography variant="h5" color="secondary" paragraph align="center">
					Delivering superior technology solutions
				</Typography>
				<Grid container spacing={2} justify="center" >
					<Grid item>
						{/*<a href="#learn-more" style={{ textDecoration: "none" }}>*/}
							<ScrollLink
								activeClass="buttonActive"
								to="services"
								spy={true}
								offset={0}
								duration={1000}
								smooth={true}
							>
								<Button variant="outlined" color="secondary">
									Learn More
								</Button>
							</ScrollLink>
						{/*</a>*/}
					</Grid>
				</Grid>
			</div>
		</div>
		</>
		)
}


export default GingerHero
