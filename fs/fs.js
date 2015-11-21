var fs = require('fs');

// read binary data

// readFileSync --> refer to fs.readSync in nodejs src
// Sync
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log('Sync', greet);

// readFile --> refer to fs.readFile in nodejs src
// Async
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', 
function(err, data) {
   if (err)
      console.log('Error', err);
   console.log('Async', data);
});

console.log('Done');
