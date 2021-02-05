import React,{useState} from 'react';
import {signupFunc,loginFunc} from '../../services/auth';
import useContextInfo from '../../hooks/context';
//Material UI STYLES
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Material UI index
//Material UI Form imports
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/button';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,  
      overflow: 'hidden',
      padding: theme.spacing(0, 1),
      height:900,
    },
    paperSignup:{
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:theme.spacing(50),
      width:theme.spacing(50),
      backgroundColor: '#52796F',
       padding: theme.spacing(1),
    },
    SignupForm:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'Center',
      paddingTop:'45px'
      
    },
    signup:{
        color:'white'
    }
  }));
  


const SignUpCard = ({history}) =>{
    const classes=useStyles()
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
     const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
           

    const handleEmailChange = (event) => {
       console.log  (setEmail(event.target.value));
      
      };
       const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
       }


return ( 

   <Paper className={classes.paperSignup}>
       <h1 style={{
              color:"white"
            }}>Sign Up!</h1>
    <Grid className={classes.SignupForm} container spacing={5}
                      direction = 'column' >
    <Grid item md={12}>
      <FormControl variant="filled">
                <         InputLabel htmlFor="component-filled">Email</InputLabel>
                          <FilledInput style={{backgroundColor:'white'}} id="component-filled" value={email} onChange={handleEmailChange} />
                      
       
       </FormControl>
      </Grid>
      <Grid item md={12}>
      <FormControl variant="filled">
                          <InputLabel htmlFor="component-filled">Password</InputLabel>
                          <FilledInput style={{backgroundColor:'white'}} id="component-filled" value={password} onChange={handlePasswordChange} />
                      </FormControl>
      </Grid>
      <Grid item xs={12}>
                    <Button className={classes.signup} variant="outlined" onClick = {handleClick}>
                      Submit</Button>
            </Grid>
  </Grid>
</Paper>
)
}
 export default SignUpCard