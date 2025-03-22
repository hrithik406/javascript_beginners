let count = 0
let countEl = null
let saveEl = null

window.addEventListener("DOMContentLoaded", (e) => {
    saveEl = document.getElementById('save-el')
    countEl = document.getElementById('count-el')
    colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow"]
    btn = document.getElementById("btn")
    color = document.querySelector(".color")
    btn.addEventListener("click", function () {
        randomNumber = getRandomNumber()
        console.log(randomNumber)
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber]
    })

    btn = document.getElementById('menu-btn')
    nav = document.getElementById('menu')

    btn.addEventListener('click', function () {
      btn.classList.toggle('open')
      nav.classList.toggle('flex')
      nav.classList.toggle('hidden')
    })

    const togglebtn = document.querySelector("#sidebar-toggle")
    const closebtn = document.querySelector("#close-btn")
    const sidebar = document.querySelector(".sidebar")
    const sidebarBg = document.querySelector("#sidebar-bg")
  
    function toogleSiderBar() {
      sidebar.classList.toggle("show-sidebar")
      sidebarBg.classList.toggle("opacity-0")
      sidebarBg.classList.toggle("pointer-events-none")
    }
  
    togglebtn.addEventListener("click", function () {
      toogleSiderBar()
    })
  
    closebtn.addEventListener("click", function () {
      toogleSiderBar()
    })
  
    sidebarBg.addEventListener("click", function () {
      toogleSiderBar()
    })

    const overlay = document.querySelector("#modal-overlay")
    const modal = document.querySelector("#modal-btn")
    const close = document.querySelector(".close-modal")
  
    function togglemodal() {
      overlay.classList.toggle("open-modal")
    }
  
    modal.addEventListener("click", function (){
      togglemodal()
      console.log("opened modal")
    })
  
    close.addEventListener("click", function (){
      togglemodal()
    })

  const ques = document.querySelectorAll("#question")

  ques.forEach(function (question){
    const quesbtn = question.querySelector("#question-btn")
    // console.log(quesbtn)

    quesbtn.addEventListener("click", function() {
      ques.forEach(function (item) {
        if (item !== question){
          item.classList.remove("show-text")
        }
      })

      question.classList.toggle("show-text")
    })
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



