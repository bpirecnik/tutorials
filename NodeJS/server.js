/*
BASIC SERVER

const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
    console.log('Server is running at http://${HOSTNAME}:${PORT}/');
});
*/

//const {readFile, readFileSync} = require("fs");
const {writeFile, writeFileSync} = require("fs");

/*
// ASYNCRHONUS
readFile("hi.txt", "utf8", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});

//SYNCHRONUS
try {
    const data = readFileSync("hi.txt", "utf8");
    console.log(data);
} catch(err) {
    console.error(err);
}

console.log("Log from outside");
*/
/*
const newContent = "This is some new text";

// flag a appenda text
writeFile("hi.txt", newContent, {flag: "a"}, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Content Written");
});
*/

/*
const { rename } = require("fs");

rename("hi.txt", "hello.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Renamed");
});
*/

/*
const addNums = require("./addNums");


const sum = addNums(2,2);
console.log(sum);
*/



// CREATING BASIC SERVER

const http = require('http');
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url) {
        case "/":
            path += 'index.html';
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            res.setHeader("Location", "/");
            res.statusCode = 301;    
            //path += "404.html";
            //res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(PORT, () => console.log("Server running..."));