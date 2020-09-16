var express = require ("express")
var app = express();

app.listen(4000,function(request,response){
    console.log("Server started at 4000")
})

app.get("/",function(request,response){
    response.send("NODE JS IS WORKING");
})