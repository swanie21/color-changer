var $randomButton =$('#random-button');
var $resetButton = $('#reset-button');
var $backgroundColor = $('#background');
var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

var generateNumber = function() {
    return Math.floor(Math.random()*16);
};

var randomColor = function() {
  color = "#";
  for (i = 0; i < 6; i ++) {
    color += hexValues[generateNumber()]
  }
  if (color === '#ffffff') randomColor();
  return color;
};

$randomButton.on('click', function() {
  $backgroundColor.css('backgroundColor', randomColor());
});

$resetButton.on('click', function() {
  $backgroundColor.css('backgroundColor', 'white');
});
