$(document).ready(function() {
  $('#newList').find('a').click(function(e) {
    e.preventDefault();
    var path = $(e.target).attr('href');
    var request = $.ajax({
      method: 'get',
      url: path
    })
    request.done(function(response) {
      $('#updateList').remove();
      $('#profile').after(response);
    })
  })
  $('#wrapper').on('submit', '#newListForm', function(e){
    e.preventDefault();
    var method = $(e.target).attr('method');
    var path = $(e.target).attr('action');
    var data = $(e.target).serialize();
    var request = $.ajax ({
      method: method,
      url: path,
      data: data
    })
    request.done(function(response) {
      $('#updateList').remove();
      $('#listDisplay').append(response);
    })
    request.fail(function() {
      alert("Please enter a title for your new list!")
    })
  })
  $('.addable').click(function(e) {
    e.preventDefault();
    var path = $(e.target).attr('href');
    var request = $.ajax({
      method: 'get',
      url: path
    })
    request.done(function(response){
      $('#updateTask').remove();
      $('#todoDisplay').after(response);
    })
  })
  $('#wrapper').on('submit', '#newTaskForm', function(e) {
    e.preventDefault();
    var method = $(e.target).attr('method');
    var path = $(e.target).attr('action');
    var data = $(e.target).serialize();
    var request = $.ajax ({
      method: method,
      url: path,
      data: data
    })
    request.done(function(response) {
      $('#updateTask').remove();
      $('.addable').before(response);
    })
  })
});
