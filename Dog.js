// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <img class="dog-image" src="${avatar}">
        <div class="description">
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>
        </div>`
    }
}

export default Dog