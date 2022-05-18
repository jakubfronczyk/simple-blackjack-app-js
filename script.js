let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


let messgaEl = document.querySelector("#message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")



function getRandom() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messgaEl.textContent = message
}

function newCard(){
    let card = getRandom()
    sum += card
    cards.push(card)
    renderGame()
}