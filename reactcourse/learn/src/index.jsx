import React from 'react';
import ReactDom from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "./App";
import Header from "./components/Header";

ReactDom.render(
 <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
    </Routes>
 </Router>,
    document.getElementById("root")
);