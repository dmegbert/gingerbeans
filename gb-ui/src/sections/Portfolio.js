import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles((theme) => ({
	gridContainer: {
		width: "100%",
		height: "100%",
	},
	containerFluid: {
		height: "90vh",
		width: "100%",
		textAlign: "center",
	},
}))

const Portfolio = () => {
	const classes = useStyles()

	return (
		<div id="portfolio" className={classes.containerFluid}>
			<Grid container direction="row" justify="center" alignItems="center" className={classes.gridContainer}>
				<Grid item xs={12} sm={12} md={6}>
					Testing
				</Grid>
			</Grid>
		</div>
	)
}

export default Portfolio