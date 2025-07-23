function Car(make, year) {
    this.make = make,
        this.year = year
    this.drive = function () {
        console.log("you drive" + this.make)
    }
}
const Car1 = new Car("ford", 2004)
console.log(Car1)
console.log(Car1.year)
const Car2 = new Car("bmw", 2004)
console.log(Car2)
console.log(Car2)
Car1.drive()


class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    display() {
        console.log("product details :" + this.name)
    }
}
const pro1 = new Product("apple", 30)
pro1.display()


let details = function () {
    console.log(this.name + " call details")
}
const student = {
    name: "ak",


}
details.call(student)

const student2 = {
    name: "deep"
}
details.call(student2)

const user = {
    name: "Josna",
    greet: function () {
        const sayHi = () => {
            console.log(this);
        };
        sayHi()
    },
};
user.greet();


//   console.log("start")
//   document.getElementById("btn-el").addEventListener('click',function cb(){
//     console.log('call back')
//   })            


// console.log("start")
// setTimeout(function cbt(){
//     console.log("cb set timeout")
// },5000)  
// fetch("http://api.netflix.com")
// .then(function cbF(){
//     console.log("cb netflix")
// })
// console.log("end")



// ----------------------------------------------------------------


const radius = [1, 3, 6, 7]

const area = function (r) {
    return Math.PI * r ** 2
}

const diameter = function (r) {
    return r * 2
}
const circumferance = function (r) {
    return Math.PI * r
}

const main = function (radius, logic) {
    const out = []
    for (let i = 0; i < radius.length; i++) {
        out.push(logic(radius[i]))
    }
    return out
}

console.log(main(radius, area))
console.log(main(radius, diameter))
console.log(main(radius, circumferance))

// ---------------------------------- ---------------------------------

const arr = [5, 1, 3, 2, 6]
const out = arr.map((x) => x.toString(2))
console.log(out)

const outf = arr.filter((x) =>
    x % 2
)
console.log(outf)

const outr = arr.reduce(function (acc, curr) {
    acc += curr
    return acc
}, 0)
console.log(outr)

const outM = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr
    }
    return max
}, 0)
console.log(outM)

// --------------------------------------------------

const users = [
    { fname: "jos", lname: "saini", age: 26 },
    { fname: "donald", lname: 'trump', age: 75 }
]
const out4 = users.map((x) => x.fname + " " + x.lname)
console.log(out4)

const out5 = users.filter((x) => x.age === 75).map((x) => x.fname);
console.log(out5);

const out6 = users.reduce(function (acc, cur) {
    if (acc[cur.age]) {
        acc[cur.age] = ++acc[cur.age]
    }
    else {
        acc[cur.age] = 1
    }
    return acc

}, {})
console.log(out6)

const out7 = users.reduce(function (acc, cur) {
    if (cur.age === 75) {
        return cur.fname
    }
}, "")
console.log(out7)



// -------------------------------------------------------------------------------


























































































