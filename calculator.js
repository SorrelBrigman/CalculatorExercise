
//   Create a function that multiplies two numbers
//   passed in as arguments. Return the product.

var mult = function (numb1, numb2) {
  var answer = numb1 * numb2;
  return answer;
}


// //   Create a function that adds two numbers
//   passed in as arguments. Return the sum.

var add = function (numb1, numb2) {
  var answer = numb1 + numb2;
  return answer;
}



//   Create a function that subtracts two numbers
//   passed in as arguments. Return the difference.

var sub = function (numb1, numb2) {
  var answer = numb1 - numb2;
  return answer;
}




//   Create a function that divides two numbers
//   passed in as arguments. Return the quotient.
var sub = function (numb1, numb2) {
  var answer = numb1 / numb2;
  return answer;
}




//   Create a function that accepts three arguments.
//     1. First number
//     2. Second number
//     3. A function that performs an operation on them
var mathy = function(opp) {
  //gather numbers from input fields
  var num1 =  document.querySelector("#numb1").value;
  var num2 =  document.querySelector("numb2").value;
  //   Return the value of the operation.
  var answer =  opp(numb1, numb2);
//Put answer in html page
document.querySelector("#answer").innerHTML = answer;
}




//assigning variables to buttons on the DOM
var addBut = document.querySelector("#add").value;
var subBut = document.querySelector("#sub").value;
var divBut = document.querySelector("#div").value;
var multBut = document.querySelector("#mult").value;


addBut.addEventListerner("click", mathy(add));
