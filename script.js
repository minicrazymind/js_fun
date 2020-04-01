var string1 = "ooga";
var string2 = "booga";
var num1 = 5;
var num2 = 10;

// checks if two strings are equal
function checkIfStringsEqual() {
  var answer = "";
  if (string1 == string2) {
    answer = "Yay they are le same";
  }
  else {
    answer = "gg boiz you messed up";
  }
  return answer;
}


// compares two num vars and sees how they be
function checkIfNumsEqual() {
  var answer = "";
  if(num1 < num2) {
    answer = "THEY LESS THAN";
  }

  else if (num1 > num2) {
    answer = "THEY GREATER THAN";
  }

  else {
    answer = "THEY equal";
  }

  return answer;
}


//takes in two arguments and returns string
function returnString(string1, string2) {
    var string3 = string1 + string2;
    return string3;
}


//function Conditions

function functionConditions(flavor) {
  if (flavor == 1) {
    return "Orange Soup";
  }
  else if (flavor == 2) {
    return "Cake Smoothie";
  }
  else if (flavor == 3) {
    return "Baked Peels"
  }
  else {
    return "Sorry we're out of those"
  }
}




//random words
function randoWords() {
  //Creating array
  var arr = ["Ooga", "Booga", "Goo goo", "Ga ga", "Charlie Brown", "yes", "5 out of 7", "the", "unfortunately," "just", "then", "and", "I'm sorry, but", "there's nothing we can do", "liquor store", "robbed", "at gunpoint", "Willy Wonka"];

  var bestSentence = ""; //Final output
  var randIndex = Math.floor(Math.random() * arr.length); //
  bestSentence = bestSentence + arr[randIndex];

  var counter = 0;
  while (counter < 7) {
    randIndex = Math.floor(Math.random() * arr.length); //
    bestSentence = bestSentence + arr[randIndex];
    counter = counter + 1;
  }

  return bestSentence;

}
