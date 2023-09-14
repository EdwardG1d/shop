import React from "react";
import po from "../Post/Post.module.css";

const Post = (props) => {
  return (
    <div className={po.item}>
      <img
        className={po.img}
        src="https://i09.fotocdn.net/s129/be26a3086f6e2985/public_pin_l/2926543682.jpg"
        alt="avatar"
      />
      post 1
      <div>
      <button>Like</button>
      </div>
    </div>
  );
};

export default Post;
