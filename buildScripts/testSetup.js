// Babel should transpile the tests before Mocha runs them
require('babel-register')();

// When Mocha sees a require css, it will get treated as an empty function
require.extensions['.css'] = function(){};
