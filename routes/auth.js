const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.post('/signup', (req, res) => {
  const { username, password, email } = req.body

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" })
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password is too short' })
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: 'Username is already taken' })
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt)
        })
        .then(hash => {
          return User.create({
            username: username,
            password: hash,
            email: email
          })
        })
        .then(newUser => {
          // passport login
          req.login(newUser, err => {
            if (err) res.status(500).json(err)
            else res.json(newUser)
            newUser = req.session.user
          })
        })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error while authenticating' })
    }
    if (!user) {
      // no user found with username or password didn't match
      return res.status(400).json({ message: 'Invalid credentials' })
    }
    // passport req.login
    req.login(user, err => {
      if (err) res.status(500).json(err)
      res.json(user)
    })
  })(req, res, next)
})

router.get(
  '/google',
  passport.authenticate('google', { 
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'] 
    })
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000/login',
    successRedirect: 'http://localhost:3000/',
  })
);

router.get('/loggedin', (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>> user: ' + req.user)
  res.json(req.user)
})


router.delete('/logout', (req, res) => {
  // passport logout function
  req.logout()
  res.json({ message: 'Successful logout' })
})


module.exports = router
