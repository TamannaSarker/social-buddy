import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './BuddyDetail.css'





const BuddyDetail = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/comment");
  }

const { buddyId } = useParams();


  const [buddy, setBuddy] = useState({});
  useEffect(() => {
    const url = `http://jsonplaceholder.typicode.com/posts/${buddyId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setBuddy(data));


  }, [])
  return (
    <div className="buddy-detail">


      <h1>{buddy.userId}</h1>
      <h2>{buddy.id}</h2>
      <p className="bold">{buddy.title}</p>
      <p className="bold">{buddy.body}</p>
      <Button onClick={handleClick} variant="contained" color="primary">
        Comment
      </Button>



    </div>
  );
};

export default BuddyDetail;