var newInputString = "";
var mainFunction = function(inputString){
newInputString = inputString;
}
//  NenputString = " what is thig goijg oon";
var inputStringSplitted = newInputString.split("");
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



/*for (var i= 0; i<(newString.length/6); i=i+1){
  for (var j=0; j<6; j = j+1){
    if (i === 0 && j === 0){
      anotherNewString[0] = newString[0];
    } else {
   anotherNewString[j+(6*i)] = newString[(j+i+3)];
      }
  } // inner for
} //outer for*/



for (var i= 0; i<(newString.length); i=i+1){
  var j = i+1;
      anotherNewString[i] = newString[newString.length-j];
    
} //outer for


var finalString = "";

var secondMainFunction = function(){
  finalString = anotherNewString.join(" ");
  return finalString;
}



$(document).ready(function() {
  $("form#inputAndOutput").submit(function(event){
     //alert("we are at the beginning of another block");
     event.preventDefault();
     var inputString = $("#yourString").val();
     //console.log(yourString);  // for debugging
     mainFunction(inputString); // try this one.
     var final = secondMainFunction;
     //var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
     $("#output").text(final);
     });
 });
  
 
