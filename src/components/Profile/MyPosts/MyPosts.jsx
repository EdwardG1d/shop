import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={mp.postsBlock}>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={mp.posts}></div>

      {postsElements}
    </div>
  );
};

export default MyPosts;
