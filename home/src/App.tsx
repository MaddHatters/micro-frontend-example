import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
	<SafeComponent>
		<Header app={{name: 'home'}} />
	</SafeComponent>
    <div>Home Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
