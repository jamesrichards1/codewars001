// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//solution

function opposite(number) {
    if(number>0){
      return number -(number+number)
  }
  else if(number<=0){
       return Math.abs(number)
  }
}