const passport = require('passport');
const keys = require('../config/key');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('user');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User()
        .findOne({ googleID: profile.id })
        .then(existingUser => {
          if (existingUser) {
            //skip
          } else {
            new User({ googleID: profile.id }).save();
          }
        });
    }
  )
);
