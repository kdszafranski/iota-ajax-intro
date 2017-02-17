$(document).ready(function() {
  console.log('jquery running!');

  $('#loadData').on("click", function() {
    console.log('getting data');

    // make AJAX request
    $.ajax({
      url: '/data',
      method: 'GET',
      success: function(data) {
        // when the response returns
        console.log('data from server: ', data);
        $("#dataContainer").empty();
        for (var i = 0; i < data.people.length; i++) {
          appendDOM(data.people[i]);
        }
      }
    });

    function appendDOM(person) {
      console.log('appending person');
      $("#dataContainer").append('<div class="person"></div>');
      var $el = $("#dataContainer").children().last();
      $el.append('<h2>' + person.name + '</h2>');
      $el.append('<img src="' + person.imageURL + '" />');
      // <img src="htt://mypicture.com/kris.jpg" />
    }

  });


});
