const grand = document.getElementById("grand-parent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")


// grand.addEventListener('click',()=>{
//    console.log('grandparent') 
// },true)//capturing
// parent.addEventListener('click',()=>{
//    console.log('parent') 
// },true)//bubbling
// child.addEventListener('click',(e)=>{
//    console.log('child') 
//    e.stopPropagation()
// },true)//capturing

            
 
 grand.addEventListener('click',()=>{
   console.log('grandparent') 
})//capturing




