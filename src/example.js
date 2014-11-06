
var fs = require('fs');
var ts2json = require('./ts2json');

var json = ts2json(fs.readFileSync(__dirname+'/example-file.ts'));
