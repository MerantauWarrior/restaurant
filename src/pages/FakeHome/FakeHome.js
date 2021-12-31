import React from 'react';
import {Link} from "react-router-dom";

const FakeHome = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/homeninv">homeninv</Link>
        </li>
        <li>
          <Link to="/homeinv">homeinv</Link>
        </li>
        <li>
          <Link to="/splitbill">splitbill</Link>
        </li>
        <li>
          <Link to="/menu">menu</Link>
        </li>
        <li>
          <Link to="/paymentsuccessful">paymentsuccessful</Link>
        </li>
        <li>
          <Link to="/paymentunsuccessful">paymentunsuccessful</Link>
        </li>
        <li>
          <Link to="/reciept">reciept</Link>
        </li>
        <li>
          <Link to="/paycard">paycard</Link>
        </li>
        <li>
          <Link to="/addpromocode">addpromocode</Link>
        </li>
        <li>
          <Link to="/paycustom">paycustom</Link>
        </li>
        <li>
          <Link to="/getreceipt">getreceipt</Link>
        </li>
        <li>
          <Link to="/notfound">notfound</Link>
        </li>
        <li>
          <Link to="/paybill">paybill</Link>
        </li>
        <li>
          <Link to="/promocodeadded">promocodeadded</Link>
        </li>
        <li>
          <Link to="/splitbillsummary">splitbillsummary</Link>
        </li>
        <li>
          <Link to="/tipsbill">tipsbill</Link>
        </li>
      </ul>
    </div>
  );
};

export default FakeHome;