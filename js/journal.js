exports.Entry = function(title, body, date) {
  this.title = title;
  this.body = body;
  this.date = date;
};

exports.Entry.prototype.read = function() {
  return this.title + ", " + " Dear diary, " + this.body + " <br> " + this.date;
};
