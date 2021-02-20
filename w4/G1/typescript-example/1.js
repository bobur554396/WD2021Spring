let a = 1;
let b = '1';
console.log(a === b);

console.log(0 == '');
console.log(0 == []);
console.log(false == []);
console.log(false == '');

function sum(a, b){
  return a + b;
}

// console.log(sum(2, 3));
console.log(sum('2', 3));
console.log(sum('hello', 3));