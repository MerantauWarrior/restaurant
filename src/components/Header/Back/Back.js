import React from 'react';
import {useNavigate} from "react-router-dom";
import {ReactComponent as BackIcon} from './arrow.svg';

function Back() {
  const navigate = useNavigate();
  return (
    <BackIcon onClick={() => navigate(-1)}/>
  );
}

export default Back;