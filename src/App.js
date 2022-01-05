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
import PayCard from "./pages/PayCard/PayCard";
import AddPromocode from "./pages/AddPromocode/AddPromocode";
import PayCustom from "./pages/PayCustom/PayCustom";
import GetReceipt from "./pages/GetReceipt/GetReceipt";
import NotFound from "./pages/NotFound/NotFound";
import PayBill from "./pages/PayBill/PayBill";
import PromocodeAdded from "./pages/PromocodeAdded/PromocodeAdded";
import SplitBillSummary from "./pages/SplitBillSummary/SplitBillSummary";
import TipsBill from "./pages/TipsBill/TipsBill";
import TipsAdd from "./pages/TipsAdd/TipsAdd";
import SplitBillEvently from "./pages/SplitBillEvently/SplitBillEvently";
import PayItems from "./pages/PayItems/PayItems";
import ChangeQty from "./pages/ChangeQty/ChangeQty";

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
        <Route exact path="/paycard" element={<PayCard/>}/>
        <Route exact path="/addpromocode" element={<AddPromocode/>}/>
        <Route exact path="/paycustom" element={<PayCustom/>}/>
        <Route exact path="/getreceipt" element={<GetReceipt/>}/>
        <Route exact path="/notfound" element={<NotFound/>}/>
        <Route exact path="/paybill" element={<PayBill/>}/>
        <Route exact path="/promocodeadded" element={<PromocodeAdded/>}/>
        <Route exact path="/splitbillsummary" element={<SplitBillSummary/>}/>
        <Route exact path="/tipsbill" element={<TipsBill/>}/>
        <Route exact path="/tipsadd" element={<TipsAdd/>}/>
        <Route exact path="/splitevently" element={<SplitBillEvently/>}/>
        <Route exact path="/payitems" element={<PayItems/>}/>
        <Route exact path="/changeqty" element={<ChangeQty/>}/>
      </Routes>
    </BrowserRouter>
  );
}