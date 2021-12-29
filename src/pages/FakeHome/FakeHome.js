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
      </ul>
    </div>
  );
};

export default FakeHome;