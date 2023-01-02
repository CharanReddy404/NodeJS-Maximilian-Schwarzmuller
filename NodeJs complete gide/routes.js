const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<HTML>
            <HEAD><TITLE>Enter Message</TITLE></HEAD>
            <BODY>
            <form action='/message' method='POST'>
            <input type="text" name='message' ></input>
            <button type='submit'>message</button>
            </form>
            </BODY>
            </HTML>`);
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
      console.log(body);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message.replace('+', ' '), (err) => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(`<HTML>
            <HEAD><TITLE>Responce from Nodejs</TITLE></HEAD>
            <BODY>
            <h1>Hello World</h1>
            </BODY>
            </HTML>`);
  res.end();
};

// module.exports = {
//   handler: requestHandler,
//   someText: 'Some Hard coded text',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some Hard coded text';
