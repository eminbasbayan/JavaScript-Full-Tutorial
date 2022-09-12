/* 
    Öğrenci Bilgileri

    1- Mert Demir
        Doğum Tarihi: 2001
        Bilgisayar Notları: 100, 90, 10

    2- Eylül Demir
        Doğum Tarihi: 2002
        Bilgisayar Notları: 60, 30, 50

    Geçer Not: 45


    Program Şartları:
    1- Öğrencilerin yaşlarının hesaplayınız.
    2- Öğrencilerin ders ortalamasını hesaplayınız.
    3- Öğrencilerin dersten kalıp kalmadığını hesaplayınız.
*/

let suankiYil = new Date().getFullYear();
let gecmeNotu = 50;

let ogr1 = "Mert Demir";
let ogr1DogumYil = 2001;
let ogr1Yas = suankiYil - ogr1DogumYil;
let ogr1DersNot1 = 100;
let ogr1DersNot2 = 90;
let ogr1DersNot3 = 10;
let ogr1DersNotOrt = parseInt((ogr1DersNot1 + ogr1DersNot2 + ogr1DersNot3) / 3);
let ogr1DersDurum = ogr1DersNotOrt > gecmeNotu;

let ogr2 = "Eylül Demir";
let ogr2DogumYil = 2002;
let ogr2Yas = suankiYil - ogr2DogumYil;
let ogr2DersNot1 = 60;
let ogr2DersNot2 = 30;
let ogr2DersNot3 = 50;
let ogr2DersNotOrt = parseInt((ogr2DersNot1 + ogr2DersNot2 + ogr2DersNot3) / 3);
let ogr2DersDurum = ogr2DersNotOrt > gecmeNotu;

console.log("1. Öğrenci Geçme Durumu:", ogr1DersDurum);
console.log("2. Öğrenci Geçme Durumu:", ogr2DersDurum);
