function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

// Example usage: 
try {
  let result1 = add(5, 3);
  console.log(result1); // Output: 8
  let result2 = add("hello", 5); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}

// Alternative using type guards:
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
} 