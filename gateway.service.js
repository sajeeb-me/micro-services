const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use('/stress', proxy('http://localhost:3002'));
app.use('/', proxy('http://localhost:3001'));

app.listen(3000, () => {
    console.log('Gateway is running on http://localhost:3000');
});

// app.use('/', proxy('http://localhost:3001', {
//     proxyReqPathResolver: (req) => {
//         // Forward the request path to the index service
//         return req.originalUrl;
//     }
// }));