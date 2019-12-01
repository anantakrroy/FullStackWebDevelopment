const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

// user credentials on server
var user = { id: "ananta", pass: "123abc" };

// home route
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

// login validation middleware
app.post('/login', function (req, res, next) {
    if (!req.body.username || req.body.username !== user.id) {
        res.status(400).send("The user id does not match records!");
    } else if (!req.body.password || req.body.password !== user.pass) {
        res.status(400).send("The password does not match records!");
    } else {
        res.json({user: req.body.username});
    }
    return next();
});

// register validation middleware
app.post('/register', function (req, res, next) {
    if (req.body.password !== req.body.confPass) {
        res.status(400).send("The passwords do not match!");

    } else {
        res.json({user: req.body.username});
    }
    return next();
});

// final functions
app.post('/register', function (req, res) {
    console.log(req.body);
})

app.post('/login?', function (req, res) {
    console.log(req.body);
});

app.listen(9090, function(){
    console.log("Server started at port 9090....");
});