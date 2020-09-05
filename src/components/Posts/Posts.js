import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    marginBottom:40,
    marginLeft: 120,
    borderRadius:10,
    backgroundColor:'lightBlue',
    
  },
});

const Posts = (props) => {
    const {userId, id, title, body} = props.post;
    const classes = useStyles();

    return (
        
        <div>
           
            
            <Card className={classes.root}>
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {userId}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {id}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                         </Typography>
                         
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={`/buddy/${id}`}>Show details</Link>
                    </Button>
                    
                </CardActions>
            </Card>
        </div>
        
    );
};

export default Posts;