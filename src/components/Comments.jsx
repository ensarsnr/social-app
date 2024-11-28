import React from "react";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import { Button } from "./ui/button";


const Comments = () => {
 return (
    <div className="space-y-4 p-4">
    {/* {comments.map((comment) => ( */}
      <Card  className="p-3">
        <div className="flex items-start gap-3">
          <img
            // src={comment.avatar}
            // alt={comment.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">Username</div>
            <p className="text-sm text-gray-700">Yazı</p>
          </div>
        </div>
      </Card>
    {/* ))} */}
    
    <form  className="flex gap-2">
      <Textarea
        placeholder="Yorumunuzu yazın..."
        // value={newComment}
        // onChange={(e) => setNewComment(e.target.value)}
        className="min-h-[60px]"
      />
      <Button type="submit" size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  </div>
 )
}

export default Comments;