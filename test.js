import dataTransform from './dataTransform.js';
// 1 addValues
console.log(dataTransform.addValues(5, 7)); // number(expected: 12)
console.log(dataTransform.addValues("pro", "gram")); // string(expected: program)
console.log(dataTransform.addValues([1, 2, 3], [4, 5, 6])); // array(expected: [1, 2, 3, 4, 5, 6])
//console.log(dataTransform.addValues(["t","r","u","e"], 123)); // expected ERROR: "Addition not possible for these types"

// 2 stringifyValue
console.log(dataTransform.stringifyValue([1, 2, 3])); // "[1,2,3]"
console.log(dataTransform.stringifyValue());// "undefined"

// 3 invertBoolean
console.log(dataTransform.invertBoolean(false)); // true
//console.log(dataTransform.invertBoolean(123)); // expected ERROR: "Expected a boolean"

// 4 convertToNumber
console.log(dataTransform.convertToNumber("42.5")); // 42.5
//console.log(dataTransform.convertToNumber("not a number")); // expected ERROR: "Cannot convert string to number"


// 5 coerceToType
console.log(dataTransform.coerceToType(12345, "string")); // "12345"
console.log(dataTransform.coerceToType("123", "number")); // 123
console.log(dataTransform.coerceToType("true", "boolean")); // true
//console.log(dataTransform.coerceToType("true", "qwerty")); // expected ERROR: "Unsupported type coercion: qwerty"
