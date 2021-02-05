const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

//Auth controller functions
const {
  signupProcessUser,
  loginProcess,
  logout,
  profileView,
  editProfile,
  deleteProfile,
  currentUser
} = require('../controllers/auth')


router.post('/signup', signupProcessUser);

router.post('/login',loginProcess );

router.get('/logout', logout);

router.put('/EditProfile',editProfile );

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
