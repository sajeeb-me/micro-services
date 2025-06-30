const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    for (let i = 0; i < 1000000000; i++) {
        // Simulating some CPU work
    }

    res.send('Hello, World!');
});

app.get('/health', (req, res) => {
    for (let i = 0; i < 1000000000; i++) {
        // Simulating some CPU work for health check
    }
    res.send("health check passed");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});