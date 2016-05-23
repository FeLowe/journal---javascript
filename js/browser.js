var moment = require('moment');
var Entry = require('./../js/journal.js').Entry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();
    var countWords = bodyInput.split(" ");
    var totalWords = countWords.length;
    // var dateInput = $('#date').val();

    var newEntry = new Entry(titleInput, bodyInput);

    $('#output').append('<li>' + '<strong>' + 'Title: ' + '</strong>' + titleInput +'<br>' + '<strong>' + "Diary entry: " + '</strong>' + bodyInput + '<br>' + '<strong>' + "Date: " + '</strong>' + moment().format('MMMM Do YYYY, h:mm:ss a') + '<br>' + '<strong>' + 'Total words: ' + '</strong>'  + totalWords + '</li>');

  });
});
