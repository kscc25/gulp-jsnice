'use strict';

var through = require('through2');
var jsnice = require('jsnice');

module.exports = function(options) {
  return through.obj(function(file, encoding, callback) {
    var content = file.contents.toString('utf8');

    jsnice.nicify(content, options, function(err, data) {
      if (err) return callback(err);

      file.contents = new Buffer(data.js);
      callback(null, file);
    });

  });
};
