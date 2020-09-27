import React from "react"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import StorageIcon from "@material-ui/icons/Storage"

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    minHeight: "100vh",
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      height: "90vh",
    },
  },
  gridHeader: {
    textAlign: "center",
    width: "100%",
    height: "50%",
  },
  gridBody: {
    width: "100%",
    height: "50%",
  },
  icon: {
    [theme.breakpoints.down("xs")]: {
      height: 35,
      width: 35,
    },
    height: 70,
    width: 70,
    color: theme.palette.primary.main,
  },
}))

const Services = () => {
  const classes = useStyles()

  return (
    <div id="services" className={classes.containerFluid}>
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
          style={{ marginTop: "15vh", marginBottom: "10vh" }}
        >
          <Typography variant="h2">Services</Typography>
          <Typography variant="h6" color="textSecondary">
            Building great software begins with strong relationships. We are
            guided by an unwavering commitment to our clients' success. Get in
            touch with us and experience the GingerBeans difference.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.gridBody}
        spacing={4}
      >
        <Grid item xs={12} md={4}>
          <BuildOutlinedIcon className={classes.icon} />
          <Typography variant="h3">Concept Development</Typography>
          <Typography paragraph color="textSecondary">
            Do you have a great idea? We are experts at transforming our
            clients' vision into beautiful software. We can rapidly launch a
            lean prototype so you can get feedback fast while containing costs.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <LanguageIcon className={classes.icon} />
          <Typography variant="h3">All Things API</Typography>
          <Typography paragraph color="textSecondary">
            Do you need to develop or expand an API? What about connecting to a
            partner's API? Both? We can create the API solution for your needs.
            From proof of concept to mission-critical integrations, we can help.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <StorageIcon className={classes.icon} />
          <Typography variant="h3">Data Solutions</Typography>
          <Typography paragraph color="textSecondary">
            Do you suspect that treasures lurk in your data? Do you need a data
            plumber who can move, clean, and store your data so that it is
            actionable? Need some reporting and visualizations? Wish you could
            test out an idea for adding some AI into a product? Partner with
            GingerBeans to get tangible results for your next data project fast.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Services
