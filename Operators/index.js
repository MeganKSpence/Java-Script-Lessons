function simpeOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let multiply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(multiply);
  console.log(divide);
}
//skipcount by ___ for ___ times, starting as ___
//(skipcount, times, startingnumber) = parameters
function skipcounting (skipcount, times, startingnumber){
  let number = startingnumber;
  for (let i=1; i<=times; i++){
    //i<=5 = parameter for number of skips
    number += skipcount; //parameter for skips
    console.log(number); //parameter for logging rest of the number
  }
}

//simpleComparison
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    console.log(numberStart += skipCount); //used to be 2 lines of code ...   console.log(numberStart); numberStart += skipCount;
    //what is happening with the single line compaired to the double line
  }
}

//Truthy vs Falsy example
console.log(1 == 1); // Returns True
console.log('1' == 1); // Returns True
console.log('1' === 1); // Returns False

//let number = [4, 7, 13, 99, 0, 100, 5]
// while (number < 100) {  //infinite loop ex. 0+5=5, 0+5=5, insted of 0+5=5 5+5=10
// let number = 0;
// console.log(number);
// number += 5;
// }

//simpleOperators =(number[0], number[1]);
//simpleOperators =(number[2], number[3]);
//skipcounting (7, 8, 9); //haha 7 eight 9
//skipcounting (8, 8, 0);
//howManyTimes (number[4], number [5], number[6]);
