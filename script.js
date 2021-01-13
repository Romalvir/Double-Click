//Bring in the class using querySelector

const loveMe = document.querySelector(".picture")
const times = document.querySelector("#times")

//Add the event listener 

loveMe.addEventListener("dblclick", createHeart)



function createHeart(e) {
	//create element
const heart = document.createElement("i")
	//add the two classes
heart.classList.add("fas")
heart.classList.add("fa-heart")

const x = e.clientX
const y = e.clientY

//console.log(x,y)

//we need offset left and right values

const leftOffset = e.target.offsetLeft
const topOffset = e.target.offsetTop

const xInside = x - leftOffset
const yInside = y - topOffset

console.log(xInside,yInside)

heart.style.top = `${yInside}px`
heart.style.left = `${xInside}px`

loveMe.appendChild(heart)

}