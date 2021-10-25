//Create a server that can send back static files
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require('path');
const port = 3001;


const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  //handle the request and send back a static file
  // parse URL
  let parsedURL = url.parse(req.url);
  // extract URL path
  let pathname = `${parsedURL.pathname}`
  //console.log(pathname)
  // serve index.html if empty url
  if (pathname == "/") {
    pathname = "/index.html";
  }
  // based on the URL path, extract the file extention. e.g. .js, .doc, ...
  const ext = path.parse(pathname).ext;
  //console.log(ext)
  // get files from /dist folder
  let file = __dirname + "/dist" + pathname;
  // maps file extention to MIME typere
  const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword'
  };
  fs.exists(file, function (exist) {
    if(!exist) {
      // if the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${file} not found!`);
      return;
    }

    // if is a directory search for index file matching the extention
    if (fs.statSync(file).isDirectory()) file += '/index' + ext;

    // read file from file system
    fs.readFile(file, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', map[ext] || 'text/plain' );
        res.end(data);
      }
    });
  });
});

server.listen(parseInt(port), "localhost", () => {
  console.log("Listening on port 3001");
});