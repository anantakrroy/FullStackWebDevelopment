const express = require('express');

var app = express();

var nameList = ["Ananya", "Anamika", "Nisha", "Nishant", "Nishank", "Ansal", "Gopi", "Arkesh", "Mukesh", "Mayank", "Rana", "Sadab", "Ananta", "Archana", "Amit", "Harish", "Saurav", "Bipul", "Divya", "Faruk", "Gopi", "Ganesh", "Sai", "Nayan", "Rahul", "Rohit", "Virat", "Sachin", "Kuldeep", "Sunil", "Deep", "Piyush", "Pawan", "Niladri", "Indresh", "John", "Zaheer", "Yuvraj"];

app.get('/', function (req, res) {
    res.send('Find names by characters (case-sensitive)....');
});

app.get('/find', function (req, res) {
    var name = req.query.name;

    var result = nameList.filter(function (n) {
        return n.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });

    res.send(result);
});

app.listen(8080);