let url = "https://www.bilgisayargetigi.com";
let youtube = "Bilgisayar Genetiği";
let result;

//! 1- Karakter sayısı bul.
result = url.length;
result = youtube.length;
result = youtube.replace(" ", "").length;

//! 2- Youtube değişkeni kaç karakterden oluşuyor
result = youtube.split(" ").length;
result = url.split(".").length;

//! 3- Kanal adı başlangıç kontrol
result = youtube.startsWith("rBilgisayar");
result = url.startsWith("https");
if (result) {
  console.log("yapılacaklar.");
} else {
  console.log("false döndü");
}

//! 4- Kelime kontrolü
if (youtube.indexOf("rGenetiği") > -1) {
  console.log("çalıştı");
} else {
  console.log("çalışmadı");
}

//! 5- Url ve Youtube Değişken Birleştir
youtube = youtube.toLowerCase().replace(" ", "-");
/* url = url.replace("com", "com/"); */

let newUrl = url.replace(url, url + youtube);
newUrl = `${url}/${youtube}`

console.log(newUrl);
