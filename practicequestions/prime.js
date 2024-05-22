let number = Number(prompt("Enter a number :"));

const checkPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

checkPrime(number)
  ? console.log(`${number} is prime!`)
  : console.log(`${number} is Not prime!`);
