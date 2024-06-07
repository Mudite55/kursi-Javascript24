a = 10;
console.log("a mainiga vertiba: " + a);
{
    a = 37;
    var a = 73;

}
console.log(a);

{
    let text = "teksts";
    
    document.getElementById("demo").innerHTML = text;
    
    text = "cits teksts";
    
    document.getElementById("demo").innerHTML = text;
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragrafs izmainits!!!!";
}