//function diceRole(number) {
//  for (var i = 0; i < number.length; i++);
//  output
//}

var number = process.argv[2];

var dicerolls = " ";

var randomNumber;
for (var i = 0 ; i < number -1; i++) {
  randomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
  dicerolls = dicerolls + randomNumber + ',';

}

randomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
dicerolls = dicerolls + randomNumber

console.log( " I Rolled " + number + " Dice: " + dicerolls)