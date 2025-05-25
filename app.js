const http = require('http');

const server = http.createServer((req, res) => {
const PORT = 3000;
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, Docker!');
});
server.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}/`);
});
