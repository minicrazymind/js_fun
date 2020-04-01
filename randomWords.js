//random words
function randoWords() {
  //Creating array
  var arr = ["Ooga ", "Booga ", "Goo goo ", "Ga ga ", "Charlie Brown ", "yes ", "5 out of 7 times ", "the ", "unfortunately ", "just ", "then ", "and ", "I'm sorry, but ", "there's nothing we can do ", "liquor store ", "robbed ", "at gunpoint ", "Willy Wonka ", "Super Mario ", "seventy thousand sheckles "];

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

console.log(randoWords());
