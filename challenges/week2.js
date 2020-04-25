function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;

}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city === "Manchester") {
   return true;
  }
  else return false;
 }

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  
  return Math.ceil(people / 40);

}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      count++
    }
  }
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.address.city === "Manchester" && person.address.postCode.charAt(0)=== "M")
  { return true;
  }
  return false;
  
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
