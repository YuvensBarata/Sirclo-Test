var mysql = require("mysql");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extender: false }));

var fs = require("fs");

var cors = require("cors");
app.use(cors());

var connection = mysql.createConnection
    (
    {
        host: "localhost",
        port: 3307,
        database: "sirclo_test",
        user: "root",
        password: "usbw"
    }
    );

app.get("/home", function (req, res) {
    connection.query("SELECT * FROM weight", function (err, rows) {
        if (err) throw err;
        res.json(rows);
    })
})

app.get("/view/:id", function (req, res) {
    connection.query("SELECT * FROM weight where ?",
        {
            id : req.params.id
        },
        function (err, rows) {
            if (err) throw err;
            res.json(rows);
        })
})

app.post("/add", function (req, res) {
    connection.query("INSERT weight SET ?",
        {
            date: req.body.new_date,
            max: req.body.new_max,
            min: req.body.new_min
        })

    let redirect = "true";
    res.json(redirect);
})

app.post('/edit/:id', function (req, res) {

    connection.query("update weight set ? where ?",
        [
            {
                date: req.body.new_date,
                max: req.body.new_max,
                min: req.body.new_min
            }
            ,
            {
                id: req.params.id,
            }
        ]);

    let redirect = "true"
    res.json(redirect);
})

app.get("/delete/:id", function (req, res) {
    connection.query("delete from weight where ?",
        {
            id: req.params.id
        });

    let redirect = "true"
    res.json(redirect);
});

app.listen(3001);