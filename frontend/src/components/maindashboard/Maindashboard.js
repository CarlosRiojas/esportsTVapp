import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchHub from '../maindashboard/SearchHub';

//side menu component import
import SideMenu from '../maindashboard/SideMenu';

//menu imports
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  logout: {
    display: 'flex',
    flex:1,
    justifyContent: 'flex-end'
  },
  logo: {
    display: 'flex',
    flex:1,
    justifyContent: 'flex-start',
    maxWidth:'18%',
    minWidth: '12%'
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
}));

//sideMenu navigation props
const navLinks = [
  { title: `about us`, path: `/about-us` },
  { title: `product`, path: `/product` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` }
];

const MainDash= ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#354F52'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SideMenu navLinks={navLinks}/>
          </IconButton>
            <img className={classes.logo} src="images/vantagelogo.png" />
             <Button className={classes.logout} color="inherit">My profile</Button>
             <Button className={classes.myProfile} color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
     
          <SearchHub />
      
    </div>
  );
}

export default MainDash
