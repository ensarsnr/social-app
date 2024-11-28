import React from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Index = () => {
    return (
<div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <PostList />
      </main>
    </div>    )
}

export default Index;