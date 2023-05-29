/*
Fundamentals-Part-2


 Steven is still building his tip calculator, using
the same rules as before: Tip 15% of the bill if the
bill value is between 50 and 300, and if the value is
different, the tip is 20%.

 1. Write a function 'calcTip' that takes any bill
value as an input and returns the corresponding tip,
calculated based on the rules above (you can check
out the code from first tip calculator challenge if
you need to). Use the function type you like the
most. Test the function using a bill value of 100.
 2. And now let's use arrays! So create an array
'bills' containing the test data below.
 3. Create an array 'tips' containing the tip value
for each bill, calculated from the function you
created before.
 4. BONUS: Create an array 'total' containing the
total values, so the bill + tip.

TEST DATA: 125, 555 and 44
*/
//============= Coding Challenge #2 ===================//
/*
const bills = [125, 555, 44]

const calcTip = (bill) => {
  const tipRegular = bill * (15 / 100);
  const tipVip = bill * (20 / 100)
  if (bill < 50) {
    return tipRegular
  }
  else {
    return tipVip
  }
}

const total = []
const tips = [];
for (let i = 0; i <= bills.length - 1; i++) {
  const tip = (calcTip(bills[i]))
  let sum = bills[i] + tip
  total.push(sum)
  tips.push(tip)
}

console.log(tips)
console.log(total)
*/

/*============ Objects =============*/

// Object literal 
// "Order of these items doesn't matter when retrive them."
// const jonas = {
//   firstName:"Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job:"teacher",
//   friends: ["Micheal","Peter","Steven"]
// }

// DOT vs Bracket Notation
/*
const jonas = {
  firstName:"Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job:"teacher",
  friends: ["Micheal","Peter","Steven"],
  harryPotter:"Jane"
}
// Dot Notation
console.log(jonas.lastName)
// Bracket Notation
console.log(jonas['lastName'])

const nameKey = "Potter";
console.log(jonas["harry" + nameKey])
// console.log(jonas["last" + nameKey])

const input = prompt("What do you want to knwo about Jonas? Choose between fistName, lastName, age, job, friends")

console.log(jonas[input])
*/

/*
Write a JavaScript function to check whether an `input` is an array or not.

const checkArray = (input) => {
  return Array.isArray(input);
}

console.log(checkArray("Hello"));

*/
/*
Write a JavaScript function to clone an array.
*/
/*
const array = [1,2,3,4]
//const cloned_array = array.slice()
//const cloned_array = [...array]
const cloned_array = Array.from(array)

console.log(cloned_array);
*/
/*
Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array */

// array = [[],3];
// const firstElement = (arr, n) => {
//   return arr.slice(0, n)
// }
// const element = firstElement(array, 2)
// console.log(element)

/* Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
console.log(last([7, 9, 0, -2]));
*/

// const last = (arr,n = 1) => {
//   if(n <= 0){
//     return [];
//   }
//   else if(n>=arr.length){
//     return arr.slice();
//   }
//   else{
//     return arr.slice(-n);
//   }
// }

// console.log(last([7, 9, 0, -2]))
