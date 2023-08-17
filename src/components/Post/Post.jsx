import React from "react";
import Like from "../../assets/icons/heart.png";
import Share from "../../assets/icons/share.png";
import Dislike from "../../assets/icons/dislike.png";
import Comments from "../../assets/icons/comments.png";
import "./Post.css";
function Post({ data }) {
  return (
    <div className="Post">
      <img src={data.img} alt="" />

      <div className="postReact">
        <img src={data.liked ? Like : Dislike} alt="" />
        <img src={Comments} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{fontSize:"12px",color:"var(--gray)"}}>{data.likes} Likes</span>
      <div className="detail">
        <span>
          {" "}
          <b>{data.name}</b>{" "}
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
}

export default Post;
