// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")

// Allow React Server calls
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Server port
var HTTP_PORT = 2727
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints
app.get("/api/cities/all", (req, res, next) => {
    var sql = "select * from cities"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "cities":rows
        })
      });
});

app.get("/api/cities/source", (req, res, next) => {
    var sql = "select id, name, insee_code, gps_lat, gps_lng from cities"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
