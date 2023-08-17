import React, { useState } from "react";
import Edit from "../../assets/icons/edit.png";
import ProfileModal from "../ProfileModal/ProfileModal";
import "./InfoCard.css";
import { Link } from "react-router-dom";
function InfoCard() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h3>About Profile</h3>
        <div>
          <img
            src={Edit}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setOpenModal(true)}
          />
          <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </div>
      <div className="Info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Banglore</span>
      </div>
      <div className="Info">
        <span>
          <b>Works At </b>
        </span>
        <span>Apni Company Pvt Ltd</span>
      </div>
      {/* <button className='Button logout-button'>Logout</button> */}
      <button className="Button logout-button">
        <Link to="/login" className="link-a"> Logout</Link>
      </button>
    </div>
  );
}

export default InfoCard;
