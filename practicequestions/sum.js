let num1 = Number(prompt("Enter number :"));
let num2 = Number(prompt("Enter number :"));

function sum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}

console.log(sum(num1, num2));
