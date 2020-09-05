import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import './Home.css'


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "http://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      
    <h1 className="page">Welcome to my Page</h1>
      {
        posts.map(post => <Posts post={post}></Posts>)
      }

    </div>
  );
};

export default Home;