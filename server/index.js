const express = require('express');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express();

// client ID: 695430580002-fivsvtkd8ls9f4uc2dbnhi0bv4m221vr.apps.googleusercontent.com
// client secret: SoF2WoWaLIFDDPNEf9-hOdE6

passport.use(new GoogleStrategy())


const PORT = process.env.PORT || 5000;
app.listen(PORT);