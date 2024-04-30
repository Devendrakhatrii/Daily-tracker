let num;
function getNum() {
  num = Number(prompt("Enter a number!"));
}

function checkPositive() {
  while (num < 0) {
    alert("Enter positive Number!");
    getNum();
  }
}

function checkMultiple() {
  if (num % 3 == 0 && num % 7 == 0) {
    if (num % 3 == 0 && num % 7 != 0) {
      console.log("Exactly divisible by 3");
    } else if (num % 7 == 0) {
      console.log("Exactly divisible by 7");
    } else {
      console.log(`${num} is divisible by 3 or 7`);
    }
  } else {
    console.log("Not divisible by 3 and 7");
  }
}

getNum();
checkPositive();
checkMultiple();
