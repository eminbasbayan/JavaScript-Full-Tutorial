let yas = 17;
let mezuniyet = "üniversite";

if(yas>= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")){
    console.log("Ehliyet şartlarını karşıladığın için ehliyet alabilirsin.");
}else if(yas === 17){
    console.log("Dayan. Son bir senen");
}else{
    console.log("Ehliyet şartlarını karşılamadığın için ehliyet alamazsın.");
}