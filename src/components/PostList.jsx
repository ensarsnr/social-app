import React from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

const PostList = () => {
    return (
      <div className="max-w-2xl mx-auto">
        <CreatePost />
        <PostCard  />
      </div>
    );
  };
  
  export default PostList;