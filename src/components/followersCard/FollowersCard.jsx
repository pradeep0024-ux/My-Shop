import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";
function FollowersCard() {
  return (
    <div className="FollowersCard">
      <h5>People who Following you</h5>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
           <div>
            <img src={follower.image} alt="" className="FollowerImg"/>
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.userName}</span>
            </div>
           </div>
           <button className="Button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
