function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  /*let smallNums = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i])
    }
  }
  return smallNums;*/

  let smallNums = nums.filter(function (n) {
    if (n < 1)
      return true;
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesBeginningWith = names.filter(function (name) {
    if (name.charAt(0) === char) {
      return true;
    }
  })
  return namesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbsOnly = words.filter(function (word) {
    if (word.startsWith("to ")) {

      return true;
    }
  })
  return verbsOnly;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let integer = nums.filter(function (n) {
    if (Number.isInteger(n)) {
      return true;
    }
  })
  return integer;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let userCities = [];
  users.forEach(function (user) {
    userCities.push(user.data.city.displayName)
  })


  return userCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let squareRoot = nums.map(function (n) {
    return parseFloat(Math.sqrt(n).toFixed(2));
  })
  return squareRoot;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here

  let newArray = [];

  for (let j = 0; j < triangles.length; j++) {
    let longestSide = 0;
    for (let i = 0; i < triangles[j].length; i++) {
      if (triangles[j][i] > longestSide) {
        longestSide = triangles[j][i];
      }
    }
    newArray.push(longestSide)
  }
  return newArray;
}


module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
