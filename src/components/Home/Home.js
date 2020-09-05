import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import './Home.css'


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
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