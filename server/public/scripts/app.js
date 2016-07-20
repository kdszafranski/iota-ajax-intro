$(document).ready(function() {
  $('#load-data').on('click', loadData);

  function loadData() {
    $.ajax({
      type: 'GET',
      url: '/data',
      success: function(response) {
        console.log(response.people);
        for(var i = 0; i < response.people.length; i++) {
          $('#ajax-data').append('<div class="person"></div>');
          var $el = $('#ajax-data').children().last();
          $el.append('<h2>' + response.people[i].name + '</h2>');
          $el.append('<img src="' + response.people[i].imageURL + '" />');
        }
      },
      error: function() {
        console.log('Error with request');
      }

    });
  }
});
