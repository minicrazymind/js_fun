//function Conditions

function orderMenu(flavor) {
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


console.log(orderMenu(1));
console.log(orderMenu(10));
console.log(orderMenu(2));
console.log(orderMenu(3));
console.log(orderMenu(4));
