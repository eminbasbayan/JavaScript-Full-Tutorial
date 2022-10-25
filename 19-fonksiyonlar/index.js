/* let sayi1 = 10;
let sayi2 = 20;
let toplam = sayi1 + sayi2;
let sayi3 = 20;
let sayi4 = 30;
let toplam2 = sayi3 + sayi4;

console.log(toplam);
console.log(toplam2); */

//! basit toplama fonksiyonu
/* 
function sayiToplami(sayi1, sayi2){
    let toplam = sayi1 + sayi2;
    console.log(toplam);
}
sayiToplami(10, 20)
sayiToplami(20, 30) */

//! gelişmiş toplama fonksiyonu
/* let toplam = 0;
function sayiToplami(...sayilar) {
  for (let sayi of sayilar) {
    toplam += sayi;
  }
}

sayiToplami(10, 20, 30, 40, 50, 60, 5, 2, 3, 100);
console.log(toplam);
 */
//! yaş hesaplama
function yasHesapla(dogumYili) {
  return new Date().getFullYear() - dogumYili
}

const hesapla = yasHesapla(1990);

console.log(hesapla);

/* yasHesapla(1997);
yasHesapla(2005);
yasHesapla(2010);
yasHesapla(1970);
 */