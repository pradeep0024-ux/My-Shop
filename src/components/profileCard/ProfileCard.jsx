import React from "react";
import Bgimg from "../../assets/Posts/P7.jpg";
import Profile from "../../assets/profile/pr6.jpg";
import Cover from "../../assets/Posts/cover2.jpg"
import "./ProfileCard.css";
import { Link } from "react-router-dom";

function ProfileCard() {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" style={{height:"15rem"}}/>
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Nick Jonas</span>
        <span>Data Engineer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6748</span>
            <span>following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>6</span>
            <span>followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>5</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {/* {ProfilePage ? "" : <span>My Profile</span>} */}
      {/* <span>My Profile</span> */}
      <span>
        <Link to="/profile" style={{textDecoration:"none"}}> My Profile </Link>
      </span>
    </div>
  );
}

export default ProfileCard;
