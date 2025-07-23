//used to swap elements

let a= 1;
let b= 2;

[a,b] = [b,a];                
console.log(a)
console.log(b)

//used to swap two elementd=s in anaray
                                                  
const colors2 = ["red", "green", "blue", "white"];
[colors2[0], colors2[3]] = [colors2[3], colors2[0]];
console.log(colors2);

//assingn array elementd to variable

const[f,s,c,...extra] = colors2 //rest operator

console.log(f,s,c)
console.log(extra)

//  extract values from object
  
const person1={
    name : "hhhh",
    age:30
}        

const person2 = {
    name:"mikfkv",
    age: 9,
    job:"jnj"
}

const {name,age,job="unemployed"}=person1   //use same name for the the variables and object key
                                            //giving default value in destructuring

console.log(name,age,job)

//destructure in function parameters

function display({name,age,job="unemployed"}){
    console.log(name,age,job)
}
display(person1)



//[] to perform array destructuring
//{} to perform object destrutruirng