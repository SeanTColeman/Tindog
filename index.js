// Remember to import the data and Dog class!

import dogs from '/data.js'
import Dog from '/Dog.js'

const dislikeBtn = document.getElementById('dislike-btn')
const likeBtn = document.getElementById('like-btn')
const choiceBtns = document.getElementById('choice-btns')
let currentDogIndex = 0
let waitingTurn = false
let dog = new Dog(dogs[currentDogIndex])

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

    if (dog.hasBeenLiked) {
        dogs.splice(currentDogIndex, 1)
    }

    currentDogIndex++
    if (currentDogIndex > dogs.length - 1) {
        currentDogIndex = 0
    }

    setTimeout(() => {
        if (dogs.length === 0) {
            document.getElementById("main").innerHTML = resetMsg
        } else {
            dog = new Dog(dogs[currentDogIndex])
            render()
            waitingTurn = false
        }

    }, "1000")
    console.log(dogs.length)
}

const resetMsg = `
    <div class="reset-msg">
        There are no more dogs in your area. Please check back later.
    </div>`

function render() {
    document.getElementById("main").innerHTML = dog.getDogHtml()
}

render()