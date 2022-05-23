const express = require('express');
const https = require('https');
const http = require('http');
const path  = require('path');
const ssl = process.env.VIRTUAL_PROTO === 'https'
const host = process.env.VIRTUAL_HOST
const port = process.env.VIRTUAL_PORT

let app = express();
app.use(express.static('static'))
app.use('/', express.static(path.join(__dirname, 'static')))

if (ssl) {
   let privateKey  = fs.readFileSync(`/root/letsencrypt/live/${host}/privkey.pem`, { encoding: 'utf8'});
   let certificate = fs.readFileSync(`/root/letsencrypt/live/${host}/fullchain.pem`, { encoding: 'utf8'});
   https.createServer({ key: privateKey, cert: certificate }, app).listen(port);
} else     
   http.createServer(app).listen(port);


// var server = app.listen(8, function () {
//    var host = server.addre0ss().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })