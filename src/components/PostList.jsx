import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { getDocs, collection, addDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth"; 

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id, 
      }));
      setPosts(postsArray); 
    };

    fetchPosts();
  }, []);

  const handlePostSubmit = async (content) => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
  
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const username = userData.username || user.email.split('@')[0]; 

          const docRef = await addDoc(collection(db, "posts"), {
            username,
            content,
            createdAt: new Date(),
          });
  
          const newPost = {
            username,
            content,
            uid: docRef.id, 
            createdAt: new Date(),
          };
  
          setPosts([newPost, ...posts]); 
        } else {
          console.error("Kullanıcı verisi bulunamadı");
        }
      } catch (error) {
        console.error("Post eklenirken hata:", error);
      }
    } else {
      console.error("Kullanıcı oturumu açık değil");
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost onPostSubmit={handlePostSubmit} />
      {posts.map((post) => (
        <PostCard
          key={post.uid}
          username={post.username}
          postId={post.uid}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostList;
