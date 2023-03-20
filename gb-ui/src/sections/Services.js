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
        alignItems="flex-start"
        className={classes.gridHeader}
      >
        <Grid
          item
          xs={12}
          sm={12}
          style={{ marginTop: "13vh", marginBottom: "10vh"}}
        >
          <Typography variant="h2">Services & Technologies</Typography>
          <Typography variant="h6" color="textSecondary">
            <li>Python</li>
            <li>React / TypeScript</li>
            <li>SQL Databases - PostgreSQL, MySQL, etc.</li>
            <li>Elasticsearch</li>
            <li>Amazon Web Services (AWS)</li>
            <li>Infrastructure as Code (IaC) - Pulumi, AWS CDK, Terraform</li>
            <li>CI/CD - CircleCI, Jenkins</li>
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
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <Grid item xs={12} md={4}>
          <BuildOutlinedIcon className={classes.icon} />
          <Typography variant="h3">Product Development</Typography>
          <Typography paragraph color="textSecondary">
            Do you have a great idea? We are experts at transforming our
            clients' vision into beautiful software. We can rapidly launch a
            lean prototype / minimum viable product (MVP) so you can get feedback fast while containing costs.
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
          <Typography variant="h3">DevOps</Typography>
          <Typography paragraph color="textSecondary">
            Do you need to scale your application?
            Would you like your development team to be able to deploy new features faster and safer? GingerBeans has
            significant experience building, deploying, and scaling modern, cloud-native applications. We can
            help you modernize your infrastructure using best practices such as infrastructure as code (IaC),
            Continuous Integration / Continuous Deployment (CI/CD), and automated testing.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Services
