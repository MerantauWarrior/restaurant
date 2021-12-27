import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import FakeHome from "./pages/FakeHome/FakeHome";

export default function BasicExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FakeHome/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}