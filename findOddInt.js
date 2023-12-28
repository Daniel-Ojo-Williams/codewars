function findOdd(val) {
  let newArr = Array.from(new Set(val));
  let odd;

  newArr.forEach(num => {
    let occurrence = 0;
    val.forEach(x => {if(x == num){occurrence++;}})
    if(occurrence%2 !== 0){odd = num}
  })

  
  return odd;
}

let testArr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

console.log(findOdd(testArr))