const str = "Abcdefghijklmnopqrstuvwxyz";
strLwr = str.toLowerCase();

let charArray = strLwr.split("");
let vowels = 0,
  consonant = 0;
charArray.map((items, index) => {
  if (
    items === "a" ||
    items === "e" ||
    items === "i" ||
    items === "o" ||
    items === "u"
  ) {
    vowels++;
  } else {
    consonant++;
  }
});
console.log(vowels);
