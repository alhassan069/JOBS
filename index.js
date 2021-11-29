const express = require("express");

var dat = require("./mock.json");
var jobs = require("./jobs.json");

const application = express();
application.use(express.json());

application.get("/", (req,res) => {
    res.send("Welcome to Home page")
});

application.get("/cs/:city/:skill", (req,res) => {
    const compDet = jobs.filter((user) => user.city == req.params.city);
    const citySkil = compDet.filter((user) => user.skill == req.params.skill);
    res.send(citySkil);
});

application.get("/wfh", (req,res) => {
    const wfh1 = jobs.filter((user) => user.wfh == true);
    res.send(wfh1);
});

application.get("/notice", (req,res) => {
    const wfh1 = jobs.filter((user) => user.notice == 2);
    res.send(wfh1);
});

application.get("/sortRatings", (req,res) => {
    const wfh1 = jobs.filter((user) => user.notice == 2);
    const sortRate = jobs.sort(function(a, b){
        return b.rating - a.rating;
    });
    res.send(sortRate);
});

application.get("/details/:name", (req,res) => {
    const compDet = jobs.filter((user) => user.name == req.params.name);
    res.send(compDet);
});

application.get("/mostJobs", (req,res) => {
    const wfh1 = jobs.filter((user) => user.notice == 2);
    const sortRate = jobs.sort(function(a, b){
        return b.open - a.open;
    });
    res.send(sortRate[0]);
});







application.listen(2369,function(){
    console.log("listening on port 2369")
});

