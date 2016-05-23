var moment = require('moment');

exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
  this.date = moment().format("YYYY MM DD");
};

exports.Entry.prototype.read = function() {
  return this.title + ", " + " Dear diary, " + this.body + " <br> " + this.date;
};
