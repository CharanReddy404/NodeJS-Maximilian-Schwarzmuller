const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
        <h1>Hello Welcome to my page</h1>
        <form action="/create-user" method='POST'>
            <input type='text' name='userName' placeholder="userName">
            <button type='submit'>Create User</button>
        </form>
    `);
    return res.end();
  } else if (url === '/users') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
    <h1>
    <ul>
        <li>User1</li>
        <li>User2</li>
        <li>User3</li>
        <li>User4</li>
    </ul>
    </h1>
    `);
    return res.end();
  } else if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const userName = parsedBody.split('=')[1];
      console.log(userName);
      res.writeHead(302, { Location: '/' });
      return res.end();
    });
  }
};

module.exports = routeHandler;
