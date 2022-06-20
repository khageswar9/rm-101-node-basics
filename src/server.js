// install and import express
var fs = require('fs');
const cors=require('cors');
const express = require('express');
let app = express();
app.use(cors());

// Code here

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/assets/users.html', 'utf8', function(err, text){
        res.send(text);
    })
});

app.get('/users', (req, res) => {
    fs.readFile("./src/assets/user.json", function(err, data) {
        if (err) throw err;
        const users = JSON.parse(data);
        res.send(users);
    });
});
app.get('/users/:id', (req, res) => {
    const id = req.query.id;
    fs.readFile("./src/assets/user.json", function(err, data) {
        if (err) throw err;
        const users = JSON.parse(data);
        const user = users.find(user => user.id == id);
        res.send(user);
        
        });
    
    });

app.post('/users', (req, res) => {
    const user = req.body;
    fs.writeFile("./src/assets/users.json", JSON.stringify(users), err => {
     
        // Checking for errors
        if (err) throw err; 
       
        console.log("Done writing");
    }); 
});


app.listen(8000, () => {
});
// Note: Do not remove this export statement
module.exports = app;
