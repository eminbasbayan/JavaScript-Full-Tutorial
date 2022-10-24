const username = "eminbasbayan";
const yas = 25;

let result;

result = 25;
result = Number("25");
result = parseInt("25.7");
result = parseFloat("25.7");
result = parseInt("27");
result = isNaN("a25");

let myNumber = 10.3456757;

result = myNumber.toPrecision(5);
result = myNumber.toFixed(2);

result = Math.round(1.4);
result = Math.round(1.6);
result = Math.ceil(1.2);
result = Math.floor(1.2);
result = Math.pow(5, 3);
result = Math.sqrt(25);
result = Math.abs(-25);
result = Math.max(10, 1, 5, 7, 9, 20);
result = Math.min(10, 1, 5, 7, 9, 20);

console.log(result);
