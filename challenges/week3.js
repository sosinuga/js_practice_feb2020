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

  for (let i = 1; i < words.length; i++) {

    [words[0]].push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
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

  for (let i = 0; i < menu.length; i++) {
    let ingr = menu[i].ingredients;
    for (let j = 0; j < ingr.length; j++) {
      if (ingr[j] === ingredient) {
        return true;
      }
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let newArray = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {

      newArray.push(arr2[i]);
    }
  }
  return [...new Set(newArray.sort())];
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
