const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-z0-9]+@gmail\.com$/i
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Все правильно!'
        gmailInput.style.borderColor = 'green'
        gmailInput.style.Color = 'green'
    }
    else {
        gmailResult.innerHTML = 'Неправильно!'
        gmailInput.style.borderColor = 'red'
        gmailInput.style.Color = 'red'

    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let posX = 0, posY = 0
// let maxWidth = 450



const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (posX <= offsetWidth && posY === 0) {
        childBlock.style.left = `${posX}px`
        posX++
        // requestAnimationFrame(moveBlock)
    } else if (posX >= offsetWidth && posY <= offsetHeight) {
        posY++
        childBlock.style.top = `${posY}px`
        // requestAnimationFrame(moveBlock)
    } else if (posY >= offsetHeight && posX >= 0) {
        posX--
        childBlock.style.left = `${posX}px`
        // requestAnimationFrame(moveBlock)
    } else if (posX <= 0 && posY >=0) {
        console.log("d")
        posY--
        childBlock.style.top=`${posY}px`
    }
    setTimeout(moveBlock,1)
}
moveBlock()



const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const result = document.querySelector('#seconds')
const resultMinute = document.querySelector('#minute')
let click = true

let seconds = 0
let interval;
let minute= 0



const timer = () =>{
    seconds++
    result.innerHTML = seconds
    if (seconds > 60){
        minute++
        seconds=0
        resultMinute.innerHTML = minute
    }
}
start.onclick = () => {
    if(click === true){
        interval= setInterval(timer, 100)
        click = false
    }


}

stop.onclick = () => {
    clearInterval(interval)
    click=true
}
reset.onclick = () => {
    clearInterval(interval)
    click=true
    minute = 0
    seconds = 0
    result.innerHTML = seconds
    resultMinute.innerHTML = minute

}