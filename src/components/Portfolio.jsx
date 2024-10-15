import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
export default function Portfolio() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
