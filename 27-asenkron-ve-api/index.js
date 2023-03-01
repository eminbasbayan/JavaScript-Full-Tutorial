//! Asenkron Programlama
/* console.log("1. işlem");
setTimeout(() => {
  console.log("2. işlem");
}, 2000);
console.log("3. işlem"); */

//! callback Fonksiyonu
/* 
function sayHello(name, callback) {
  callback();
  console.log(`Hello ${name}`);
}

function goodbye() {
  console.log("Görüşmek Üzere");
}

sayHello("Emin", goodbye);
 */

//! Ajax ve Http İstekleri
/* let myList;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = function () {
  const response = xhr.responseText;
  if (xhr.status === 200) {
    myList = JSON.parse(response);
  } else {
    console.log("Hata Oluştu:" + xhr.status);
  }
};

xhr.send();
 */

//! Promise

/* function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * 100);
      if (number % 2 === 0) {
        resolve(number);
      } else {
        reject(`Hata: ${number} sayısı tek bir sayıdır.`);
      }
    }, 1000);
  });
}

getRandomNumber()
  .then((number) => console.log("Çözümlendi:" + number))
  .catch((error) => console.log(error));
 */

//! Fetch

/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
 */
/* const response = fetch("https://jsonplaceholder.typicode.com/users");

console.log(
  response
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
);
 */

//! Async & Await

/* async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
} */

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
