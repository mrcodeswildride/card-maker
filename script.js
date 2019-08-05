var box = document.getElementById("box");

var noTextButton = document.getElementById("noText");
var happyBirthdayButton = document.getElementById("happyBirthday");
var congratsButton = document.getElementById("congrats");
var getWellSoonButton = document.getElementById("getWellSoon");

var noBackgroundButton = document.getElementById("noBackground");
var mistyRoseButton = document.getElementById("mistyRose");
var springGreenButton = document.getElementById("springGreen");
var skyBlueButton = document.getElementById("skyBlue");

var defaultColorButton = document.getElementById("defaultColor");
var redButton = document.getElementById("red");
var greenButton = document.getElementById("green");
var blueButton = document.getElementById("blue");

var defaultSizeButton = document.getElementById("defaultSize");
var size40Button = document.getElementById("size40");
var size60Button = document.getElementById("size60");
var size80Button = document.getElementById("size80");

noTextButton.addEventListener("click", showNoText);
happyBirthdayButton.addEventListener("click", showHappyBirthday);
congratsButton.addEventListener("click", showCongrats);
getWellSoonButton.addEventListener("click", showGetWellSoon);

noBackgroundButton.addEventListener("click", setNoBackground);
mistyRoseButton.addEventListener("click", setMistyRose);
springGreenButton.addEventListener("click", setSpringGreen);
skyBlueButton.addEventListener("click", setSkyBlue);

defaultColorButton.addEventListener("click", setDefaultColor);
redButton.addEventListener("click", setRed);
greenButton.addEventListener("click", setGreen);
blueButton.addEventListener("click", setBlue);

defaultSizeButton.addEventListener("click", setDefaultSize);
size40Button.addEventListener("click", setSize40);
size60Button.addEventListener("click", setSize60);
size80Button.addEventListener("click", setSize80);

function showNoText() {
    box.innerHTML = "";
}

function showHappyBirthday() {
    box.innerHTML = "Happy Birthday";
}

function showCongrats() {
    box.innerHTML = "Congrats";
}

function showGetWellSoon() {
    box.innerHTML = "Get Well Soon";
}

function setNoBackground() {
    box.style.backgroundColor = "";
}

function setMistyRose() {
    box.style.backgroundColor = "mistyrose";
}

function setSpringGreen() {
    box.style.backgroundColor = "springgreen";
}

function setSkyBlue() {
    box.style.backgroundColor = "skyblue";
}

function setDefaultColor() {
    box.style.color = "";
}

function setRed() {
    box.style.color = "red";
}

function setGreen() {
    box.style.color = "green";
}

function setBlue() {
    box.style.color = "blue";
}

function setDefaultSize() {
    box.style.fontSize = "";
}

function setSize40() {
    box.style.fontSize = "40px";
}

function setSize60() {
    box.style.fontSize = "60px";
}

function setSize80() {
    box.style.fontSize = "80px";
}
