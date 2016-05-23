var moment = require('moment');
var Entry = require('./../js/journal.js').Entry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();
    // var dateInput = $('#date').val();

    var newEntry = new Entry(titleInput, bodyInput);

    $('#output').append('<li>' + titleInput + '<br>' + bodyInput+ '<br>' + moment().format("MMMM Do YYYY, h:mm:ss a") + '</li>');

  });
});
