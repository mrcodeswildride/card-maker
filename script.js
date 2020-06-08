let card = document.getElementById(`card`)

let birthdayButton = document.getElementById(`birthdayButton`)
let congratsButton = document.getElementById(`congratsButton`)
let getWellButton = document.getElementById(`getWellButton`)

let mistyButton = document.getElementById(`mistyButton`)
let springButton = document.getElementById(`springButton`)
let skyButton = document.getElementById(`skyButton`)

let redButton = document.getElementById(`redButton`)
let greenButton = document.getElementById(`greenButton`)
let blueButton = document.getElementById(`blueButton`)

let size40Button = document.getElementById(`size40Button`)
let size60Button = document.getElementById(`size60Button`)
let size80Button = document.getElementById(`size80Button`)

birthdayButton.addEventListener(`click`, showBirthday)
congratsButton.addEventListener(`click`, showCongrats)
getWellButton.addEventListener(`click`, showGetWell)

mistyButton.addEventListener(`click`, changeMisty)
springButton.addEventListener(`click`, changeSpring)
skyButton.addEventListener(`click`, changeSky)

redButton.addEventListener(`click`, changeRed)
greenButton.addEventListener(`click`, changeGreen)
blueButton.addEventListener(`click`, changeBlue)

size40Button.addEventListener(`click`, changeSize40)
size60Button.addEventListener(`click`, changeSize60)
size80Button.addEventListener(`click`, changeSize80)

function showBirthday() {
  card.innerHTML = `Happy Birthday`
}

function showCongrats() {
  card.innerHTML = `Congrats`
}

function showGetWell() {
  card.innerHTML = `Get Well Soon`
}

function changeMisty() {
  card.style.backgroundColor = `mistyrose`
}

function changeSpring() {
  card.style.backgroundColor = `springgreen`
}

function changeSky() {
  card.style.backgroundColor = `skyblue`
}

function changeRed() {
  card.style.color = `red`
}

function changeGreen() {
  card.style.color = `green`
}

function changeBlue() {
  card.style.color = `blue`
}

function changeSize40() {
  card.style.fontSize = `40px`
}

function changeSize60() {
  card.style.fontSize = `60px`
}

function changeSize80() {
  card.style.fontSize = `80px`
}