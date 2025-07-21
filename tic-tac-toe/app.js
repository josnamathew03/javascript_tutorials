
const button = document.querySelectorAll(".btn")
const win = document.getElementById("winner")
const reset = document.getElementById("reset")
const newB = document.getElementById("new")


let trueO = true;

let winP = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



reset.addEventListener('click', function () {
    button.forEach((btn) => {
        turnO = true
        btn.innerHTML = ''
        btn.disabled = false;
    })
})

button.forEach((btn) => {

    btn.addEventListener('click', function () {
        // console.log('button clicked')
        if (trueO) {
            btn.innerHTML = "O"
            trueO = false
        }
        else {
            btn.innerHTML = 'X'
            trueO = true
        }
        btn.disabled = true
        checkWinner()
    })
})

const checkWinner = () => {
    for (let each of winP) {
        let p1 = button[each[0]].innerText
        let p2 = button[each[1]].innerText
        let p3 = button[each[2]].innerText
        // console.log(p1,p2,p3)

        if (p1 != '' && p2 != '' && p3 != '') {
            if (p1 === p2 && p2 === p3) {
                win.innerHTML = "winner " + p1
            }
        }
    }
}





