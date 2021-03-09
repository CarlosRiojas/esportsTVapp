import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useContextInfo } from '../../hooks/context'
import { signupFunc, loginFunc } from '../../services/auth';
import { useForm, Controller } from 'react-hook-form'
//Material UI STYLES
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Material UI index
import TextField from '@material-ui/core/TextField';
import NoSsr from '@material-ui/core/NoSsr';// on demand rendering
//Material UI Form imports
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover';
import SignUpCard from './SignUpCard'
import { FormControl } from '@material-ui/core';
//external component


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 1),
    height: 900
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: `${theme.spacing(5)}px auto`,
    height: theme.spacing(50),
    width: theme.spacing(50),
    backgroundColor: '#52796F',
    padding: theme.spacing(1),
    borderRadius: '30px',
    boxShadow: '0px 20px 7px '
  },
  paperSignup: {
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(50),
    width: theme.spacing(50),
    backgroundColor: '#52796F',
    padding: theme.spacing(1),

  },

  internalForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  button: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'

  },
  logo: {
    height: theme.spacing(9),
    padding: theme.spacing(3)
  },
  signup: {
    color: 'white'
  },
  SignupForm: {
    display: 'flex',
    flexDirection: 'column',
    justifycontent: 'Center',
    paddingTop: '45px'

  },
  Popper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '40px',
  }
}));



function Home({ history }) {
  const { register, handleSubmit, control } = useForm()
  const { login } = useContextInfo();
  const classes = useStyles()
  const { user } = useContextInfo()
  //popover component hook state change
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [error, setError] = useState(null)


  const handleClose = () => {
    setAnchorEl(null);
  };

  async function data(userInput) {
    try {
      console.log(userInput)
      const { data } = await loginFunc(userInput)
      login(data)
      history.push('/maindash')
    } catch (e) {
      console.dir(e.response.data.message)
      setError(e.response.data.message)
    }
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  console.log(data())
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //changes the state when something touches the component
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // }



  return (
    <div className={classes.root} style={{
      backgroundImage: `url(${"../images/esportbackground.jpg"})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundOpacity: '30%'
    }}>

      <img className={classes.logo} src="images/vantagelogo.png" />

      <NoSsr>
        <Grid container
          direction='column'
          justifyContent='center'
          alignItems='center'

        >
          <Paper className={classes.paper}>
            <h1 style={{
              color: "white"
            }}>WELCOME !</h1>
            <Grid className={classes.formCont} container spacing={3}
              direction='column'>
              <Grid item md={12}>
                <form onSubmit={handleSubmit(data => console.log(data))}>
                  <TextField
                    className={classes.signup}
                    variant='outlined'
                    margin='normal'
                    ref={register}
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
                    variant='outlined'
                    margin='normal'
                    ref={register}
                    required
                    id='Password'
                    label='Password'
                    name='password'
                    autoComplete='password'
                    autoFocus
                  />

                  <Grid className={classes.button}>
                    <Grid item xs={4}>
                      <Button type='submit' variant="contained">Sign in</Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button className={classes.signup} variant="outlined" onClick={handleClick}>
                        Sign up</Button>
                      <Popover classes={{ Popper: classes.Popper }}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'center',
                          horizontal: 'right',
                        }}
                      >
                        <SignUpCard />
                      </Popover>
                    </Grid>
                  </Grid>
                </form>


              </Grid>
            </Grid>


          </Paper>
        </Grid>
      </NoSsr>
    </div >

  )
}
export default Home;
