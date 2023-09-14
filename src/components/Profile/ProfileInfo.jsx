import React from "react";
import p from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={p}>
      <img
        className="content_img"
        src="https://lifefalcon.com/wp-content/uploads/2020/03/indoor-sports-2048x1024.jpg"
        alt="logo2"
        width="100%"
      />
      <div className={p.descriptionBlock}>Avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
