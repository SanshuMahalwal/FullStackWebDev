const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const {getSignupForm, performSignup, getLoginForm, performLogin, performLogout} = require('../controllers/auth')

router.get('/register', getSignupForm)

router.post('/register', performSignup)

router.get('/login', getLoginForm)

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), performLogin)

router.get('/logout', performLogout)

module.exports = router;