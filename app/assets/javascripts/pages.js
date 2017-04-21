/* global $ */

$.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(data) {
  var htmlString = "";
  for ( var i = 0; i < data.length; i++) {
    htmlString += '<h4>' + data[i].name + '</h4>';
    htmlString += '<p>' + data[i].department + '</p>';
  }
  document.querySelector('#employee-data').innerHTML = htmlString;
});


