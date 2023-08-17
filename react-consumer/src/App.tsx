import React from "react";
import { createRoot } from 'react-dom/client';

import "remixicon/fonts/remixicon.css";
import "./index.scss";

// TODO: Lazy load/async load components from react to svelte
import Header from "home_remote/Header";
import Footer from "home_remote/Footer";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
	<SafeComponent>
		<Header />
	</SafeComponent>
		React Consumer
	<Footer />
  </div>
);


const root = createRoot(document.getElementById("app"));
root.render(<App />);
