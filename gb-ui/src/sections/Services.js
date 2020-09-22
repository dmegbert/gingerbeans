import React from "react"
import Grid from "@material-ui/core/Grid"
import {Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import HearingIcon from "@material-ui/icons/Hearing"
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
	gridContainer: {
		width: "100%",
		height: "40%",
	},
	containerFluid: {
		height: "90vh",
		width: "100%",
		textAlign: "center",
	},
	icon: {
		[theme.breakpoints.down("xs")]: {
			height: 35,
			width: 35,
		},
		height: 70,
		width: 70,
		color: theme.palette.primary.main,
	}
}))


const Services = () => {
	const classes = useStyles()

	return (
		<div id="services" className={classes.containerFluid}>
			<Grid container direction="row" justify="center" alignItems="center" className={classes.gridContainer}>
				<Grid item xs={12} sm={12} md={8} >
					<Typography variant="h2">Services</Typography>
					<Typography variant="h6" color="textSecondary">
						Building great software begins with strong relationships. We are guided by an unwavering commitment to our clients' success.
					</Typography>
				</Grid>
			</Grid>
			<Grid container direction="row" justify="center" alignItems="flex-start" className={classes.gridContainer} spacing={4}>
				<Grid item xs={12} md={4}>
					<TrendingUpIcon className={classes.icon}/>
					<Typography variant="h3">Value</Typography>
					<Typography paragraph color="textSecondary">Things go here</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<HearingIcon className={classes.icon}/>
					<Typography variant="h3">Communication</Typography>
					<Typography paragraph color="textSecondary">Things go here</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<StarBorderIcon className={classes.icon}/>
					<Typography variant="h3">Excellence</Typography>
					<Typography paragraph color="textSecondary">Things go here</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

export default Services