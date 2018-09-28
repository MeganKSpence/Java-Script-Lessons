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

let number = [3, 7, 13, 17];
simpleOperators =(number[0], number[1]);
simpleOperators =(number[2], number[3]);
skipcounting (717, 313, -900);
skipcounting (7, 8, 9); //haha 7 eight 9
skipcounting (8, 8, 0);
