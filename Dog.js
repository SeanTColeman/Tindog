// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <img class="dog-image" src="${avatar}">
        <img class="badge" id="like-badge" src="images/badge-like.png">
        <img class="badge" id="dislike-badge" src="images/badge-nope.png">
        <div class="description">
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>
        </div>`
    }

    like() {
        document.getElementById('like-badge').style.display = "block";
    }

    dislike() {
        document.getElementById('dislike-badge').style.display = "block";
    }
}

export default Dog