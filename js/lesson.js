const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');
console.log(phoneButton)

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'Все правильно!'
        phoneInput.style.borderColor = 'green'
        phoneInput.style.Color = 'green'
        console.log("de")
    }
    else {
        phoneResult.innerHTML = 'Неправильно!'
        phoneInput.style.borderColor = 'red'
        phoneInput.style.Color = 'red'
        console.log("rrr")
    }

}