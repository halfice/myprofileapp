import React from 'react';

import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './headerimage.png';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { style } from '@material-ui/system';
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CustomLinks } from './CustomLinks';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import splogo from './splogo.png'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Slider from '@material-ui/core/Slider';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import machlinelogo from './machlinelogo.jpg'
import nintexlogo from './nintexlogo.png'

import nodelogo from './nodelogo.png'
import flowlogo from './flowlogo.png'
import bprocess from './bprocess.png'
import pythonlogo from './pythonlogo.jpg'


import { Cards } from './Cards';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "Item One",
      ShowSharePoint: true,
      ShowDataScie: false,
      ShowReact: false,
      Mysplogo:splogo
    };
    AOS.init();
  }




  componentWillReceiveProps() {
    this.setState({ value: "Item One" });
    AOS.refresh();
  }

  handleChange() {

  }
  showsp() {
    alert("1");
    this.setState({
      ShowSharePoint: true,
      ShowDataScie: false,
      ShowReact: false
    });
  }

  showds() {
    alert("1");
    this.setState({
      ShowSharePoint: false,
      ShowDataScie: true,
      ShowReact: false
    });
  }

  showsps() {
    alert("1");
    this.setState({
      ShowSharePoint: false,
      ShowDataScie: false,
      ShowReact: true,
    });
  }
  render() {
    return (
      <div>
        <Container fixed>

          <Grid container>
            <Grid item xs={4}>
              <div data-aos="fade-up">
                <img src={logo} alt="Logo" />;

        </div>
            </Grid>
            <Grid item xs={8}>
              <div data-aos="fade-down">
                <h3>Welcome to Abdul Aziz Farooqi - World</h3>
                <Typography>
                  The API documentation of the Grid React component. Learn more about the props and the CSS customization points.

              </Typography>
                <Typography>
                  The API documentation of the Grid React component. Learn more about the props and the CSS customization points.
                  The API documentation of the Grid React component. Learn more about the props and the CSS customization points.
                  The API documentation of the Grid React component. Learn more about the props and the CSS customization points. The API documentation of the Grid React component. Learn more about the props and the CSS customization points.

              </Typography>

              </div>
            </Grid>
          </Grid>

          <Divider />

          <div data-aos="flip-left">
            <Typography variant="body2" color="textSecondary" align="center">
              {'Navigate to my '}
              <Link color="inherit" href="https://abdulazizfarooqi.wordpress.com/">
                Blogs
      </Link>
              {' stream.'}
            </Typography>


          </div>

          <Divider />
          <div data-aos="fade-right">

            <AppBar position="static">

              <CustomLinks />

            </AppBar>

<Divider />
</div>
 <div data-aos="fade-left">
  <br></br>
            <Grid container>    
<Grid item xs={4}>
             <Paper className={style.paper}>
             <Cards imagelogo={splogo}  headingofcard="SharePoint"/>
             </Paper>
           </Grid>
           <Grid item xs={4}>
             <Paper className={style.paper}>
             <Cards imagelogo={nintexlogo}  headingofcard="Machine Learning"/>
             </Paper>
           </Grid>

           <Grid item xs={4}>
             <Paper className={style.paper}>
             <Cards imagelogo={machlinelogo}  headingofcard="MS Flow / Nintex / K2 / SP "/>
             </Paper>
           </Grid>


          
           <Grid item xs={4}>
             <Paper className={style.paper}>
             <Cards imagelogo={nodelogo}  headingofcard="Python"/>
             </Paper>
           </Grid>

           <Grid item xs={4}>
             <Paper className={style.paper}>
             <Cards imagelogo={flowlogo}  headingofcard="Neural Netoworks"/>
             </Paper>
           </Grid>

           <Grid item xs={4}>
             <Paper className={style.paper}>
             <Cards imagelogo={bprocess}  headingofcard="Node/React/Angular"/>
             </Paper>
           </Grid>
           </Grid>

          </div>
        


          <Divider />

          <div data-aos="fade-up-left">
        
       
          <Paper className={style.paper}>
             <h3>How do you visit internet?</h3>
             <Slider
          defaultValue={30}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        
        <Switch checked={true} value="checkedA" />
             </Paper>

      </div>


      <div data-aos="fade-right">
         
         <Chip label="Basic Chip" className={style.chip} />
         <Chip
       avatar={<Avatar>MB</Avatar>}
       label="Clickable Chip"
       className={style.chip}
     />
      <Chip
       avatar={<Avatar>MB</Avatar>}
       label="Clickable Chip"
       className={style.chip}
     />
      <Chip
       avatar={<Avatar>MB</Avatar>}
       label="Clickable Chip"
       className={style.chip}
     />
      <Chip
       avatar={<Avatar>MB</Avatar>}
       label="Clickable Chip"
       className={style.chip}
     />
      <Chip
       avatar={<Avatar>MB</Avatar>}
       label="Clickable Chip"
       className={style.chip}
     />
      <Chip
       avatar={<Avatar>MB</Avatar>}
       label="Clickable Chip"
       className={style.chip}
     />

<Paper className={style.paper}>
            <Cards imagelogo={pythonlogo}  headingofcard="Node/React/Angular"/>
            </Paper>
         </div>
        </Container>

      



      </div >

     


    );
  }
}

export default App;
