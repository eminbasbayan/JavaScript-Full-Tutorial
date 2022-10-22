const ad = "Emin";
const soyad = "Başbayan";
const yas = 25;
const sehir = "İstanbul";
const meslek = "Full-Stack Developer";

const bio = "Benim adım " +  ad + " soyadım " + soyad + ". " + sehir + '\'da ' + "yaşıyorum. " + yas + " yaşındayım. " + meslek + " olarak çalışıyorum." ;

//! backtick
const newBio =  `Benim adım ${ad} soyadım ${soyad}. ${sehir}'da yaşıyorum. ${yas} yaşındayım. ${meslek} olarak çalışıyorum.`;

console.log(bio);

