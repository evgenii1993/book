require('babel-register');

// app is imported through require and so, gets transpiled
const app = require('./server').app,
        PORT = process.env.PORT || 3000;

// We initialize the server here
// app.listen(PORT, function() {
//     console.log('Server listening on port', PORT);
// });