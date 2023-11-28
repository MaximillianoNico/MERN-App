const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input string: `, name => {
  console.log(`Length of string is ${name.length}`);
  readline.close();
});