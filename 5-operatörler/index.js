let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;

//! 1- Aritmetik Operatörler
//? +, -, /, *, %, ++, --
result = number1 + number3;
result = number1 - number3;
result = number1 / number3;
result = number1 * number3;
result = number1 % number1;
/* result = number1++;
result = ++number1; */

//! 2- Atama Operatörleri
//? =, +=, -=, /=, *=, %=
result = number1;
result += number2; /* result + number2 */
result -= number2; /* result - number2 */
result /= number2; /* result / number2 */
result *= number2; /* result * number2 */
result %= number2; /* result % number2 */
//! 3- Karşılaştırma Operatörleri
//? ==, !=, ===, >, <, >=, <=
result = number1 == number2;
result = number1 != number2;
result = 10 === "10"; /* tip kontrolü. değer, tip */
result = number1 > number2;
result = number1 < number2;
result = number1 >= number2;
result = number1 <= number2;
/* console.log(result); */

//! 4- Mantıksal Operatörler
//? &&: ve, ||: veya, !: tersi

// && ve: iki şartıda sağlaması lazım
/* console.log(number1 !== number2 && number1 < number2); */

// || veya: true için bir şartı sağlaması yeterli
/* console.log(number1 > number3 || number1 !== number1); */

/* ! tersi  */
console.log(!(number1 > number3) && number2 >= number1);
