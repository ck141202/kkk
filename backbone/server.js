
const express = require("express"),
    app = express();

const fs = require('fs');



//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function(req, res) {

    var charact = [{
            distance: "20 Km",
            duration: "20 min"
        },
        {
            distance: "10 Km",
            duration: "10 min"
        },
        {
            distance: "5 Km",
            duration: "5 min"
        },
        {
            distance: "2 Km",
            duration: "2 min"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        },
        {
            distance: "1.25 Km",
            duaration: "1.53 hours"
        }
    ];


    res.render("user", {
        characters: charact
    });


});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.post('/open-node-file', (req, res) => {
    res.redirect('/server.js');
});

app.get('/node-file.js', (req, res) => {
    res.sendFile(__dirname + '/server.js');
});

app.listen(5050, function() {
    console.log("Server is running on port 5050 ");
});