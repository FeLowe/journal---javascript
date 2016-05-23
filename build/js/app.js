(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/journal.js').Entry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();
    var dateInput = $('#date').val();

    var newEntry = new Entry(titleInput, bodyInput, dateInput);

    $('#output').append('<li>' + titleInput + '<br>' + bodyInput + '<br />' + dateInput + '</li>');

  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
exports.Entry = function(title, body, date) {
  this.title = title;
  this.body = body;
  this.date = date;
}

exports.Entry.prototype.read = function() {
  return this.title + ", " + " Dear diary, " + this.body + " <br> " + this.date;
}

},{}]},{},[1]);
