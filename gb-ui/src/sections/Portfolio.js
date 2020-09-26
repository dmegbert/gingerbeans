import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import {Typography} from "@material-ui/core"
import beans from "../imgs/just-beans-half-opacity.png"
import Box from "@material-ui/core/Box"
import GbCarousel from "../components/GbCarousel"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import ContactlessOutlinedIcon from '@material-ui/icons/ContactlessOutlined';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';

const useStyles = makeStyles((theme) => ({
	containerFluid: {
		minHeight: "100vh",
		width: "100%",
		[theme.breakpoints.up("md")]: {
			height: "90vh"
		},
	},
	gridHeader: {
		textAlign: "center",
		width: "100%",
		height: "30%",
	},
	gridBody: {
		width: "100%",
	},
	gridItemBeans: {
		backgroundImage: `url(${beans})`,
		width: "100%",
		height: "100%",
		backgroundPosition: "right",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		position: "relative",
	}
}))

const Portfolio = () => {
	const classes = useStyles()

	return (
		<div id="portfolio" className={classes.containerFluid}>
			<Grid container direction="row" justify="center" alignItems="center" className={classes.gridHeader}>
				<Grid item xs={12} sm={12} md={6} style={{ marginTop: "15vh"}}>
					<Typography variant="h2">Recent Projects</Typography>
				</Grid>
			</Grid>
			<Grid container direction="row" spacing={0} justify="center" alignItems="flex-start" >
				<Grid item xs={12} sm={12} md={6} style={{ textAlign: "center"}}>
					<Typography variant="h4">EvergreenCLE</Typography>
					<Typography variant="h5">An IOT application automating hydroponic farms</Typography>
					<List>
						<ListItem>
							<ListItemIcon>
								<EcoOutlinedIcon/>
							</ListItemIcon>
							<ListItemText primary="Designed smart device containing multiple sensors and actuators"/>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<ContactlessOutlinedIcon/>
							</ListItemIcon>
							<ListItemText primary="Created client application running on smart device to collect sensor data, send data to cloud-based app, manage actuators"/>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CloudDoneOutlinedIcon/>
							</ListItemIcon>
							<ListItemText primary="Developed cloud-hosted application for customer onboarding and centralized management of smart devices"/>
						</ListItem>
					</List>
					<Typography variant="body1" color="textSecondary">
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={6} className={classes.gridItemBeans}>

					<Box css={{ width: "85%", marginTop: 25}}>
						<Paper elevation={8}>
						<GbCarousel/>
						</Paper>
					</Box>

				</Grid>
			</Grid>
		</div>
	)
}

export default Portfolio