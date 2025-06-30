const autocannon = require('autocannon');

const url = 'http://localhost:3000'; // Change this to your server URL
const duration = 30; // Duration of the test in seconds

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
        console.log('Results:', result);
    }
    // console.log(autocannon.printResult(result));
});

autocannon.track(instance);

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