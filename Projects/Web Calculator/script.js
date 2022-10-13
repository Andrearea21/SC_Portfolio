//function enterNo() {

//    dispWindow = document.getElementById("#window"),
//        ceButton = document.getElementById("#CE"),
//        buttons = document.getElementsByClassName("btn"),
//        Array.prototype.forEach.call(buttons, (button) => {
//            textField.value += button.innerText
//        })
//    ceButton.addEventListener("click", () => {textField.value = null })


//}

//2nd try

var one = document.getElementById("#one");
var two = document.getElementById("#two");
var three = document.getElementById("#three");
var four = document.getElementById("#four");
var five = document.getElementById("#five");
var six = document.getElementById("#six");
var seven = document.getElementById("#seven");
var eight = document.getElementById("#eight");
var nine = document.getElementById("#nine");

var add = document.getElementById("#add");
var multiply = document.getElementById("#multiply");
var divide = document.getElementById("#divide");
var substract = document.getElementById("#substract");

var showResult = document.getElementById("#equal");
var ceButton = document.getElementById("#CE");
//var windowDisp = document.getElementById("#window");

sessionStorage.one = 1;
sessionStorage.two = 2;
sessionStorage.three = 3;


//function showNumber(onclick) {
//    event.preventDefault();
//    //document.getElementById("#window")
//    /*window.innerHTML = document.write(sessionStorage.one);*/
//    document.getElementById("window").value
//        = document.getElementById("window").value
//            === '0' ? '' : document.getElementById("window").value
//        += number;

/*}*/

//function showNumber() {
//    //event.preventDefault();
//    let fetchNo = document.getElementById("#window");
//    //let showNo = document.querySelector("#one");
//    fetchNo.innerHTML = document.write(sessionStorage.one)
//}

//function showNumber() {
//    //onclick.preventDefault();
//    let fetchNo = document.getElementById("#window");
//    let showNo = document.write(one.value);
//    fetchNo.innerHTML = showNo.value;
//}

function showNumber(value) {
    document.getElementById("window").value += value;
}

function calculate() {
    var p = document.getElementById("window").value;
    var q = eval(p);
    document.getElementById("window").value = q;
    p.innerHtml = q;
}
