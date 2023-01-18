var calcbuttons = document.getElementById("calcbuttons");
var cu_11 = document.getElementById("cu_11");
var equ = document.getElementById("equ");
var currentequation = "", clook="";
var finalanswer = "";

function addequation(ex){
    currentequation += ex;
    cu_11.innerHTML=currentequation; 
  if(ex=="÷"){
    clook+="/";
  } else if(ex == "×"){
    clook+="*";
  } else if(ex == "-"){
    clook+="-";
  } else{
    clook+=ex;
  }
  equ.innerHTML="...";
}

function equalequation(){
    if(clook!=""){try {
        finalanswer = math.evaluate(clook);
        cu_11.innerHTML=finalanswer; 
        equ.innerHTML=currentequation +"=";
        currentequation = finalanswer;
        clook = finalanswer;
    } catch (error) {
        equ.innerHTML="...";
        cu_11.innerHTML = "Error";
    }}
}

function clearequation(){
  finalanswer="";
  currentequation="";
  cu_11.innerHTML="...";
  equ.innerHTML= "...";
  clook="";
}

function backspacequation(){
    equ.innerHTML="...";
    if(cu_11.innerHTML != "" && cu_11.innerHTML != "..."){
        var arx = cu_11.innerHTML.split("");
        arx.pop();
        finalanswer = arx.join("");
        cu_11.innerHTML = finalanswer;
        currentequation = finalanswer;
        clook = finalanswer;
    }
    if(cu_11.innerHTML == ""){
        cu_11.innerHTML = "...";
    }
}

var arrbut = [
    ["C", "(", ")", "<i class='bi bi-arrow-left'></i>"],
    ["1", "2", "3", "×"],
    ["4", "5", "6", "÷"],
    ["7", "8", "9", "+"],
    ["0", ".", "=", "-"]
];
var allcurrent = "";
arrbut.forEach(e=>{
    allcurrent="";
    e.forEach((x, i)=>{
        switch(x){
            case "C":
                allcurrent +="<button style='background-color: darkgrey;' onclick='clearequation()' id='clear'>"+x+"</button>";
                break;
            case "=":
                allcurrent +="<button onclick='equalequation()' id='equal'>"+x+"</button>";
                break;
            case "<i class='bi bi-arrow-left'></i>":
                allcurrent +="<button style='background-color: darkgrey;'onclick='backspacequation()' id='backspace'>"+x+"</button>";
                break;
            case "+":
                allcurrent +="<button style='background-color: grey;' onclick=\"addequation('"+x+"')\">"+x+"</button>";
                break;
            case "-":
                allcurrent +="<button style='background-color: grey;' onclick=\"addequation('"+x+"')\">"+x+"</button>";
                break;
            case "×":
                allcurrent +="<button style='background-color: grey;' onclick=\"addequation('"+x+"')\">"+x+"</button>";
                break;
            case "÷":
                allcurrent +="<button style='background-color: grey;' onclick=\"addequation('"+x+"')\">"+x+"</button>";
                break;
            default:
                allcurrent +="<button style='background-color: white;' onclick=\"addequation('"+x+"')\">"+x+"</button>";
        }
    });
    calcbuttons.innerHTML+='<div class="my-2 container d-flex align-items-center justify-content-evenly">'+allcurrent+'</div>';
});


document.addEventListener("keydown", (e)=>{
    if (e.code == "Enter") {
        
        var equal = document.getElementById("equal");
        equal.click();
    }
});
