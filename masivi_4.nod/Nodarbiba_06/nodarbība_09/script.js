logs . nosaukums  =  "N09" ;
/*
var skaitītājs = 1;
var showCounter = () => konsole.log(skaitītājs);
konsole.log(skaitītājs);
konsole.log(window.counter);
showCounter();
window.showCounter();
*/

/*
konsole.log(window.innerWidth);
konsole.log(window.innerHeight);
konsole.log(window.outerWidth);
konsole.log(window.outerHeight);
console.log(document.documentElement.clientWidth);
*/

/*
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeBy
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo
konsole.log(window.innerWidth);
window.resizeTo(500,100);
konsole.log(window.innerWidth);
*/

//window.open("https://rtu.lv", "RTU");
//window.open("https://lu.lv", "LU");
//window.open("http://127.0.0.1:5500/Nodarbiba_08/", "N08");
// drošības pēc lokālu faila aplūkošana ir bloķēta
//window.open("file:///C:/Users/some.html", "local");
//window.focus();


let  jsWindow  =  logs . atvērts (
    //"https://rtu.lv",
    "http://127.0.0.1:5500/Nodarbiba_08/index.html" ,
    //"RTU",
    "N08" ,
    'augstums=600, platums=800' ) ;

setTimeout ( ( )  =>  {
    jsWindow . resizeTo ( 600 ,  300 ) ;
} ,  3000 ) ;

setTimeout ( ( )  =>  {
    jsWindow . aizvērt ( ) ;
} ,  6000 ) ;