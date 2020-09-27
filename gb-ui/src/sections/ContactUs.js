import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Link from "@material-ui/core/Link"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone"
import SmsIcon from "@material-ui/icons/Sms"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import RoomIcon from "@material-ui/icons/Room"

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    width: "100%",
    textAlign: "center",
    paddingTop: "10vh",
    [theme.breakpoints.up("md")]: {
      height: "90vh",
      marginTop: "10vh",
    },
  },
  gridHeader: {
    height: "90vh",
  },
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      order: -1,
      marginTop: "5vh",
    },
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: "5vh",
    }
  },
}))

const ContactUs = () => {
  const classes = useStyles()

  return (
    <div id="contact" className={classes.containerFluid}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.gridHeader}
      >
        <Grid item xs={12} md={4} >
          <Paper elevation={6} className={classes.paper}>
            <List>
              <Link
                href="sms:+12162604805&body=Hi%2C%20I%27m%20interested%20in%20building%20something%20amazing."
                underline="none"
              >
                <ListItem>
                  <ListItemIcon>
                    <SmsIcon fontSize="large" color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Text Us"
                    secondary="216.260.4805"
                    primaryTypographyProps={{
                      variant: "h5",
                      color: "textPrimary",
                    }}
                    secondaryTypographyProps={{ variant: "h6" }}
                  />
                </ListItem>
              </Link>
              <Link href="tel:+12162604805" underline="none">
                <ListItem>
                  <ListItemIcon>
                    <PhoneIphoneIcon fontSize="large" color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Call us"
                    secondary="216.260.4805"
                    primaryTypographyProps={{
                      variant: "h5",
                      color: "textPrimary",
                    }}
                    secondaryTypographyProps={{ variant: "h6" }}
                  />
                </ListItem>
              </Link>
              <Link href="mailto:info@gingerbeans.tech" underline="none">
                <ListItem>
                  <ListItemIcon>
                    <MailOutlineIcon fontSize="large" color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email us"
                    secondary="info@gingerbeans.tech"
                    primaryTypographyProps={{
                      variant: "h5",
                      color: "textPrimary",
                    }}
                    secondaryTypographyProps={{ variant: "h6" }}
                  />
                </ListItem>
              </Link>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridItem}>
          <Typography variant="h1" color="secondary">
            Get in Touch
          </Typography>
          <Typography variant="h6" color="secondary">
            Contact us today and let's build something amazing.
          </Typography>
          <RoomIcon color="secondary" style={{ paddingTop: "5vh"}}/>
          <Typography variant="subtitle1" color="secondary">
            GingerBeans Tech LLC
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            19350 Monterey Avenue
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Cleveland, Ohio 44119
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactUs
