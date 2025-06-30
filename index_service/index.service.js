const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    for (let i = 0; i < 10000000000; i++) {
        // Simulating some CPU work for health check
    }
    res.send("Hello from index service!");
});

app.listen(3001, () => {
    console.log('Index service is running on http://localhost:3001');
});