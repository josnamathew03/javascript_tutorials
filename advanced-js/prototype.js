//prototype

function person(fname,lname){
    this.fname = fname
    this.lname = lname
}

const person1 = new person("raj",'kumar')
const person2 = new person("thej","laks") //function used with new keyword is constructor function

person1.getFull = function(){
    return this.fname + ' ' + this.lname   //arrow function cannot be used in case of of using this outside the scope
}
console.log(person1.getFull()) //in here if we use person2 it will be undefined.we are using pecifically for person1.if we want to use getFull method generically instead of using specifically use prototype

person.prototype.getFull = function(){
    return this.fname + ' ' + this.lname   //arrow function cannot be used in case of of using this outside the scope
}

console.log(person1.getFull()) 
console.log(person2.getFull()) 

//protorypal inheritance

function SuperHero(fname,lname){
    person.call(this,fname,lname)
    this.ishero = true
}
SuperHero.prototype.fighCrime= function(){
    console.log("fighting crime")
}

SuperHero.prototype = Object.create(person.prototype)

        //SuperHero.prototype = Person.prototype;
        //this is same as the above statement but doing this will share the same prototype which means changing in one will affect the other

const batman = new SuperHero('bruce','wayne')
console.log(batman.getFull()) 



//inheritanve using class 


class Female extends person{
    constructor(fname,lname){
        super(fname,lname)
        this.isFemale = true
    }

    job(){
        console.log(`${this.fname} is teacher`)
    }
}

const one = new Female("sheela","raj")
console.log(one.job())