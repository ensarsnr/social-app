import React from "react";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ImagePlus, Send } from "lucide-react";


const CreatePost =  () => {
    return(
        <Card className="p-4 mb-6 animate-fade-in">
      <form  className="space-y-4">
        <Textarea
          placeholder="Ne düşünüyorsun?"
          className="min-h-[100px]"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
            >
              <ImagePlus className="h-4 w-4" />
            </Button>
          </div>
          <Button type="submit" className="gap-2">
            <Send className="h-4 w-4" /> Paylaş
          </Button>
        </div>
      </form>
    </Card>
    )
}

export default CreatePost;