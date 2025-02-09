window.addEventListener("DOMContentLoaded", (e) => {
    hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    btn = document.getElementById("btn")
    color = document.querySelector(".color")
    btn.addEventListener("click", function () {
        let hexcolor = "#"
        for(let i = 0; i < 6; i++){
            hexcolor += hex[getRandomNumber()]
        }
        console.log(hexcolor)
        document.body.style.backgroundColor = hexcolor
        color.textContent = hexcolor
    })
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}