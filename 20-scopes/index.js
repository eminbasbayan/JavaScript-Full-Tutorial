//! fonksiyonlar kendi scope alanlarını oluşturur.
//! var ile if block içerisinde oluşturmaz.
//! let ve const ile block içi scopo oluşumunu sağlayabilir.

let kullanici = "global scope: Emin";
const isim = "Emin";
isim = "Nur"

console.log(isim);
function isimYazdir() {
  var kullanici = "function scope: Nur";
  console.log(kullanici);
}

if(true){
    let kullanici = "if scope: Yasin";
    console.log(kullanici);
}


console.log(kullanici);
isimYazdir();
