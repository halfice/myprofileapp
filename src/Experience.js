import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { style } from '@material-ui/system';
import splogo from './splogo.png'



import './App.css';
const useStyles = makeStyles(
    createStyles({
        card: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    }),
);


export class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          imagelogo: this.props.imagelogo,
          headingofcard:this.props.headingofcard,
          projectList:this.props.projectlist,
        };
      }
    

    render() {
        return (
            <Card className={style.card}>
                <CardActionArea>
                    <CardMedia
                        className={style.media}
                        title="Contemplative Reptile"
                    />
                      <img src={this.props.imagelogo} alt="Logo"  />;
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.headingofcard}
                  </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.projectList}
                  </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                </Button>
                  
                </CardActions>
            </Card>
            
        );

    }
};
