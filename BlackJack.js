let hasblackjack = false
let isalive = false
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let card_array = []  

function randomfunction(){
    let random = Math.floor(Math.random() * 12) + 1

    if (random > 10){
        return 10
    }

    else if(random === 1 ){
        return 11
    }   

    else{
        return random
    }


}

function start() {

    isalive = true

    let firstcard = randomfunction()
    let secondcard = randomfunction()

    card_array = [firstcard,secondcard]


    if (sum <= 20) {
        message = "Do you want to draw new card ?"
    }

    else if (sum === 21) {
        message = "Wohoo! you have got BlackJack!"
        hasblackjack = true
    }

    else {
        message = "You are out of the game"
        isalive = false
    }

    console.log(message)
    messageEl.textContent = message

    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "cards: "

    for (let i = 0; i < card_array.length; i++)
    {
         cardsEl.textContent += card_array[i] + " "
    }


}

function newcard() {

    console.log("Drawing a new card from deck")

    let card = randomfunction()

    sum += card

    card_array.push(card)
    console.log(card_array)

    start()
}
