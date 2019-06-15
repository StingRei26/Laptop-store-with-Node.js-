// NODE CORE PAGAGES
// to read the file 
const fs = require('fs');
// to create an http we server 
const http = require('http'); 
// to filter/routing diffrent URLS on the page
const url = require('url');




// to pull the data file from the data folder 
const json = fs.readFileSync(`${__dirname}/data/data.json` , 'utf-8'); 

// to convert JSON into a js object which we can then parse 
const laptopData = JSON.parse(json);
console.log(laptopData);

// server request 
const server = http.createServer((req, res) =>{

    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;
    // const name = url.parse(req.url, true).query.name;
    
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(202, { 'Content-type' : 'text/html'});
        res.end('This is the Products page');
    } 
    
    else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(202, { 'Content-type' : 'text/html'});
        res.end(`This is the Laptop page for laptop ${id}!`);
    } 

    else {
        res.writeHead(404, { 'Content-type' : 'text/html'});
        res.end('URL was not found on the server!');
    }

});
//Reg function
// const server = http.createServer(function (req, res){
// console.log('Someone did access the server!');
// });


// Listening to the request and assigning a local host
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now'); 
});
// Reg function
// server.listen(1337, '127.0.0.1', function (){
//     console.log('Listening for requests now'); 
// });

