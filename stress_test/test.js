const autocannon = require('autocannon');

const urls = [
    'http://localhost:3000',
    'http://localhost:3000/health',
]
const duration = 30; // Duration of the test in seconds

urls.forEach(url => {
    const instance = autocannon({
        url,
        duration,
        // connections: 100, // Number of concurrent connections
        // pipelining: 1, // Number of requests per connection
        // headers: {
        //     'User-Agent': 'Autocannon Test'
        // }
    }, (err, result) => {
        if (err) {
            console.error('Error:', err);
            // process.exit(1);
        }
        else {
            // console.log('Results:', result);
            console.log(`Results for ${url}:`);
            console.log('Number of requests:', result.requests.total);
            console.log('Total time:', result.duration, 'ms');
            console.log('Mean latency:', result.latency.mean, 'ms');
            console.log('Requests per second:', result.requests.average);
        }
        // console.log(autocannon.printResult(result));
    });

    autocannon.track(instance, {
        renderProgressBar: true,
        renderResultsTable: false,
        renderLatencyTable: false
    });
});

// autocannon({
//     url: 'http://localhost:3000',
//     duration: 30 // seconds
// }, (err, result) => {
//     if (err) {
//         console.error('Error:', err);
//         process.exit(1);
//     }
//     console.log(autocannon.printResult(result));
// });