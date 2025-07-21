const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const divEl = document.getElementById("div-el")
const delBtn = document.getElementById('del-btn')
const dateEl = document.getElementById("date-el")

let arr = []


const local = JSON.parse(localStorage.getItem("localList"))
if (local) {
    arr = local
    renderList(local)
}

btnEl.addEventListener('click', () => {
    arr.push({
        name: inputEl.value,
        due: dateEl.value
    })
    inputEl.value = ''
    dateEl.value = ''
    localStorage.setItem("localList", JSON.stringify(arr))
    // console.log(arr)
    renderList(arr)
})



function renderList(arr) {
    let htmlList = ''
    for (let i = 0; i < arr.length; i++) {
        htmlList += `<p>
                            ${arr[i].name}   : ${arr[i].due}
                            <button id="del-btn" onclick="arr.splice(${i},1); renderList(arr)">delete</button>
                         </p>`
    }
    divEl.innerHTML = htmlList

}

function findIndex(food) {
    let foodr = food.slice().reverse()
    let count = 0
    for (let i = 0; i < foodr.length; i++) {
        if (foodr[i] === 'egg') {
            count++
            if (count <= 2) {
                foodr.splice(i, 1)

            }
        }
    }
    console.log(food)
    return foodr
}

console.log(findIndex(["egg", "milk","meat", "egg","egg"]))


function fizzbuzz(){
    for(let i=0;i<=20;i++){
        if(i%3===0){
            console.log('fizz')
            continue
        }
        console.log(i)
    }
}
fizzbuzz()

// const arr2= [1,2,6,6]
// const [f,s] = arr2
// console.log(f,s)



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




