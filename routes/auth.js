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
          console.log("Now lets try to generate a token for:", newUser)
          console.log("Usermail is: ",newUser.email)


          var token = Token.create({ 
            _userId: newUser._id, 
            token: crypto.randomBytes(16).toString('hex') 
          })

          token.then(()=>{
            console.log("TOKEN GESPEICHERT, WEITER GEHTS")
            var transporter = nodemailer.createTransport({
              service: 'gmail', 
              auth: { 
                user: process.env.MAILER_GOOGLEMAIL, 
                pass: process.env.MAILER_PASSWORD 
              } 
            })
            const mailOptions = { 
              from: 'no-reply@plancomm.com', 
              to: 'plancomm.noreply@gmail.com', 
              subject: 'pLanComm Verification Token', 
              html: 'Hello,\n\n' + 'Please verify your pLanComm account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' 
            }
            transporter.sendMail(mailOptions, function (err) {
              if (err) { return res.status(500).json({ message: err.message }); }
              res.status(200).json('A verification email has been sent to ' + newUser.email + '.');
            })
          })
          // passport login
            req.login(newUser, err => {
              if (err) res.status(500).json(err)
              //else res.json(newUser)
              newUser = req.session.user
          })
        })
    })
    .catch(err => {
      console.log("SOME BLALALALA: ",JSON.stringify(err.stack))
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
          return res.status(401).json({message: 'Your account has not been verified'});
        }
        //token stuff
        res.send({token: generateToken(user), user: json(user)})
        res.json(user)
      })
    })(req, res, next)
  }),

  router.post('/confirmation', (req, res, next) => {
    var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);

    // Find a matching token
    Token.findOne({ token: req.body.token }, function (err, token) {
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        // If token found, find a matching user
        User.findOne({ _id: token._userId, email: req.body.email }, function (err, user) {
            if (!user) return res.status(400).json({ message: 'We were unable to find a user for this token.' });
            if (user.isVerified) return res.status(400).json({ message: 'This user has already been verified.' });

            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send("The account has been verified. Please log in.");
            });
        });
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
