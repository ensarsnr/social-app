import React, { useState, useEffect } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { Card } from "./ui/card";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (!postId) {
      console.error("Geçersiz postId:", postId);
      return;
    }

    const fetchComments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts", postId, "comments"));
        const commentsArray = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            text: data.text || "Metin bulunamadı",
            username: data.username || "Bilinmiyor",
            createdAt: data.createdAt?.toDate() || new Date(),
          };
        });
        // En yeni yorumlar üstte görünsün
        setComments(commentsArray.sort((a, b) => b.createdAt - a.createdAt));
      } catch (error) {
        console.error("Yorumlar alınırken hata oluştu:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postId) {
      console.error("Geçersiz postId:", postId);
      return;
    }

    if (!commentText.trim()) {
      console.error("Yorum metni boş olamaz");
      return;
    }

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error("Kullanıcı oturumu açık değil");
        return;
      }

      const newComment = {
        text: commentText.trim(),
        username: user.email,
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "posts", postId, "comments"), newComment);

      setComments((prev) => [{
        id: docRef.id,
        ...newComment
      }, ...prev]);
      
      setCommentText("");
    } catch (error) {
      console.error("Yorum eklenirken hata oluştu:", error);
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-4 p-4">
      {comments.map((comment) => (
        <Card key={comment.id} className="p-3">
          <div className="flex items-start gap-3">
            <img
              src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${comment.username}`}
              alt={comment.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="font-semibold">{comment.username}</div>
                <div className="text-xs text-gray-500">
                  {formatDate(comment.createdAt)}
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
            </div>
          </div>
        </Card>
      ))}
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Yorumunuzu yazın..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="min-h-[60px]"
        />
        <Button 
          type="submit" 
          size="icon"
          disabled={!commentText.trim()}
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default Comments;
