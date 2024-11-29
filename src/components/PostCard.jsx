import React, { useState } from "react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Comments from "./Comments";

const PostCard = ({ postId, username, content, id }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className="mb-4 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Link to={`/profile/${username}`}>
            <img
              src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${username}.com`}
              className="w-10 h-10 rounded-full object-cover hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link to={`/profile/${username}`}>
            <div className="font-semibold hover:text-primary transition-colors">{username}</div>
          </Link>
        </div>

        <p className="text-gray-700 mb-4">{content}</p>

        <div className="flex items-center gap-4 text-gray-500">
          <Button variant="ghost" size="sm" className="gap-2 hover:bg-red-400 hover:text-white hover:rounded-full rounded-full">
            <Heart className="h-5 w-5" />
            Beğeniler
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 hover:bg-gray-300 hover:rounded-full rounded-full"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="h-5 w-5" />
            Yorumlar
          </Button>
          <Button className="hover:bg-blue-300 hover:rounded-full rounded-full" variant="ghost" size="sm">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {showComments && <Comments postId={postId} />}
    </Card>
  );
};

export default PostCard;
