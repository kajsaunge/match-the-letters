// What do I want to do?
// Clicka a swatch to add that color to the header

var element = document.getElementById('letters-container');


document.addEventListener('DOMContentLoaded', function() {
  var letterElements = document.getElementsByClassName('letter-element');

  for (var i = 0; i < letterElements.length; i++) {
    letterElements[i].addEventListener('click', function() {


      this.className += ' selected';
    }, false)
  };
});
