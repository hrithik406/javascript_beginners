let saveEl = null
let countEl = null
let count = 0

window.addEventListener("DOMContentLoaded", (e) => {
    saveEl = document.getElementById('save-el')
    countEl = document.getElementById('count-el')
})

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