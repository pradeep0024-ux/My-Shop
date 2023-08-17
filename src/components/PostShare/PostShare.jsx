import React from "react";
import Profile from "../../assets/profile/pr6.jpg";
import { useState, useRef } from "react";
import "./PostShare.css";
import { BsFillImageFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({ image: URL.createObjectURL(img) });
    }
  };

  return (
    <div className="PostShare">
      <img src={Profile} alt="" />
      <div>
        <input type="text" placeholder="Start a Post" />
        <div className="ShareOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <BsFillImageFill/>
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <FaVideo />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <HiOutlineLocationMarker />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <FaCalendar />
            Schedule
          </div>
          <button className="Button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <RiCloseFill onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
