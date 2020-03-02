function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let newNum = nums[i] * nums[i];
    newArray.push(newNum);
  }
  return newArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let newWords = [words[0]];
  for (let i = 1; i < words.length; i++) {

    newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return newWords.join('')
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    let subject = people[i].subjects;
    for (let j = 0; j < subject.length; j++) {
      count++;
    }
  }
  return count;

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
