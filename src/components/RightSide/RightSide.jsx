import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import Home from "../../assets/icons/home.png";
import Notification from "../../assets/icons/notification.png";
import Chat from "../../assets/icons/message.png";
import Setting from "../../assets/icons/setting1.png";
import { Link } from "react-router-dom";
import ShareModal from "../ShareModal/ShareModal";
function RightSide() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcon">
        <Link to="/">
          <img src={Home} alt=""></img>
        </Link>
        <img src={Setting} alt="" />
        <img src={Notification} alt="" />
        <img src={Chat} alt="" />
      </div>
      <TrendCard />
      <button className="Button s-button" onClick={() => setOpenModal(true)}>
        Share
      </button>
      <ShareModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default RightSide;
