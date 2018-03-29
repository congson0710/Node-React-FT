const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/key');

require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

mongoose.connect(key.myMongoDB);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
