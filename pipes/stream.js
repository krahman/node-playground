var fs = require('fs');
var zlib = require('zlib');

// read file in 16KB chunk each 
// using highWaterMark property

// Readable Stream
var readable = fs.createReadStream(__dirname + '/lorem.txt');

// Wrtiable Stream
var writable = fs.createWriteStream(__dirname + '/lorem-copy.txt');

// compressed file
var compressed = fs.createWriteStream(__dirname + '/lorem.txt.gz'); 

readable.pipe(writable);

var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);
