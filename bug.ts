function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // Type error will not be caught here
console.log(result); // Outputs NaN, but the type error is not reported during compilation.