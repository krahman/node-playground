var fs = require('fs');

// read file in 16KB chunk each 
// using highWaterMark property

// Readable Stream
var readable = fs.createReadStream(__dirname + '/lorem.txt', {
   encoding: 'utf8', highWaterMark: 16 * 1024
});

// Wrtiable Stream
var writable = fs.createWriteStream(__dirname + '/lorem-copy.txt');

readable.on('data', function(chunk){
   console.log(chunk);
   writable.write(chunk);   
});
