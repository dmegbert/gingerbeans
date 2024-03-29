import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import beans from "../imgs/just-beans-half-opacity.png"
import Box from "@material-ui/core/Box"
import GbCarousel from "../components/GbCarousel"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import CloudDoneOutlinedIcon from "@material-ui/icons/CloudDoneOutlined"
import ContactlessOutlinedIcon from "@material-ui/icons/ContactlessOutlined"
import EcoOutlinedIcon from "@material-ui/icons/EcoOutlined"
import CreditCardIcon from "@material-ui/icons/CreditCard"
import SyncIcon from "@material-ui/icons/Sync"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import evergreen1 from "../imgs/evergreen-home.png"
import evergreen2 from "../imgs/evergreen-protoype.jpg"
import evergreen3 from "../imgs/evergreen-dashboard.png"

import seglogic1 from "../imgs/seglogic-landing.png"
import seglogic2 from "../imgs/seglogic-billing.png"
import seglogic3 from "../imgs/seglogic-shopify.png"

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    minHeight: 730,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "90vh",
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
  },
  bottomSpacer: {
    height: "30vh",
    [theme.breakpoints.down("xs")]: {
      height: "10vh",
    },
  },
}))

const evergreenSlides = [
  { src: evergreen1, alt: "evergreen home page" },
  { src: evergreen2, alt: "evergreen prototype" },
  { src: evergreen3, alt: "evergreen dashboard" },
]

const seglogicSlides = [
  { src: seglogic1, alt: "seglogic landing page" },
  { src: seglogic2, alt: "seglogic billing page" },
  { src: seglogic3, alt: "seglogic shopify integration" },
]

const Portfolio = () => {
  const classes = useStyles()

  return (
    <>
      <div id="portfolio" className={classes.containerFluid}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.gridHeader}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{ marginTop: "15vh", marginBottom: "7vh" }}
          >
            <Typography variant="h2">Recent Projects</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={0}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <Typography variant="h4">EvergreenCLE</Typography>
            <Typography variant="h5">
              An IOT application automating hydroponic farms
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EcoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Designed smart device containing multiple sensors and actuators" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ContactlessOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Created client application running on smart device to collect sensor data, send data to cloud-based app, manage actuators" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CloudDoneOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Developed cloud-hosted application for customer onboarding and centralized management of smart devices" />
              </ListItem>
            </List>
            <Typography variant="body1" color="textSecondary"></Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className={classes.gridItemBeans}
            style={{ marginBottom: "7vh" }}
          >
            <Box css={{ width: "85%", marginTop: 25 }}>
              <Paper elevation={8}>
                <GbCarousel slides={evergreenSlides} />
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row-reverse"
          spacing={0}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <Typography variant="h4">SegLogic</Typography>
            <Typography variant="h5">
              A Shopify App Providing Customer Segmentation
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SyncIcon />
                </ListItemIcon>
                <ListItemText primary="Synchronized data between app and Shopify" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CreditCardIcon />
                </ListItemIcon>
                <ListItemText primary="Enabled subscription billing and management through Shopify's API" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ShoppingCartOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Developed install process for the Shopify app" />
              </ListItem>
            </List>
            <Typography variant="body1" color="textSecondary"></Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.gridItemBeans}>
            <Box css={{ width: "85%", marginTop: 25 }}>
              <Paper elevation={8}>
                <GbCarousel slides={seglogicSlides} interval={4500} />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className={classes.bottomSpacer} />
    </>
  )
}

export default Portfolio
