const obj = {
    [Symbol.iterator]:function(){
        let step=0
        const iterator ={
            next : function(){
                step++
                if(step === 1){
                    return {value:'hello', done: false}
                }else if(step===2){
                    return {value:'worls',done:false}
                }
               return {value: undefined,done :true}
            }
        }
        return iterator
    }
}

for (const word of obj){
    console.log(word)
}
                                            
 
   //this we done here js will do it for us internally for arrays strings maps and sets using for of loop
   //generators simplify the task of writting iterators, generator function can pause the execution
   //yield is an opeerator wirh which gegnerator can pause o

   function generatorFunction(){
    yield 'Hello'
    yield 'world'
   }
   
   
/*
Iterable

An iterable is any object that can be looped over using a for...of loop.
✅ Examples of iterables:
Arrays
Strings
Sets
Maps
These all work in a for...of:
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item);  // 1, 2, 3
}


Iterator

An iterator is an object that knows how to access items one by one from a collection.
It has a .next() method, which returns an object like this:

{ value: <item>, done: <true/false> }

const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator](); // get the iterator

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


obj[Symbol.iterator]() → returns an iterator



Generator

A generator is a special type of function that can pause its execution and resume later. It automatically creates an iterator for you.
You define a generator using function* and use the yield keyword to return values one by one.
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }


/*


                                                                            
  
     
                
                                