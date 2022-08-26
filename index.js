// Remember to import the data and Dog class!

import dogs from '/data.js'
import Dog from '/Dog.js'

const dislikeBtn = document.getElementById('dislike-btn')
const likeBtn = document.getElementById('like-btn')
const choiceBtns = document.getElementById('choice-btns')
let waitingTurn = false

choiceBtns.addEventListener('click', e => {
    if (!waitingTurn) {
        if (e.target == likeBtn || e.target.id == "like-btn-img") {
            dog.like()
            nextDog()
        } else if (e.target == dislikeBtn || e.target.id == "dislike-btn-img") {
            dog.dislike()
            nextDog()
        }
    }
})

function nextDog() {
    waitingTurn = true
    setTimeout(() => {
        dog = new Dog(dogs[randomDog()])
        render()
        waitingTurn = false
    }, "1000") 
}

function render() {
    document.getElementById("main").innerHTML = dog.getDogHtml()
}

function randomDog() {
    return Math.floor(Math.random() * dogs.length)
}

let dog = new Dog(dogs[randomDog()])
render()