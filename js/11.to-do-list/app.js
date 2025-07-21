const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const divEl = document.getElementById("div-el")
const delBtn = document.getElementById('del-btn')

let arr = []

btnEl.addEventListener('click', () => {
    arr.push(inputEl.value)
    divEl.innerHTML += `<p>
                            ${inputEl.value}
                            <button id="del-btn">delete</button>
                         </p>`

    inputEl.value = ''
    console.log(arr)

})

delBtn.addEventListener('click',(e)=>{
    
})


// function arraySwap(swapArr){
//     for(let i=0;i<swapArr.length;i++){
//         for(let j=swapArr.length-1;j>=0;j--){
//             let temp =  swapArr[i]
//             swapArr[i] = swapArr[j]
//             swapArr[j] = temp
//         }
//     }
//     console.log(swapArr)
// }

// arraySwap([1,2,3,4])

// function minMax(nums) {
//     let obj = {}
//     let max = nums[0], min = nums[0]
//     if (!nums || nums.length === 0) {
//         obj.min = null
//         obj.max = null
//         console.log(obj)

//     }
//     else {
//         for (let i = 0; i < nums.length; i++) {
//             min = nums[i] < min ? nums[i] : min
//             max = nums[i] > max ? nums[i] : max
//         }
//         obj.min = min
//         obj.max = max
//         console.log(obj)
//     }

// }

// minMax([])


// function countWords(words){
//     let obj={}
//     for(let i=0;i<words.length;i++){
//         if(obj[words[i]]){
//             obj[words[i]]++
//         }
//         else{
//             obj[words[i]]=1
//         }
//     }
//     return obj
// }

// console.log(countWords([1,2,3,1,2]))




