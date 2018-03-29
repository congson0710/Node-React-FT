const keys = require('../config/key');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('user');
const passport = require('passport');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleID: profile.id }).save();
    }
  )
);
