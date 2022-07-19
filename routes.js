const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text"name="message"><button type="submit">Confirm</button></form></body>');
        res.write('</html>');
        return res.end();
    } 
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
       
        });
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>PRIMEIRA BAGAÇA CARAIO</title><head>');
    res.write('<body><h1>FALA MEMO ISAQUINHO TE AMO</hq></body>');
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler; - exporta um único arquivo que não há forma de editar através do app.js

/* module.exports = {            aponta a um objeto e combina com diversas outras coisas 
    handler: requestHandler, 
    someText: 'Isaac estou entendendo'         
}; */

exports.handler = requestHandler;
exports.someText = 'Isaac to entendendo tudo hihihiihihih'