const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>App Running</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <h1>App is Running!</h1>
        <p>The development server is now working.</p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
