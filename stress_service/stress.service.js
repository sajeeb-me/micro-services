const express = require('express');
const morgan = require('morgan');
const cluster = require('cluster');
const os = require('os');

const app = express();

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master ${process.pid} is running`);
    console.log(`Forking ${numCPUs} workers...`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        console.log(`Forking a new worker...`);
        cluster.fork();
    });
} else {
    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        // Simulating some CPU work for health check
        for (let i = 0; i < 1000000000; i++) { }
        res.send("Hello from stress service!");
    });

    app.listen(3002, () => {
        console.log(`Stress service is running on http://localhost:3002 with PID ${process.pid}`);
    });
}