import React from 'react';
import './CommentDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4),
      width:130,
      height: 130,
    },
  },
}));


const CommentDetail = (props) => {
    const classes = useStyles();

    
    const {id, name, phone, body, img } = props.comment
    return (
        <div className="user">
           <div className={classes.root}>
               <Avatar alt="" src={img}/>
           </div> 
           <div  className="user-name">
                <h4>{id}</h4>
                <h1>{name}</h1>
                <p><small>{phone}</small></p>
                <p><small>{body}</small></p>
                
            </div>
        </div>
           
        
    );
};

export default CommentDetail;