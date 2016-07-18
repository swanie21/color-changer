var $randomButton =$('#random-button');
var $resetButton = $('#reset-button');
var $backgroundColor = $('#background');

var colors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};

var randomColor = function() {
    var r = colors[rand()];
    var g = colors[rand()];
    var b = colors[rand()];
    return "#"+r+g+b;
};

$randomButton.on('click', function() {
  $backgroundColor.css('backgroundColor', randomColor());
});

$resetButton.on('click', function() {
  $backgroundColor.css('backgroundColor', 'white');
});
