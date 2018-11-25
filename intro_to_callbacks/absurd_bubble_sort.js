const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} larger than ${el2}? (respond with yes/no)`, function(answer) {
    let response = answer.toLowerCase();
    if (response === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        let larger = arr[i];
        let smaller = arr[i + 1];
        arr[i] = smaller;
        arr[i + 1] = larger;
      }
    });
  }
}
