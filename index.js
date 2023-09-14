const express = require("express");
   
const app = express();
   
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.get("/in",urlencodedParser, function (request, response) {
    response.end('GET, Hello world');
})
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send('POST, Hello world');
});
   
app.listen(3000, ()=>console.log("Сервер запущен..."));