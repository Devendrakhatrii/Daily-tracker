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
  if (num % 3 == 0 || num % 7 == 0) {
    console.log(`${num} is divisible by 3 or 7`);
    if (num % 3 == 0) {
      console.log("But exactly by 3");
    } else console.log("But exactly by 7");
  } else {
    console.log(`${num} is not divisible by 3 or 7`);
  }
}

getNum();
checkPositive();
checkMultiple();
