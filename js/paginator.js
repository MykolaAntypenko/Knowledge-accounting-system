/*paginator*/
window.onload = function() {
    function hide1() {
    document.getElementById("programs").style.border = "2px solid #000000";
    document.getElementById("programs").style.boxShadow = "0 0 15px #1E90FF";
    document.getElementById("blocker1").style.display = "flex";
    document.getElementById("blocker2").style.display = "none";
    document.getElementById("blocker3").style.display = "none";
    document.getElementById("blocker4").style.display = "none";
}

function hide2() {
    document.getElementById("programs").style.border = "2px solid #1E90FF";
    document.getElementById("programs").style.boxShadow = "none";
    document.getElementById("blocker1").style.display = "none";
    document.getElementById("blocker2").style.display = "flex";
    document.getElementById("blocker3").style.display = "none";
    document.getElementById("blocker4").style.display = "none";
}

function hide3() {
    document.getElementById("programs").style.border = "2px solid #1E90FF";
    document.getElementById("programs").style.boxShadow = "none";
    document.getElementById("blocker1").style.display = "none";
    document.getElementById("blocker2").style.display = "none";
    document.getElementById("blocker3").style.display = "flex";
    document.getElementById("blocker4").style.display = "none";
}

function hide4() {
    document.getElementById("programs").style.border = "2px solid #1E90FF";
    document.getElementById("programs").style.boxShadow = "none";
    document.getElementById("blocker1").style.display = "none";
    document.getElementById("blocker2").style.display = "none";
    document.getElementById("blocker3").style.display = "none";
    document.getElementById("blocker4").style.display = "flex";
}

var button1 = document.getElementById("programs");
var button2 = document.getElementById("operating");
var button3 = document.getElementById("platforms");
var button4 = document.getElementById("databases");

button1.addEventListener("click", hide1);
button2.addEventListener("click", hide2);
button3.addEventListener("click", hide3);
button4.addEventListener("click", hide4);

}