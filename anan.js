// for addtion of unlimeted nunbers
function addNumbers(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

const result = addNumbers(2,6);
console.log(result);
// for multipcation of unlimeted numbers
function mulNumbers(...numbers) {
    let product = 1;
  
    for (let number of numbers) {
        product *= number;
    }
  
    return product;
  }
  
  const result2 = mulNumbers(2,6);
  console.log(result2);