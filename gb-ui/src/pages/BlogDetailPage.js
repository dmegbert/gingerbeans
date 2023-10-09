import React, {useEffect, useState} from "react"
import NavBar from "../components/NavBar/NavBar"
import { Container, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import {useParams} from "react-router-dom"
import axios from "axios"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const blogSlugs = [
	"static_site_blog",
	"api_aws_lambda",
	"securing_serverless",
	"waf_v2",
]

const BlogDetailPage = () => {
	let { blogSlug } = useParams()
	const isValidBlogSlug = blogSlugs.includes(blogSlug)
	const [markDown, setMarkDown] = useState()

	useEffect(() => {
		const getMarkdown = () => {
			const url = `https://raw.githubusercontent.com/dmegbert/exampulumi/main/blog/${blogSlug}.md`
			axios.get(url, {
				withCredentials: false,
			})
				.then(res => {
					console.log(res.data)
					setMarkDown(res.data)
				})
				.catch(err => console.log(err))
		}
		getMarkdown()
	}, [blogSlug])

	if (isValidBlogSlug) {
		return (
		<>
		<div>
			<NavBar showNavBar={true} landingPage={false}/>
		</div>
			<Container style={{ paddingTop: "10vh" }}>
				<Grid
          container
          direction="row"
          spacing={2}
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item sm={12} md={6} style={{ textAlign: "justify", marginTop: 30 }}>
	          <ReactMarkdown remarkPlugins={[remarkGfm]}>
		          {markDown}
	          </ReactMarkdown>
	          <Typography variant="body1">{blogSlug}</Typography>
          </Grid>
        </Grid>
			</Container>
	</>
	)
	} else {
		return (
			<>
		<div>
			<NavBar showNavBar={true} landingPage={false}/>
		</div>
				<Container style={{ paddingTop: "10vh" }}>
					<Typography variant="h4">That blog does not exist. :(</Typography>
				</Container>
			</>
		)
	}


}

export default BlogDetailPage
