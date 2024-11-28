import React, { useState } from "react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Comments from "./Comments";


const PostCard = () => {
    const [showComments, setShowComments] = useState(false);


return (
    <Card className="mb-4 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          {/* <Link to={`/profile/${username}`}> */}
          <Link to={'/'}>
            <img
            //   src={avatar}
            //   alt={username}
              className="w-10 h-10 rounded-full object-cover hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link to={'/'}>
            <div className="font-semibold hover:text-primary transition-colors">Deneme İsim</div>
          </Link>
        </div>
        
        <p className="text-gray-700 mb-4">content</p>
        
        <div className="flex items-center gap-4 text-gray-500">
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-5 w-5" />
                Beğeniler
          </Button>
          <Button variant="ghost" size="sm" className="gap-2"
          onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="h-5 w-5" />
                YOrum adeti

          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {showComments && (
        <Comments  />
      )}
    </Card>
)
}

export default PostCard;