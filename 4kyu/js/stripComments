// Complete the solution so that it strips all text that follows any of a set of 
// comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers ){
  input = input.split( /\n/ );
  var found;
  for (var i = 0; i < input.length; i++) {
    for (var n = 0; n < markers.length; n++ ) {
      found = input[i].indexOf(markers[n]);
      if (found >= 0) {
        input[i] = input[i].substr(0, found);
      }
    }
    // Trim any whitespace at the end.
    input[i] = input[i].replace(/\s+$/,'');
  }
  return input.join('\n');
}
