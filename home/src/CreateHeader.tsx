import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

export default function CreateHeader (element: Element) {
	ReactDOM.render(<Header />, element);
}