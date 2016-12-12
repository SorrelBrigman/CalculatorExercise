
//   Create a function that multiplies two numbers
//   passed in as arguments. Return the product.

var mult = function (numb1, numb2) {
  var answer = numb1 * numb2;
  return answer;
}


// //   Create a function that adds two numbers
//   passed in as arguments. Return the sum.

var adding = function (numb1, numb2) {
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
var dvid = function (numb1, numb2) {
  var answer = numb1 / numb2;
  return answer;
}




//   Create a function that accepts three arguments.
//     1. First number
//     2. Second number
//     3. A function that performs an operation on them
var getNumb = function(e, opp) {
  e.preventDefault();
  //gather numbers from input fields and converts them into integers from strings
  var num1 =  parseInt(document.querySelector("#numb1").value);
  var num2 =  parseInt(document.querySelector("#numb2").value);
  //   Return the value of the operation.
  doMath(num1, num2, opp);

}

var doMath = function (num1, num2, opp) {
  var answer = opp(num1, num2);
  console.log(answer);
  //Put answer in html page
  document.querySelector("#answer").innerHTML = answer;
}


//assigning variables to buttons on the DOM
var addBut = document.querySelector("#add");
var subBut = document.querySelector("#sub");
var divBut = document.querySelector("#div");
var multBut = document.querySelector("#mult");

//assigning event listeners to each button, prevents the default reloading of the page and passes the math operation called by that particular button
subBut.addEventListener("click", function (e) {e.preventDefault(); getNumb(e, sub) });
divBut.addEventListener("click", function (e) { e.preventDefault(); getNumb(e, dvid) });
multBut.addEventListener("click", function (e) { e.preventDefault(); getNumb(e, mult) });
addBut.addEventListener("click", function (e) { e.preventDefault(); getNumb(e, adding) });
