import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/pagenotfound" />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}
