 // Write a node program that takes in an unlimited number of command line
 // arguments, goes through each and prints out the sum of them.
 // If any argument is nto a whole number, skit it.
 // Do support nagative numbers though



var arguments = process.argv
var numbers = arguments.slice(2);
console.log(numbers);

function sumNumbers(nums) {
  console.log('In Split Array. nums: ', nums);
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
    var num = Number(nums[i]);
    sum += num;
  }
  return sum;
}

var output = sumNumbers(numbers);
console.log('The End', output);
