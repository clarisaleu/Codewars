// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

var formulaArray = [];
var f;

function zero(callback) {
  formulaArray.unshift('0');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function one(callback) {
  formulaArray.unshift('1');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function two(callback) {
 formulaArray.unshift('2');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function three(callback) {
 formulaArray.unshift('3');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function four(callback) {
   formulaArray.unshift('4');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}
function five(callback) {
  formulaArray.unshift('5');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function six(callback) {
 formulaArray.unshift('6');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function seven(callback) {
 formulaArray.unshift('7');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function eight(callback) {
 formulaArray.unshift('8');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function nine(callback) {
  formulaArray.unshift('9');

  if (formulaArray.length === 3) {
    f = formulaArray.join('');
    formulaArray = [];
    return eval(f);
  }
}

function plus(callback) {
  formulaArray.unshift('+');
}

function minus(callback) {
  formulaArray.unshift('-');
}

function times(callback) {
  formulaArray.unshift('*');
}

function dividedBy(callback) {
  formulaArray.unshift('/');
}
