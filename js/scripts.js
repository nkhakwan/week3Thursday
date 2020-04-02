var inputString = "what ever it is or not"
var inputStringSplitted = inputString.split("");
var newString =[];
var field = 0;
inputStringSplitted.forEach(function(eachLetter){
  if (eachLetter === " "){
    field +=1;
  } else {
    newString.push(eachLetter);
    }
})// end of forEach
var missingSpaces = 6 - ((newString.length) % 6);
var fillEmptySpaces = function(missingSpaces){
  for (var i =0; i < missingSpaces; i=i+1){
    newString.push('x');
  } // end of for loop
  return newString;
}// end of the function
fillEmptySpaces(missingSpaces);
var anotherNewString = [];
for (var i= 0; i<newString.length; i=i+6){
  var j = 0;
  anotherNewString[j] = newSting[i];
  j = j +=1;
}

for (var i= 1; i<newString.length; i=i+1){
  for (var j=1; j<6; j = j+1){
    anotherNewString[j] = NewString[J+6];

  }
  
}