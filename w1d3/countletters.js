function countLetters(sentance) {
var count = {}

for ( var i = 0; i < sentance.length; i++) {
  var letter = sentance.charAt(i);
  if (count[letter] === undefined) {
    count[letter] = 1
  } else {
    count[letter] = count[letter] +1
  }
}
return count
}

//var sentance = process.argv(2);
console.log(countLetters('lighthouse') );