// Remember to import the data and Dog class!

import dogs from '/data.js'
import Dog from '/Dog.js'

const dislikeBtn = document.getElementById('dislike-btn')
const likeBtn = document.getElementById('like-btn')

dislikeBtn.addEventListener('click', () =>{
    dog.dislike()
    nextDog()
})

likeBtn.addEventListener('click', () => {
    dog.like()
    nextDog()
})

function nextDog() {
    setTimeout(() => {
        dog = new Dog(dogs[randomDog()])
        render()
    }, "1500") 
}

function render() {
    document.getElementById("main").innerHTML = dog.getDogHtml()
}

function randomDog() {
    return Math.floor(Math.random() * dogs.length)
}

let dog = new Dog(dogs[randomDog()])
render()