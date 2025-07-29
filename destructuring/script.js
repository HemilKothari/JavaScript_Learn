//Destructuring: [] for array, {} for objects

// Swap elements in array
const colors = ["red", "green", "blue", "black", "white"];
console.log(`Before: ${colors}`);
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(`After: ${colors}`);