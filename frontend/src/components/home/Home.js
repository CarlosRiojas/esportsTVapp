import React from 'react';
//Material UI STYLES
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Material UI index
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';
import NoSsr from '@material-ui/core/NoSsr';// on demand rendering
//Material UI Form imports
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


//external component


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 1),
    height:900
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: `${theme.spacing(5)}px auto`,
    height:theme.spacing(50),
    width:theme.spacing(50),
    backgroundColor: '#52796F',
     padding: theme.spacing(1),
     borderRadius:'30px'
  },
  internalForm:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    
  },
  button:{
    padding: theme.spacing(2),
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center'

  },
  logo:{
    height:theme.spacing(10),
    padding:theme.spacing(3)
  },
  signup:{
    color:'white'
  }
}));



function Home() {
    const classes = useStyles()
    const [email, setEmail] = React.useState('Composed TextField');
    const [password, setPassword] = React.useState('Composed TextField');
//changes the state when something touches the component
    const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={classes.root}  style={{
      backgroundImage: `url(${"../images/esportbackground.jpg"})`,
      backgroundSize: 'cover' ,
      backgroundRepeat: 'no-repeat',
      backgroundOpacity:'30%'}}>

            <img className={classes.logo} src="images/vantagelogo.png" />

      <NoSsr>
            <Grid container
              direction= 'column'
              justifyContent = 'center'
              alignItems='center'

          >
            <Paper className={classes.paper}>
            <h1 style={{
              color:"white"
            }}>WELCOME !</h1>
            <Grid className={classes.internalForm} container spacing={3}
            direction = 'column'>
              <Grid item md={12}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="component-filled">Email</InputLabel>
                  <FilledInput id="component-filled" style={{backgroundColor : "white"}}value={email} onChange={handleChange}/>

                </FormControl>
              </Grid>
              <Grid item md={12}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="component-filled">Password</InputLabel>
                  <FilledInput id="component-filled" style={{backgroundColor: "white"}} value={password} onChange={handleChange}/>
                </FormControl>
              </Grid>
              <Grid className={classes.button}>
                  <Grid item xs={4}>
                    <Button variant="contained">Sign in</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button className={classes.signup}variant="outlined">Sign up</Button>
                  </Grid>
              </Grid>
            </Grid>
           </Paper>
          </Grid>
         </NoSsr>
       </div>

  );
}

export default Home;
