var $randomButton =$('#random-button');
var $resetButton = $('#reset-button');
var $backgroundColor = $('#background');

var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var generateNumber = function() {
    return Math.floor(Math.random()*16);
};

var randomColor = function() {
    var r1 = colors[generateNumber()];
    var g1 = colors[generateNumber()];
    var b1 = colors[generateNumber()];
    var r2 = colors[generateNumber()];
    var g2 = colors[generateNumber()];
    var b2 = colors[generateNumber()];
    return "#"+r1+r2+g1+g2+b1+b2;
};

$randomButton.on('click', function() {
  $backgroundColor.css('backgroundColor', randomColor());
  console.log(color)
});

$resetButton.on('click', function() {
  $backgroundColor.css('backgroundColor', 'white');
});
