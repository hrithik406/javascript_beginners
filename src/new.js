let count = 0
let countEl = null
let saveEl = null

window.addEventListener("DOMContentLoaded", (e) => {
    saveEl = document.getElementById('save-el')
    countEl = document.getElementById('count-el')
    colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
    btn = document.getElementById("btn")
    color = document.querySelector(".color")
    btn.addEventListener("click", function () {
        randomNumber = getRandomNumber()
        console.log(randomNumber)
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber]
    })
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

function increment() {
    count += 1
    countEl.textContent = count
}
function decrement() {
    count -= 1
    countEl.textContent = count
}
function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    count = 0
    countEl.textContent = 0
}



