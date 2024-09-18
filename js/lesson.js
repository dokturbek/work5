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

const tabСontentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabContentItemsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabСontentBlocks.forEach(block => {
        block.style.display = 'none'
    })
    tabContentItems.forEach(item => {
        item.classList.remove('tab_content_item_active')
    })
}
let current = 0


const showTabContent = (index=0 ) => {
    tabСontentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) =>{
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
                current = index
            }
        })
    }
}



setInterval(()=>{
    if(current< tabСontentBlocks.length){

        hideTabContent()
        showTabContent(current)
        current++
    }else{
        current=0
    }
} , 1000)



const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector("#eur")
const converter = (element, element2 , element3) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = ()=> {
            const data = JSON.parse(request.response);
            if(element === " "){
                element2.value = ' '
                element3.value = ' '
            }
            if (element.id === 'som'){
                element2.value = (element.value / data.usd).toFixed(2);
                element3.value = (element.value / data.eur).toFixed(2)
            }
            if (element.id === 'usd'){
                element2.value = (element.value * data.usd).toFixed(2);
                element3.value = (element.value*data.usd/data.eur).toFixed(2)
            }
            if (element.id === 'eur'){
                element2.value = (element.value / data.eur).toFixed(2)
                element3.value = (element.value*data.eur/data.usd).toFixed(2)
            }

        }
    }
}

converter(somInput, usdInput , eurInput)
converter(usdInput, somInput , eurInput)
converter(eurInput, somInput , usdInput)