const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');
const port = 5000;
const homepage = require('./routes/homepage');


var mongoUrl = 'mongodb+srv://surendra:surendra14@cluster0-m7gbl.mongodb.net/blood?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo is connected'))
    .catch(err => console.log(err))

const app = express();

// middleware configuration
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
// ejs middleware
app.set('view engine', 'ejs');

//static file middleware

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(path.join(__dirname, '/public')))
// express-session 
app.use(session({
    resave: true, saveUninitialized: true,
    secret: 'mysecreat',
}))

// middleware for mongoose 



// connect-flash middleware
app.use(flash())
app.use(homepage)


// server configuration
app.listen(port, () => {
    console.log(`Server is connected at port ${port}`);
})