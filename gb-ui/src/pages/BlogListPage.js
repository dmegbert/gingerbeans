import React from "react"
import NavBar from "../components/NavBar/NavBar"
import {Container, Divider, Link, Paper, Typography} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"


const BlogListPage = () => {
	return (
		<>
		<div>
			<NavBar showNavBar={true} landingPage={false}/>
		</div>
			<Container style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
				<Grid
          container
          direction="row"
          spacing={2}
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item sm={12} md={6} style={{ textAlign: "justify", marginTop: 30 }}>
            <Typography variant="h4">Deploying a Production Grade Static Site on AWS using Route53, CloudFront, and S3 with Pulumi Infrastructure as Code (IaC)</Typography>
          </Grid>
          <Grid item sm={12} md={5} style={{ textAlign: "right", marginTop: 30 }}>
            <Paper elevation={8} style={{ padding: 10, width: "50%"}}>
              <img
                src="https://raw.githubusercontent.com/dmegbert/exampulumi/main/blog/img/hardHat.png"
                alt="red hard hat"
                width="100%"
              />
            </Paper>
          </Grid>
          <Grid item sm={10} style={{ textAlign: "justify" }}>
            <Typography variant="body1">
              The following blog will walk you through setting up a secure static in AWS while using Pulumi to provision and configure all the required infrastructure and deploy the static site files.
            </Typography>
            <Typography variant="h6">
              Prerequisites
            </Typography>
            <ul  style={{ marginTop: 5 }}>
              <li>An AWS account where you have full permissions</li>
              <li>A Pulumi account</li>
              <li>Basic to intermediate knowledge of AWS</li>
              <li>Understand how to use create react app or something similar (or a willingness to google it)</li>
            </ul>
            <Typography variant="body1"><i>If you have never used Pulumi, this will be a nice way to try it out and compare it to other IaC tools like Terraform and AWS CDK...</i></Typography>
            <Typography variant="h6" style={{ marginTop: 10 }}>
              <Link href="/blog/static_site_blog">Read full blog here.</Link>
            </Typography>
            <Divider />
          </Grid>
        </Grid>
				<Grid
          container
          direction="row"
          spacing={2}
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item sm={12} md={6} style={{ textAlign: "justify", marginTop: 30 }}>
            <Typography variant="h4">Simplifying Serverless—Deploy a Docker Based API using AWS Lambda Function URLs. No API Gateway!</Typography>
	          <Typography variant="body1" style={{ paddingTop: 20 }}>
              Learn how to launch an API in AWS using a Lambda Function URL and enable a custom domain name via CloudFront.
            </Typography>
          </Grid>
          <Grid item sm={12} md={5} style={{ textAlign: "right", marginTop: 30 }}>
            <Paper elevation={8} style={{ padding: 10, width: "50%"}}>
              <img
                src="https://raw.githubusercontent.com/dmegbert/exampulumi/main/blog/img/shipPortal.jpg"
                alt="ship sailing through a portal"
                width="100%"
              />
            </Paper>
          </Grid>
          <Grid item sm={10} style={{ textAlign: "justify" }}>
            <Typography variant="h6">
              Full Stack Application Deployment Series
            </Typography>
            <Typography variant="body1">This is the second article in a series that details how to set up a production-grade, full stack web application in AWS using Pulumi for our Infrastructure as Code (IaC) needs. The first article contains code and set up instructions that we will build on in this post.</Typography>
            <Typography variant="h6" style={{ marginTop: 10 }}>
              <Link href="/blog/api_aws_lambda">Read full blog here.</Link>
            </Typography>
            <Divider />
          </Grid>
        </Grid>
			</Container>
	</>
	)
}

export default BlogListPage
