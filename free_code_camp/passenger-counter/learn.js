
let myAge = 22;
let hdr = 7;
let myDogAge = myAge * hdr;
console.log(myDogAge);

let bonusPoint = 50;
bonusPoint = bonusPoint + 50;
bonusPoint = bonusPoint - 75;
bonusPoint = bonusPoint + 25;
console.log(bonusPoint);



// let count = 5;             
// count=3;  //reassigning values
// count = count+2 //incrrementing
// console.log(count);

// let countEl = document.getElementById("count-el");
// let count = 0;
// function incree() {
//     count = count + 1;
//     countEl.innerText = count;
// }
// incree();
let welcomeEl = document.getElementById("welcome");
let name = 'jos'
let mess="new noti"    
let greet = "hi"
// let con = greet + " " + name 
// console.log(con)
// console.log(mess + ", " + name )

welcomeEl.innerText = greet + name

welcomeEl.innerText += "! "

let f="josna";
let l=" mathew";
function logg(){
    console.log(f+l)
}

logg()

let myPoint= 3
function add3(){
    myPoint+=3
}
function remove(){
    myPoint -= 1
}
add3()
add3()
remove()
remove()
add3()
console.log(myPoint)

// document.getElementById("save-el").innerHTML = "something wrong"
// ----------------------------------------------------------
let age=24;

if(age>=21){
    console.log("can enter");
}
else {
    console.log("cannot enter")
}
// ----------------------------------------
let ageN=100;
if(age<100){
    console.log("not eligible");
}
else if(age===100){
    console.log("eli");
}
else{
    console.log("second time")
}
// ----------------------------------------------
let arr = [
    "APPLE",
    "ORANGE",
    "MANGO"
]

console.log(arr)
arr.push("ramboottan")
console.log(arr)   

// ----------------------------------------------
let cards2 =[0,1,3]
for(let i=0; i<cards2.length; i++){
    console.log(cards2[i])
}


let con=["uv","huru"]
for(let i=0;i<con.length;i++){
    console.log("- "+con[i])
}  
// ----------------------------------------------------------


let sen = ["hello", "my", "name"]
let greetEl = document.getElementById("greet-el");

for(let i=0;i<sen.length; i++){
    greetEl.textContent += " "+sen[i] //equal will render only the last word in the array by traversing through whole words   
}

// -------------------------------------------------------------------


let castle={
    name:"great",
    price:39,
    place:"uk",
    isAlive1:true,
    tags:["beauty","nature"],
    detail:{
        year:1880,
        owner:"dutch"
    },
    dis:function(){
        console.log(castle.name+" "+castle.price)
    }

}
console.log(castle.dis())

// ---------------------------------------------------------------------

let hand=["rock","paper","sciscors"]
function game(){
    ran=Math.floor(Math.random() *3) ;
    console.log(ran)
    return hand[ran]
}
console.log(game())
// ----------------------------------------------


let fruit=["app","ora","app","app","ora"]
let appleS = document.querySelector(".apple-s")
let orangeS = document.querySelector(".orange-s")

function sorting(){
    for(let i=0;i<fruit.length;i++){
        if(fruit[i]==="app"){
            appleS.textContent += fruit[i]
        }
        else if(fruit[i]==="ora"){
            orangeS.textContent += fruit[i]
        }
    }
}
sorting()

// ------------------------------------------------

let boxEl=document.getElementById("box-el")
boxEl.addEventListener('click',function(){
    console.log("button clicked")
})
// ---------------------------------------------------
let cont = document.getElementById("con")
con.innerHTML = "<button>hi</button>"


let con = document.getElementById("con")
con.innerHTML = "<button onclick=Buy() >hi</button>"

function Buy(){
    con.innerHTML += "<p>thanks</p>"
}

// ---------------------------------------------------------
  const li = document.createElement("li")
   li.textContent=myLeads[i]
   ulEl.append(li)

    let listItem=""
   for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i])
    listItem += "<li>" + myLeads[i] + "</li>"
 
}
    ulEl.innerHTML = listItem

// ----------------------------------------------------
const receipient = "james"

const email = `hey ${receipient}! How is it going`
console.log(email)

myLeads = JSON.parse(myLeads)
console.log(typeof(myLeads))  
myLeads.push("www.face")         
console.log(myLeads)
myLeads = JSON.stringify(myLeads)
console.log(typeof(myLeads))

// -----------------------------------------

const welEl = document.getElementById("well-el")
console.log(
greet("hey","jos",1,2)

)

function greet(text,name,num1,num2){
    
    welEl.textContent = `${text}  ${name}`
    return num1+num2 

}

// --------------------------------------------------


const welEl = document.getElementById("well-el")
console.log(
    greet([1, 3, 4])

)

function greet(arr) {

    // welEl.textContent = `${text}  ${name}`
    return arr[0]

}

// -------------------------------------------------------

function generateSen(des,arr){
    return `The ${arr.length} largest countries are ${arr}` 
}
console.log(generateSen("largest country",["china","india"]))

// ---------------------------------------------------------

const arr1=[
    "he","heee","hee hee"
]

const container = document.querySelector(".container")
let spans=""

for (let i=0; i<arr.length; i++){
    spans += `<span>${arr[i]} </span>`
}
container.innerHTML = spans