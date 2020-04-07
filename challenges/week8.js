const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let nextNum = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === n && nums[i] !== nums[nums.length - 1]) {
      return nextNum = nums[i + 1];
    }
  }
  return null;
};
const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const obj = {
    1: 0,
    0: 0
  };
  let count1s = 0;
  let count0s = 0;
  let newstr = str.split("");

  for(i=0; i<newstr.length; i++) {
    if(newstr[i]==="0"){
      count0s++;
    }
    else count1s++
  }
  obj[1] = count1s;
  obj[0] = count0s;
  return obj;
  
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
