var express = require("express");
 
var app = express();
app.use(express.static('INNO'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/INNO/css'));
app.use('/js', express.static(__dirname + '/INNO/js'));
app.use('/img', express.static(__dirname + '/INNO/img'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/INNO/INNO.html');
});

const port = process.env.PORT || '5000';
var server = app.listen(port, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
