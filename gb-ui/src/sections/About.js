import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import david from "../imgs/david.png"

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    textAlign: "center",
    paddingTop: "10vh",
    [theme.breakpoints.up("md")]: {
      height: "90vh",
      marginTop: "10vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: 810,
    }
  },
  gridHeader: {
    height: "90vh",
  },
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      order: -1,
      marginTop: "5vh"
    },
  },
  otherGridItem: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50vh"
    }
  },
  davidBigHead: {
    [theme.breakpoints.down("xs")]: {
      height: 200
    },
    maxWidth: 300,
    paddingBottom: 20
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <div id="about" className={classes.containerFluid}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.gridHeader}
      >
        <Grid item xs={12} md={6} className={classes.gridItem}>
          <Typography variant="h3" color="secondary" style={{ paddingBottom: 75 }}>
            Founded in 2020, GingerBeans helps clients build software to realize their dreams.
          </Typography>
          <Typography variant="h4" color="secondary" style={{ paddingBottom: 10}}>
            We are guided by simple, transformative values
          </Typography>
          <Typography variant="h5" color="secondary">
            <li style={{ paddingLeft: 8, paddingBottom: 5 }}>Strong relationships lead to excellent software</li>
            <li style={{ paddingLeft: 8, paddingBottom: 5 }}>Only by asking the right questions can you arrive at the correct solution</li>
            <li style={{ paddingLeft: 8, paddingBottom: 5 }}>Use the right tool for the job</li>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.otherGridItem}>
          <img src={david} className={classes.davidBigHead} alt="Profile of David."/>
          <Typography variant="h4" color="secondary">
            David Egbert
          </Typography>
          <Typography variant="h5" color="secondary">
            Owner
          </Typography>
          <Link href="https://www.linkedin.com/in/dmegbert/" target="_blank">
            <Typography variant="h5" color="secondary" style={{textDecoration: 'underline'}}>
              LinkedIn Profile
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
