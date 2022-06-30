import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/styling/Footer.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Work,
  Travel,
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/travel" element={<Travel />} />
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById("root")
);