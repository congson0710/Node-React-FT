const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const key = require('./config/key');

require('./models/Users');
require('./services/passport');

require('./routes/authRoutes')(app);

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [key.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(key.myMongoDB);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
