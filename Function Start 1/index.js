// Hellow World function
function greet (firstname, lastname){ // Parameters
  console.log(' Hello ' + firstname + ' World ' + lastname);
}

function square (number) {
  return number*number;
}

// firstname, lastname, age, ageAfriad, hair, female, male
let MeganSpence = ["Megan", "Spence", 14, null, "Reddish Brown", true, false];
let MarkMercer = ["Mark", "Mercer", 13, 29, null, false, true];

// Calling Functions, with arguments
greet (MeganSpence[0], MeganSpence[1]);
greet (MarkMercer[0], MarkMercer[1]);
greet (square(MeganSpence[2]), (MarkMercer[2]));
