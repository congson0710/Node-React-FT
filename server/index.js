const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/key');
const app = express();

require('./services/passport');
require('./models/Users');

require('./routes/authRoutes')(app);

mongoose.connect(key.myMongoDB);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
