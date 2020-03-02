function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word[0].toUpperCase() + word.slice(1);


}
function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName[0] + "." + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let newPrice = originalPrice + originalPrice * vatRate / 100;
  return Math.floor(newPrice * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let newPrice = originalPrice - originalPrice * reduction / 100;
  return Math.floor(newPrice * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (str.length % 2 === 1) {
    let i = str.length - 1;
    let j = i / 2;

    return str.slice(j, j + 1);
  }
  else {
    let a = str.length / 2;

    return str.slice(a - 1, a + 1);
  };
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];

  }
  return reverse;
}

function reverseAllWords(words) {
  //if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let reverse1 = "";
  let newArray = [];

  for (let a = 0; a <= words.length - 1; a++) {
    reverse1 = words[a].split("").reverse().join("");
    newArray[a] = reverse1;

  }

  return newArray;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let count = 0;
  for (i = 0; i < users.length; i++) {
    if (users[i].type === "Linux")
      count++;
  }

  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let add = 0;
  for (let i = 0; i < scores.length; i++) {
    add += scores[i];
  }
  let mean = parseFloat((add / scores.length).toFixed(2));
  return mean;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  let response = "";
  if (n % 3 === 0 && n % 5 === 0) {
    response = "fizzbuzz";
  }
  else if (n % 3 === 0) {
    response = "fizz";
  }
  else if (n % 5 === 0) {
    response = "buzz";
  }
  else if (n % 3 || n % 5 !== 0) {
    response = n;
  }

  else console.log("invalid");

  return response;

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
