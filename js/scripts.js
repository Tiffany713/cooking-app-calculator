var cups2tablespoons= function(number1) {
    return number1 * 16;
};

var teaspoon2tablespoon = function(number1) {
    return number1 / 3;
};

var number1 = parseInt(prompt("Enter a number"));
var result = teaspoon2tablespoon(number1);
alert(result);