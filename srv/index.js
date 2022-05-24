const express = require('express');
const https = require('https');
const http = require('http');
const path  = require('path');
const ssl = process.env.VIRTUAL_PROTO === 'https'
const host = process.env.VIRTUAL_HOST
const port = process.env.VIRTUAL_PORT

let app = express();

app.get("/hello", (req, res) => {
   console.log(req);
   res.send("world");
})

app.use(express.static('static'))
app.use('/', express.static(path.join(__dirname, 'static')))


if (ssl) {
   let privateKey  = fs.readFileSync(`/root/letsencrypt/live/${host}/privkey.pem`, { encoding: 'utf8'});
   let certificate = fs.readFileSync(`/root/letsencrypt/live/${host}/fullchain.pem`, { encoding: 'utf8'});
   https.createServer({ key: privateKey, cert: certificate }, app).listen(port);
} else     
   http.createServer(app).listen(port);
