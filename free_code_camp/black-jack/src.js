
// let cards = []
// let sum = 0
// let hasBlack = false
// let isAlive = false
// let message = ""

// let messageEl = document.getElementById("message-el")
// // let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
// let cardEl = document.querySelector(".card-el");

// // let playerName ="jos"
// // let playerChips =145
// let player={
//     name : "jos",  
//     chips: 145
// }
// playerEl=document.getElementById("player-el")
// playerEl.textContent = player.name + ": $"+player.chips


// function startGame() {
//     cards.length = 0;  

//     let firstC = getRandom()
//     let secondC = getRandom()
//     cards.push(firstC);
//     cards.push(secondC)
//     sum = firstC + secondC
//     isAlive = true
//     renderGame();
// }

// function renderGame() {
//     cardEl.textContent = "Cards : " //cards[0] +" " + cards[1]

//     for (let i = 0; i < cards.length; i++) {
//         cardEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "sum : " + sum;
//     if (sum <= 20) {
//         message = "do you want to draw a new card";
//     }
//     else if (sum === 21) {
//         message = "you have got a jackpot";
//         hasBlack = true;
//     }
//     else {
//         message = "you are out";
//         isAlive = false
//     }
//     // console.log(message)
//     messageEl.textContent = message

// }      

// function newCard() {
//     if (isAlive === true && hasBlack === false) {
//         console.log("new card drawn");
//         let newCard = getRandom()
//         sum += newCard
//         cards.push(newCard)
//         console.log(cards)
//         renderGame()
//     }

// }

// function getRandom() {
//     let ran = Math.floor(Math.random() * 13) + 1
//     if (ran === 1) {
//         return 11
//     }
//     else if (ran > 10) {
//         return 10
//     }
//     else {
//         return ran
//     }
// }




// console.log("won : " + hasBlack);
// console.log("Alive : " + isAlive);


let messageEl = document.getElementById("message-el")
let cardEl = document.querySelector(".card-el")
let sumEl = document.getElementById("sum-el")

cards = []
sum = 0


function startGame() {
    cards.length = 0;
    let card1 = getRandom()
    let card2 = getRandom()
    cards.push(card1)
    cards.push(card2)
    sum = card1 + card2
    renderGame()
}

function renderGame() {
    cardEl.textContent = "cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "

    }
    sumEl.textContent = "sum: "+sum
    if(sum<=20){
        messageEl.textContent = "draw new card ?"
    }
    else if(sum===21){
        messageEl.textContent = "you won"
    }
    else{
        messageEl.textContent = "you lose"

    }
}

function newCard(){
    let card3=getRandom()
    cards.push(card3)
    sum+=card3
    renderGame()
}

function getRandom() {
    return Math.floor(Math.random() * 13) + 1

}