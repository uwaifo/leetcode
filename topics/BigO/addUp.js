// add up the sum of
//BIG O NOTATION IS: O(n)
// the number of operation sis bounded by the number of n ( ie. arg)
const addUp1 = arg => {
  let adder = 0; // 1 assignment operation
  for (let i = 1; i <= arg; i++) {
    // 1 assignment , 1 comparison, 2 assignment and addition in (++) multiplied by arg
    //console.log(i);
    adder = adder + i; // 2 operation multiplied by arg
  }
  return adder;
};

console.log(addUp1(3));

//BIG O NOTATION IS: O(1)
const addUp2 = arg => {
  return (arg * (arg + 1)) / 2; // 3 operations
};

console.log(addUp2(3));

/*
BIG O is basically the formal vocabulary used to describe the relationship between the input of a programme 
,its growth rate and how that affects the runtime . The main this to focus on is the overall trend.

we can determine code efficiency by counting the number of computational operations that a programe has to do 

TYPES
f means function
(n) mean parameters
 Some types of BigO notations are 
 1.Linear (f(n)=n)
 2.Quadratic(f(n)=n2)  // ie. n squared
 3.Constant (f(n) -= 1)
 4.

*/
