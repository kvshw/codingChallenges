/*
Fundamentals-Part-2
 Coding Challenge #2

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
console.log(calcTip(100))

const tips = [];
for (let i = 0; i <= bills.length - 1; i++) {
  const tip = (calcTip(bills[i]))
  tips.push(tip)
}

console.log(tips)

