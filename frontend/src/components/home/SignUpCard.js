import React,{useState} from 'react';
import {signupFunc,loginFunc} from '../../services/auth';
import {useContextInfo} from '../../hooks/context';
//Material UI STYLES
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Material UI index
//Material UI Form imports
import Button from '@material-ui/core/button';
import { TextField } from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,  
      overflow: 'hidden',
      padding: theme.spacing(0, 1),
      height:900,
    },
    paperSignup:{
      display:'flex',
      flexDirection:'column',

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
      alignItems:'Center',
      paddingTop:'45px'
      
    },
    signup:{
        backgroundColor:'white'
    },
    formCont:{
      display:'flex',
      flexDirection:'column',
      alignItems:'Center',     
    }
  }));
  


const SignUpCard = ({history}) =>{
    const {register, handleSubmit, control} = useForm()
    const { signup } = useContextInfo();
    const classes=useStyles()
    // const [email, setEmail] = React.useState();
    // const [password, setPassword] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [error, setError] = useState(null)


    async function dataForm(userInput){
      try{ 
        setAnchorEl(userInput.currentTarget);
        //trae datos del userInput del formulario
        await signupFunc(userInput)
        //login despues del signup
        const {data} = await loginFunc(userInput)
        //context
        signup(data)
        //me manda a maindash despues de llevar la info al back
        history.push('/maindash')
      }catch(e){
        console.log(e)
        setError(e.response.data.message)
      }finally{

      }
      };

        // const handleEmailChange = (event) => {
        //   setEmail(event.target.value);
        //   };
        // const handlePasswordChange = (event) =>{
        //     setPassword(event.target.value);
        //   }
      



return ( 

   <Paper className={classes.paperSignup}>
       <h1 style={{
              color:"white"
            }}>Sign Up!</h1>
    <Grid  container spacing={5}
                      direction = 'column'>
      
             <form className={classes.formCont} onSubmit={handleSubmit(dataForm)}>
                <TextField  
                    className={classes.signup}
                    variant ='outlined'
                    margin = 'normal'
                    ref= {register}
                    required
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'   
                    backgroundColor='white'           
                    autoFocus
                />

             
                <TextField  
                    className={classes.signup}
                    variant ='outlined'
                    margin= 'normal'
                    ref= {register}
                    required
                    id='Password'
                    label='Password'
                    name='password'
                    autoComplete='password'         
                    autoFocus
                />

                    <Button className={classes.signup} type= 'submit' variant="outlined" >
                      Submit</Button>
           
                    
        </form>
      
    </Grid>
  </Paper>
)
}
 export default SignUpCard