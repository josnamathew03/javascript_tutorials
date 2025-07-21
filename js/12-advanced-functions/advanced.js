const jsResult = document.querySelector('.js-result')
const jsWL = document.querySelector('.js-w-or-l')
const jsMove = document.querySelector('.js-move')
const autoBtn = document.querySelector('.auto-btn')
const rBtn = document.querySelector('.r-btn')
const paperBtn = document.querySelector('.paper-btn')
const sBtn = document.querySelector('.s-btn')




// const normal=JSON.parse(localStorage.getItem('score'));
// console.log(normal);
              

rBtn.addEventListener('click',()=>game('rock'))
paperBtn.addEventListener('click',()=>game('paper'))
sBtn.addEventListener('click',()=>game('scissors'))

sBtn.addEventListener('keydown', (e) => {
  if (e.key === 's') { 
    game('scissors');
  }
});





let count = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    tie: 0
};//default operator
/*if(count===null){
    count={
        wins:0,
        loses:0,
        tie:0
    };
}*/
// if(!score)//null=true


let isAuto = false
let intid


autoBtn.addEventListener('click', () => {
    if (!isAuto) {
        intid = setInterval(() => {
            let pmove = rand()
            game(pmove)
            // updateScore()

        }, 1000)
        isAuto = true
    }
    else {
        clearInterval(intid)
        isAuto = false

    }


})
updateScore()


function game(playermov) {
    const move = rand();
    let res = '';
    if (playermov === 'scissors') {
        if (move === 'rock') {
            res = 'you lose';
        }
        else if (move === 'paper') {
            res = 'you win';
        }
        else if (move === 'scissors') {
            res = 'tie';
        }
    }

    else if (playermov === 'paper') {
        if (move === 'rock') {
            res = 'you win';
        }
        else if (move === 'paper') {
            res = 'tie';
        }
        else if (move === 'scissors') {
            res = 'you lose';
        }
    }

    else if (playermov === 'rock') {
        if (move === 'rock') {
            res = 'tie';
        }
        else if (move === 'paper') {
            res = 'you lose';
        }
        else if (move === 'scissors') {
            res = 'you won';
        }
    }

    if (res === 'you lose') {
        count.loses += 1;
    }
    else if (res === 'you win') {
        count.wins += 1;
    }
    else if (res === 'tie') {
        count.tie += 1;
    }
    const stringvalue = JSON.stringify(count);
    localStorage.setItem('score', stringvalue)

    //             alert(`computer pick ${move}.${res}
    // winss:${count.wins},loses:${count.loses},tie:${count.tie}`)

    updateScore()

    jsWL.innerHTML = res
    jsMove.innerHTML = `you : ${playermov} and computer : ${move}`



}


function updateScore() {
    jsResult.innerHTML = ` winss:${count.wins},loses:${count.loses},tie:${count.tie}`

}

//let move='';
function rand() {
    const no = Math.random();
    let move = '';

    if (no >= 0 && no <= 1 / 3) {
        move = 'rock';
    }
    else if (no > 1 / 3 && no <= 2 / 3) {
        move = 'paper';
    }
    else if (no >= 2 / 3 && no <= 1) {
        move = 'scissors';
    }
    return move;
}


///////////////////////////////////////////////////////////////////////////////

const addBtn = document.querySelector('.add-btn')
const pEl = document.querySelector('.p-el')


let isActive = null

addBtn.addEventListener('click', () => { 
    pEl.innerHTML = `added`
    if (isActive) {
        clearTimeout(isActive) 
    }
  isActive=setTimeout(() => {
            pEl.innerHTML = ''
        }, 2000)      

})    

    let countl = 0  
                               
setInterval(()=>{
    document.title = `${countl} messages`
    countl++
},2000)


////////////////////////////////////////////////////////////////////////////

// map filter

let arr=[1,-1,3,4]
const out = arr.filter((x)=>  x>=0)

const out1 = arr.map((x)=> x*2)

console.log(out) 
console.log(out1) 


