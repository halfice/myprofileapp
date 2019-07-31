import React from 'react';

import './App.css';
import { styles } from './App.css';
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
import { spacing } from '@material-ui/system';
import nodelogo from './nodelogo.png'
import flowlogo from './flowlogo.png'
import bprocess from './bprocess.png'
import pythonlogo from './pythonlogo.jpg'
import TextField from '@material-ui/core/TextField';

import adib from './logoadib.png'
import adqcc from './qcc.png';
import ubl from './ubl.png';
import arabtec from './arabtec.png';
import jeddah from './jeddahsoft.png';

import nawras from './nawras.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';




import { Cards } from './Cards';
import { Experience } from './Experience';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "Item One",
      ShowSharePoint: true,
      ShowDataScie: false,
      ShowReact: false,
      Mysplogo: splogo
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
                <h3>Welcome to Abdul Aziz Farooqi </h3>
                <Typography>
                  <h4>SharePoint-Data Scientist Consultant</h4>
                </Typography>
                <Typography>
                  <ul>
                    <li>Automate Business Process - Workflows(K2, Nintex, SharePoint Designer Workflows</li>
                    <li>Create/Develop Web Solution Digitally</li>
                    <li>Design/Integrate Machine Learning model in existing web solutions</li>
                    <li>Hands on Agile methogoloty with end to end Change Process</li>
                  </ul>
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
              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Cards imagelogo={splogo} headingofcard="SharePoint" />
                </Paper>
              </Grid>
              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Cards imagelogo={machlinelogo} headingofcard="Machine Learning" />
                </Paper>
              </Grid>

              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Cards imagelogo={nintexlogo} headingofcard="MS Flow / Nintex / K2 / SP " />
                </Paper>
              </Grid>



              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Cards imagelogo={nodelogo} headingofcard="Python" />
                </Paper>
              </Grid>

              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Cards imagelogo={flowlogo} headingofcard="Neural Netoworks" />
                </Paper>
              </Grid>

              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Cards imagelogo={bprocess} headingofcard="Node/React/Angular" />
                </Paper>
              </Grid>
            </Grid>

          </div>



          <Divider />

          <div data-aos="fade-up-left PaddingDiv">
<div className="PaddingDiv">
          
            <Paper className={style.paper}>
            <div className="PaddingDiv">
              <h3>Would you like to have this Digital format CV? Rate it and Submit</h3>
              </div>
              <div className="PaddingDiv">
              <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
              />
              </div>
               <div className="PaddingDiv">
              <TextField
                id="standard-uncontrolled"
                label="Email Address"
                defaultValue="abc@emailaddress.com"
                className={style.textField}
                margin="normal"
              />
</div>
              <br></br>
              <div className="PaddingDiv">
              <Button variant="contained" color="secondary" className={style.button}>
                Submit
      </Button>
      </div>

            </Paper>
            </div>

          </div>


          <div data-aos="fade-right" className="PaddingDiv">
         
            <Paper className={style.paper}>
            <div className="PaddingDiv">
              <Chip label="Team Engagement" className={style.PaddingDiv} />
              <Chip
                avatar={<Avatar>TMQ</Avatar>}
                label="Team Work / Quality"
                className={style.chip}
              />
              <Chip
                avatar={<Avatar>AM</Avatar>}
                label="Agile Methogoloty"
                className={style.chip}
              />
              <Chip
                avatar={<Avatar>PM</Avatar>}
                label="Project Management"
                className={style.chip}
              />
              <Chip
                avatar={<Avatar>PM</Avatar>}
                label="Process Management"
                className={style.chip}
              />
              <Chip
                avatar={<Avatar>TVP</Avatar>}
                label="Time value Project"
                className={style.chip}
              />
              <Chip
                avatar={<Avatar>WOW</Avatar>}
                label="Wow factors"
                className={style.chip}
              />
              </div>
            </Paper>
            <Paper className={style.paper}>
              <Cards imagelogo={pythonlogo} headingofcard="Node/React/Angular" />
            </Paper>
            </div>
         

          <Divider />


          <div data-aos="fade-left">
            <br></br>
            <Grid container>
              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Experience imagelogo={arabtec} headingofcard="Arabtec" projectlist="" />
                </Paper>
              </Grid>
              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Experience imagelogo={adqcc} headingofcard="ADQCC" projectlist="" />
                </Paper>
              </Grid>

              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Experience imagelogo={adib} headingofcard="ADIB" projectlist="" />
                </Paper>
              </Grid>



              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Experience imagelogo={nawras} headingofcard="Nawras Telcom" projectlist="" />
                </Paper>
              </Grid>

              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Experience imagelogo={ubl} headingofcard="UBL" projectlist="" />
                </Paper>
              </Grid>

              <Grid item xs={4} m={3}>
                <Paper className={style.paper}>
                  <Experience imagelogo={jeddah} headingofcard="Jeddah Soft" projectlist="Web Site Automation / Proect Planning / SQL Database Migration  / Databse Management" />
                </Paper>
              </Grid>
            </Grid>

          </div>


        </Container>





      </div >




    );
  }
}

export default App;
