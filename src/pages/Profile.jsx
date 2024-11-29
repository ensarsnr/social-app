import { Card } from "../components/ui/card";
import React from "react";

const Profile = () => {
return (
    <div className="container mx-auto px-4 pt-24 pb-8">
    <Card className="p-6 mb-8">
      <div className="flex items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">John Doe</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex gap-4 mt-4">
            <div>
              <span className="font-bold">250</span>
              <span className="text-gray-600 ml-1">posts</span>
            </div>
            <div>
              <span className="font-bold">10.5k</span>
              <span className="text-gray-600 ml-1">followers</span>
            </div>
            <div>
              <span className="font-bold">500</span>
              <span className="text-gray-600 ml-1">following</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
)
}

export default Profile;