// Remember to import the data and Dog class!

import dogs from '/data.js'
import Dog from '/Dog.js'

function render() {
    document.getElementById("main").innerHTML = dog.getDogHtml()
}

let dog = new Dog(dogs[1])
render()