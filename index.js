const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`[!] EXFILTRATION HIT DETECTED!`);
    console.log(`Method: ${req.method}`);
    console.log(`URL/Payload: ${req.url}`);
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Private OAST Server running on port ${PORT}`);
});
