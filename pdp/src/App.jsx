import React from "react";
import { createRoot } from 'react-dom/client';

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import MainLayout from "home/MainLayout";

const root = createRoot(document.getElementById("app"));
root.render(<MainLayout />);
