# my-oast-pot-server
const http = require('http');

const server = http.createServer((req, res) => {
    // This logs every hit inside your Render web dashboard panel
    console.log(`[!] EXFILTRATION HIT DETECTED!`);
    console.log(`Method: ${req.method}`);
    console.log(`URL/Payload: ${req.url}`);
    
    // Bypasses browser security controls (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Private OAST Server running on port ${PORT}`);
});
