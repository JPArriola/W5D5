const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question('Enter a number: ', function(num) {
      let given_num = parseInt(num);
      sum += given_num;
      console.log('Total so far = ' + sum);

      addNumbers(sum, numsLeft - 1, completionCallback)
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
