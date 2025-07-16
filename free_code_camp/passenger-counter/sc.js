

let count = 0;
countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function incre() {
    count += 1;
    // console.log(count)
    countEl.innerHTML = count
}



function save() {
    let prev = count + " " + "-"
    saveEl.textContent += prev 
    count = 0
    countEl.textContent = 0
    console.log(count)
}

// ------------------------------------------------------------------

let num1El= 8;
let num2El=2;

document.getElementById("num1-el").innerText = num1El;
document.getElementById("num2-el").innerText = num2El

sumEl = document.getElementById("sum-el")

function add(){

    let res = num1El+num2El
    sumEl.innerText ='Sum : '+ res
}
function mul(){
    let res = um1El*num2El
    sumEl.innerText ='Sum ' + res
}
function divi(){
    res = num1El/num2El
    sumEl.innerText = 'Sum ' + res
}
function sub(){
    res =  num1El-num2El
    sumEl.innerText ='Sum :' + res
}




       



