const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

// client ID: 305321020334-t5l9g9fftsnrovkae2ncrgdcqiklua6m.apps.googleusercontent.com
// client secret: 5BerLnBhxAImHQItI4_rbsI2





const PORT = process.env.PORT || 5000;
app.listen(PORT);