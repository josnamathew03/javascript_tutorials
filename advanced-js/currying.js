function sum(a,b,c){
    return a+b+c
}


console.log(sum(2,3,4))

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}
                                                                        

console.log((curry(sum))(2)(3)(4))        

const add = curry(sum)
const add1 = add(2)
const add2 = add1(3)
const add3 = add2(4)                                           
console.log(add3)

                                
/////////////////////////////////////////////////////////////////////////////



