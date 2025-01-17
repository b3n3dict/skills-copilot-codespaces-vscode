//create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { createReadStream } = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('./navbar-app/index.html').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('./navbar-app/about.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('./navbar-app/contact.html').pipe(res);
    } else if (req.url === '/api') {
        fs.readFile(`${__dirname}/navbar-app/data.json`, 'utf-8', (err, data) => {
            const navBar = JSON.parse(data);
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify(navBar));
        });
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        fs.createReadStream('./navbar-app/404.html').pipe(res);
    }
});
server.listen(3000);
