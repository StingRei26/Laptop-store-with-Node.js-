// NODE CORE PAGAGES
// to read the file 
const fs = require('fs');
// to create an http we server 
const http = require('http'); 

// to pull the data file from the data folder 
const json = fs.readFileSync(`${__dirname}/data/data.json` , 'utf-8'); 

// to convert JSON into a js object which we can then parse 
const laptopData = JSON.parse(json);
console.log(laptopData);

// server request 
const server = http.createServer((req, res) =>{
    res.writeHead(404, { 'Content-type' : 'text/html'});
    res.end('This is the response');

});
//Reg function
// const server = http.createServer(function (req, res){
// console.log('Someone did access the server!');
// });


// listening to the request and assigning a local host
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now'); 
});
// Reg function
// server.listen(1337, '127.0.0.1', function (){
//     console.log('Listening for requests now'); 
// });

