import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeNinv from "./pages/Home/HomeNinv";
import Menu from "./pages/Menu/Menu";
import FakeHome from "./pages/FakeHome/FakeHome";
import PaymentSuccessful from "./pages/PaymentSuccessful/PaymentSuccessful";
import PaymentUnsuccessful from "./pages/PaymentUnsuccessful/PaymentUnsuccessful";
import Reciept from "./pages/Reciept/Reciept";
import HomeInv from "./pages/Home/HomeInv";
import SplitBill from "./pages/SplitBill/SplitBill";

export default function BasicExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FakeHome/>}/>
        <Route exact path="/homeninv" element={<HomeNinv/>}/>
        <Route exact path="/homeinv" element={<HomeInv/>}/>
        <Route exact path="/splitbill" element={<SplitBill/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/paymentsuccessful" element={<PaymentSuccessful/>}/>
        <Route exact path="/paymentunsuccessful" element={<PaymentUnsuccessful/>}/>
        <Route exact path="/reciept" element={<Reciept/>}/>
      </Routes>
    </BrowserRouter>
  );
}