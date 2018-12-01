var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Data = [];

if (fs.existsSync("programming3/data.json")) {
    var Data = require("./programming3/data.json");
}

app.use(express.static("programming3"));
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.get('/statistica', function (req, res) {
    res.redirect('statistica.html');
});
server.listen(4444);
io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        Data.push(data);
        fs.writeFile('programming3/data.json', JSON.stringify(Data));
    })

    socket.on("get statistica", function () {
        fs.readFile('programming3/data.json', "utf8", function(err, statisticsFromFile) {
            socket.emit("send statistica",statisticsFromFile);    
        });
        
    })
    

});