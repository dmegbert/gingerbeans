import React from 'react'

import {
  createBrowserRouter,
} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import BlogListPage from "./pages/BlogListPage"
import BlogDetailPage from "./pages/BlogDetailPage"

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/blog",
		element: <BlogListPage />
	},
	{
		path: "/blog/:blogSlug",
		element: <BlogDetailPage />
	},
])

export default router