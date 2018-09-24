console.log('Swapping Variables Within Objects');

// Create 10 variables about yourself
let MeganSpence ={
  firstname: "Megan",
  lastname: "Spence",
  age: 14,
  ageAfraid: null,
  hair: "Reddish Brown",
  female: true,
  male: false,
}

let MarkMercer ={
  firstname: "Mark",
  lastname: "Mercer",
  age: 13,
  ageAfraid: 29,
  hair: null,
  female: false,
  male: true,
}

// Your code goes here, swap first names
let memory = MeganSpence.firstname;
MeganSpence.firstname = MarkMercer.firstname
MarkMercer.firstname = memory

// Printing out entire object

console.log(MeganSpence);
console.log(MarkMercer);

// Print first names only

console.log("Megan's first name is: " + MeganSpence.firstname);
console.log("Mark's first name is: " + MarkMercer.firstname);

// Print vairables to the console
