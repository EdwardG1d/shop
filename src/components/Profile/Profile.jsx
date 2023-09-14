import React from "react";
import p from "./Profile.module.css";
import MyPosts from "../Profile/MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div className={p.content}>
      <ProfileInfo />

      <MyPosts />
    </div>
  );
};

export default Profile;
