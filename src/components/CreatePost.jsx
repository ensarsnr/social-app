import React, { useState } from "react";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

const CreatePost = ({ onPostSubmit }) => {
  const [postContent, setPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; 
    if (postContent.trim()) {
      try {
        setIsSubmitting(true);
        const auth = getAuth();
        const user = auth.currentUser;

        const docRef = await addDoc(collection(db, "posts"), {
          content: postContent,
          username: user.email,
          createdAt: new Date(),
        });

        console.log("Post ekleme başarılı, ID:", docRef.id);
        onPostSubmit(postContent);
        setPostContent(""); 
      } catch (e) {
        console.error("Hata:", e);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="p-4 mb-6 animate-fade-in">
      <form onSubmit={handlePostSubmit} className="space-y-4">
        <Textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Ne düşünüyorsun?"
          className="min-h-[100px]"
        />
        <div className="flex items-center justify-between">
          <Button type="submit" className="bg-purple-200 gap-2" disabled={isSubmitting}>
            <Send className="h-4 w-4" /> {isSubmitting ? "Paylaşılıyor..." : "Paylaş"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreatePost;
