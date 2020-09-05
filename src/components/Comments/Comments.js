import React, { useState} from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';
import fakeData from '../../fakeData/fakeData';
import './Comments.css';



const Comments = () => {
    const first10 = fakeData.slice(0, 10);
    
    const [comments, setComments] = useState(first10);
    
    return (
        <div>
            <h1 className="comment">All Comments</h1>
            {
                comments.map(comment => <CommentDetail comment={comment}></CommentDetail>)
            }
        </div>
    );
};

export default Comments;