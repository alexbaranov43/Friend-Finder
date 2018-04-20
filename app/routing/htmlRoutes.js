
var path = require("path");
module.exports = function(app) {

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
    })
//leads to survey.html
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

//defaults to home.html
app.get("/:catchingeverything", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
    })
};
