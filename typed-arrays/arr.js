// ArrayBuffer takes bytes
// 8 bytes
// 1 byte = 8 bits
// 8 bytes = 8 * 8 bits
// 8 bytes = 64 bits

var buffer = new ArrayBuffer(8);

// typed array 32 bits
// view can fit 2 numbers  

var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 1234;

// third array will not be accepted
// due to the size is limited to 2 arrays
view[2] = 92087540;

console.log(view);

