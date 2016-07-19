# color-changer

Created two buttons. One will set the background color of the page to a random color. The other button will reset the background page color to the default white color. 


How to create random colors:
```javascript
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

//created the variable hexValues to store the base 16 hexadecimals
//base 16 hexadecimals range from 0-9 and a-f
//generateNumber function calculates a random number multipled by 16 (# of hexadecimals)
//generateNumber[] grabs the array index position that the generateNumber function calculated (ranges from 0-16)
//hexValues[generateNumber()] grabs the string value in the array based on the random number calculated
//example hexValues[3] => '2'
//made a for loop to generate a random number 6 times
//color is a string of 6 hexValues
//if the color is white the randomColor function is called again
```
