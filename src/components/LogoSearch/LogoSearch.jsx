import React from "react";
import LOGO from "../../assets/logo/LOGON.png";
import './LogoSearch.css'
import { FaSearch } from 'react-icons/fa';

function LogoSearch() {
  return (
    <div className="LogoSearch">
      <img src={LOGO} alt="" style={{width:"50px", height:"50px"}}/>
      <div className="Search">
        <input type="text" placeholder="Search Posts" />
        <div className="s-icon">
        <FaSearch style={{width:"23px"}}/>
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
