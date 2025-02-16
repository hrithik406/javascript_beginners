const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ]

  let currentitem = 0

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

    img = document.getElementById('img')
    author = document.getElementById('author')
    job = document.getElementById('job')
    info = document.getElementById('info')

    nextbtn = document.querySelector('#next-btn')
    prevbtn = document.querySelector('#prev-btn')
    randombtn = document.querySelector('#random-btn')

    showPerson(currentitem)

    nextbtn.addEventListener('click', function () {
      console.log('next')
      currentitem++
      if (currentitem > reviews.length - 1) {
        currentitem = 0
      }
      showPerson(currentitem)
    })
    
    prevbtn.addEventListener('click', function () {
      console.log('previous')
      currentitem--
      if (currentitem < 0) {
        currentitem = reviews.length - 1
      }
      showPerson(currentitem)
    })
    
    randombtn.addEventListener('click', function () {
      console.log('random')
    
      currentitem = Math.floor(Math.random() * reviews.length)
      showPerson(currentitem)
    })
    
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

function showPerson(person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

