import React from 'react';
import {Link} from "react-router-dom";

const FakeHome = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default FakeHome;