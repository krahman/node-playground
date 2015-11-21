var util = require('util');
var debuglog = util.debuglog('foo');
var bar = 123;

debuglog('hello from foo[%d]', bar);
debuglog('hell yea');
