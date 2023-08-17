import React from "react";
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

export default function MainLayout() {
	const router = createBrowserRouter([
		{
			path: '/home',
			element: <HomeContent/>
		},
		{
			path: '/product/:id',
			element: <PDPContent/>
		},
		{
			path: '/cart',
			element: <CartContent/>
		}
	  ])

  return (
	<div className="text-3xl mx-auto max-w-6xl">
		<Header />
		<div className="my-10">
			<RouterProvider router={router} />
		</div>
		<Footer />
	</div>
  );
}
