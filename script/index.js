var calcbuttons = document.getElementById("calcbuttons");
var currentequation = "";
var finalanswer = "";

function addequation(ex){
    currentequation += ex;
    console.log(currentequation)
    var cu_11 = document.getElementById("cu_11");
    cu_11.innerHTML=currentequation;
}

function equalequation(){
    finalanswer = currentequation + "=";

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
    e.forEach(x=>{
        switch(x){
            case "=":
                allcurrent +="<button onclick='equalequation()' id='equal'>"+x+"</button>";
                break;
            case "<i class='bi bi-arrow-left'></i>":
                allcurrent +="<button onclick='backspacequation()' id='equal'>"+x+"</button>";
                break;
            default:
                allcurrent +="<button onclick=\"addequation('"+x+"')\">"+x+"</button>";
        }
        
    });
    calcbuttons.innerHTML+='<div class="my-2 container d-flex align-items-center justify-content-evenly">'+allcurrent+'</div>';
});


document.addEventListener("keydown", (e)=>{
    // if (e.code.startsWith("Key")) {
    //     e.preventDefault();
    // }
});

document.addEventListener("keydown", (e)=>{
    if (e.code == "Enter") {
        var equal = document.getElementById("equal");
        equal.click();
    }
});