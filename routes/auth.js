const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Token = require('../models/Token');

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
        .then(newUser => {
          //create and save verification token
          var token = Token.create({ 
            _userId: newUser._id, 
            token: crypto.randomBytes(16).toString('hex')
          });

          let mailto = newUser.email;

          token.then((newToken)=>{
            var transporter = nodemailer.createTransport({
              service: 'gmail', 
              auth: { 
                user: process.env.MAILER_GOOGLEMAIL, 
                pass: process.env.MAILER_PASSWORD 
              } 
            })
            const mailOptions = { 
              from: process.env.MAILER_GOOGLEMAIL,
              to: mailto,
              subject: 'pLanComm Verification Token', 
              text: 'Hello,\n\n' + 'Please verify your pLanComm account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/api\/auth\/confirmation\/' + newToken.token + '\n' 
            }
            transporter.sendMail(mailOptions, function (err) {
              if (err) { return res.status(500).json({ message: err.message }); }
              res.status(200).json('A verification email has been sent to ' + newUser.email + '.');
            })

          })
          //signup route should not automatically set session for newUser until the account has been verified
          /* passport login
              req.login(newUser, err => {
              if (err) res.status(500).json(err)
              else res.json(newUser)
              newUser = req.session.user
            })*/
        })
    })
    .catch(err => {
      console.log("SOME Stack here: ",JSON.stringify(err.stack))
      res.status(500).json({message: 'some Error here: ' + err})
      })
    })
  }),




  router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Error while authenticating' })
      }
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }
      req.login(user, err => {
        if (err) res.status(500).json(err)
        if (!user.isVerified) {
          return res.status(401).json({message: 'Your account has not been verified yet. Please check your emails for verification link'});
        }
        res.json(user)
        user = req.session.user
      })
    })(req, res, next)
  }),


  router.get('/confirmation/:token', (req, res, next) => {
    Token.findOne({ token: req.params.token }, function (err, token) {
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        User.findOne({ _id: token._userId}, function (err, user) {
            if (!user) return res.status(400).json('We were unable to find any user for this not verified token.');
            if (user.isVerified) return res.status(400).json('This user has already been verified.' );
            
            user.isVerified = true;
            user.save(function (err) {
                if (err) { 
                    return res.status(500).send({ msg: err.message }); 
                  }
              return res.redirect('/')
            })
        })
    })
  }),

  router.get(
    '/google',
    passport.authenticate('google', { 
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'] 
      })
  ),

  router.get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login',
      successRedirect: '/',
    })
  );

  router.get(
    '/github',
    passport.authenticate('github',{
      scope: ['user:email']
    })
  );

  router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
    res.redirect('/');
  });



  router.get('/loggedin', (req, res) => {
    res.json(req.user)
  })

  router.delete('/logout', (req, res) => {
    // passport logout function
    req.logout()
    res.json({ message: 'Successful logout' })
  })


module.exports = router
