//console.log("Gayane Martirosyan");
/*
var os = require("os");
var message = "The platform is ";

function main(){
   console.log(message + os.platform());
}
main();

function ghg(){
    console.log(os.platform());
}

ghg();
*/
/*
var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});

app.get("/Gayane", function(req, res){
    res.send("Gayane");
 });

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
*/

var express = require("express");

var app = express();

app.use(express.static("your_project_folder_name"));


app.get("/", function(req, res){
    res.send("<h1>Hello </h1>");
 });

 app.get("/name/:name", function(req, res){
    var name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });
 app.listen(8888, function(){
    console.log("Example is running on port 8888");
 });
 