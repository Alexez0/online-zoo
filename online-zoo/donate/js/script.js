const submitButton = document.querySelector('.submit')
const input = document.querySelector('.email')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const amount = document.querySelector('.input')
const point = document.querySelectorAll('.point')
const menuBurger = document.querySelector('.burger')
const burger = document.querySelector('.menu-burger')
const cancelCross = document.querySelector('.cancel')
const body = document.querySelector('.body')
const headerLogo = document.querySelector('.logo')

menuBurger.addEventListener('click', function (event){
    burger.style.display = 'block'
    burger.style.height = '900px'
    body.style.overflow = 'hidden'
})


cancelCross.addEventListener('click', function (event){
    burger.style.display = 'none'
    body.style.overflow = 'visible'
    burger.style.height = 'auto'
})

burger.addEventListener('click', function (event){
    burger.style.display = 'none'
    body.style.overflow = 'visible'
    burger.style.height = 'auto'
})

input.addEventListener('input',function (event){
    submitButton.classList.add("valid")
})

one.addEventListener('click',function (event){
    one.classList.add('orange')
    two.classList.remove('orange')
    three.classList.remove('orange')
    four.classList.remove('orange')
    five.classList.remove('orange')
    six.classList.remove('orange')
    seven.classList.remove('orange')
    eight.classList.remove('orange')
    amount.value = one.innerHTML.slice(1, one.length)
    point[0].classList.add('active')
    point[1].classList.remove('active')
    point[2].classList.remove('active')
    point[3].classList.remove('active')
    point[4].classList.remove('active')
    point[5].classList.remove('active')
    point[6].classList.remove('active')
    point[7].classList.remove('active')

})
two.addEventListener('click',function (event){
    two.classList.add('orange')
    one.classList.remove('orange')
    three.classList.remove('orange')
    four.classList.remove('orange')
    five.classList.remove('orange')
    six.classList.remove('orange')
    seven.classList.remove('orange')
    eight.classList.remove('orange')
    amount.value = two.innerHTML.slice(1, two.length)
    point[1].classList.add('active')
    point[0].classList.remove('active')
    point[2].classList.remove('active')
    point[3].classList.remove('active')
    point[4].classList.remove('active')
    point[5].classList.remove('active')
    point[6].classList.remove('active')
    point[7].classList.remove('active')
})

three.addEventListener('click',function (event){
    three.classList.add('orange')
    two.classList.remove('orange')
    one.classList.remove('orange')
    four.classList.remove('orange')
    five.classList.remove('orange')
    six.classList.remove('orange')
    seven.classList.remove('orange')
    eight.classList.remove('orange')
    amount.value = three.innerHTML.slice(1, three.length)
    point[2].classList.add('active')
    point[1].classList.remove('active')
    point[0].classList.remove('active')
    point[3].classList.remove('active')
    point[4].classList.remove('active')
    point[5].classList.remove('active')
    point[6].classList.remove('active')
    point[7].classList.remove('active')
})
four.addEventListener('click',function (event){
    four.classList.add('orange')
    two.classList.remove('orange')
    three.classList.remove('orange')
    one.classList.remove('orange')
    five.classList.remove('orange')
    six.classList.remove('orange')
    seven.classList.remove('orange')
    eight.classList.remove('orange')
    amount.value = four.innerHTML.slice(1, four.length)
    point[3].classList.add('active')
    point[1].classList.remove('active')
    point[0].classList.remove('active')
    point[2].classList.remove('active')
    point[4].classList.remove('active')
    point[5].classList.remove('active')
    point[6].classList.remove('active')
    point[7].classList.remove('active')
})
five.addEventListener('click',function (event){
    five.classList.add('orange')
    two.classList.remove('orange')
    three.classList.remove('orange')
    four.classList.remove('orange')
    one.classList.remove('orange')
    six.classList.remove('orange')
    seven.classList.remove('orange')
    eight.classList.remove('orange')
    amount.value = five.innerHTML.slice(1, five.length)
    point[4].classList.add('active')
    point[1].classList.remove('active')
    point[0].classList.remove('active')
    point[3].classList.remove('active')
    point[2].classList.remove('active')
    point[5].classList.remove('active')
    point[6].classList.remove('active')
    point[7].classList.remove('active')
})
six.addEventListener('click',function (event){
    six.classList.add('orange')
    two.classList.remove('orange')
    three.classList.remove('orange')
    four.classList.remove('orange')
    five.classList.remove('orange')
    one.classList.remove('orange')
    seven.classList.remove('orange')
    eight.classList.remove('orange')
    amount.value = six.innerHTML.slice(1, six.length)
    point[5].classList.add('active')
    point[1].classList.remove('active')
    point[0].classList.remove('active')
    point[3].classList.remove('active')
    point[4].classList.remove('active')
    point[2].classList.remove('active')
    point[6].classList.remove('active')
    point[7].classList.remove('active')
})
seven.addEventListener('click',function (event){
    seven.classList.add('orange')
    two.classList.remove('orange')
    three.classList.remove('orange')
    four.classList.remove('orange')
    five.classList.remove('orange')
    six.classList.remove('orange')
    one.classList.remove('orange')
    eight.classList.remove('orange')
    amount.value = seven.innerHTML.slice(1, seven.length)
    point[6].classList.add('active')
    point[1].classList.remove('active')
    point[0].classList.remove('active')
    point[3].classList.remove('active')
    point[4].classList.remove('active')
    point[5].classList.remove('active')
    point[2].classList.remove('active')
    point[7].classList.remove('active')
})
eight.addEventListener('click',function (event){
    eight.classList.add('orange')
    two.classList.remove('orange')
    three.classList.remove('orange')
    four.classList.remove('orange')
    five.classList.remove('orange')
    six.classList.remove('orange')
    seven.classList.remove('orange')
    one.classList.remove('orange')
    amount.value = eight.innerHTML.slice(1, eight.length)
    point[7].classList.add('active')
    point[1].classList.remove('active')
    point[0].classList.remove('active')
    point[3].classList.remove('active')
    point[4].classList.remove('active')
    point[5].classList.remove('active')
    point[6].classList.remove('active')
    point[2].classList.remove('active')
})




amount.addEventListener('input', function (event){
    if(amount.value===eight.textContent.slice(1, eight.length)){
        eight.classList.add('orange')
        point[7].classList.add('active')
        point[1].classList.remove('active')
        point[0].classList.remove('active')
        point[3].classList.remove('active')
        point[4].classList.remove('active')
        point[5].classList.remove('active')
        point[6].classList.remove('active')
        point[2].classList.remove('active')
        one.classList.remove('orange')
        two.classList.remove('orange')
        three.classList.remove('orange')
        four.classList.remove('orange')
        five.classList.remove('orange')
        six.classList.remove('orange')
        seven.classList.remove('orange')
    }
})
amount.addEventListener('input', function (event){
    if(amount.value===seven.textContent.slice(1, eight.length)){
        seven.classList.add('orange')
        point[6].classList.add('active')
        point[1].classList.remove('active')
        point[0].classList.remove('active')
        point[3].classList.remove('active')
        point[4].classList.remove('active')
        point[5].classList.remove('active')
        point[2].classList.remove('active')
        point[7].classList.remove('active')
        one.classList.remove('orange')
        two.classList.remove('orange')
        three.classList.remove('orange')
        four.classList.remove('orange')
        five.classList.remove('orange')
        six.classList.remove('orange')
        eight.classList.remove('orange')

    }
})
amount.addEventListener('input', function (event){
    if(amount.value===six.textContent.slice(1, eight.length)){
        six.classList.add('orange')
        point[5].classList.add('active')
        point[1].classList.remove('active')
        point[0].classList.remove('active')
        point[3].classList.remove('active')
        point[4].classList.remove('active')
        point[7].classList.remove('active')
        point[6].classList.remove('active')
        point[2].classList.remove('active')
        one.classList.remove('orange')
        two.classList.remove('orange')
        three.classList.remove('orange')
        four.classList.remove('orange')
        five.classList.remove('orange')
        seven.classList.remove('orange')
        eight.classList.remove('orange')
    }
})
amount.addEventListener('input', function (event){
    if(amount.value===five.textContent.slice(1, eight.length)){
        five.classList.add('orange')
        point[4].classList.add('active')
        point[1].classList.remove('active')
        point[0].classList.remove('active')
        point[3].classList.remove('active')
        point[7].classList.remove('active')
        point[5].classList.remove('active')
        point[6].classList.remove('active')
        point[2].classList.remove('active')
        one.classList.remove('orange')
        two.classList.remove('orange')
        three.classList.remove('orange')
        four.classList.remove('orange')
        seven.classList.remove('orange')
        eight.classList.remove('orange')
        six.classList.remove('orange')
    }
})
amount.addEventListener('input', function (event){
    if(amount.value===four.textContent.slice(1, eight.length)){
        four.classList.add('orange')
        point[3].classList.add('active')
        point[1].classList.remove('active')
        point[0].classList.remove('active')
        point[7].classList.remove('active')
        point[4].classList.remove('active')
        point[5].classList.remove('active')
        point[6].classList.remove('active')
        point[2].classList.remove('active')
        one.classList.remove('orange')
        two.classList.remove('orange')
        three.classList.remove('orange')
        five.classList.remove('orange')
        seven.classList.remove('orange')
        eight.classList.remove('orange')
        six.classList.remove('orange')
    }
})
amount.addEventListener('input', function (event){
    if(amount.value===three.textContent.slice(1, eight.length)){
        three.classList.add('orange')
        point[2].classList.add('active')
        point[1].classList.remove('active')
        point[0].classList.remove('active')
        point[3].classList.remove('active')
        point[4].classList.remove('active')
        point[5].classList.remove('active')
        point[6].classList.remove('active')
        point[7].classList.remove('active')
        one.classList.remove('orange')
        two.classList.remove('orange')
        five.classList.remove('orange')
        four.classList.remove('orange')
        seven.classList.remove('orange')
        eight.classList.remove('orange')
        six.classList.remove('orange')
    }
})
amount.addEventListener('input', function (event){
    if(amount.value===two.textContent.slice(1, eight.length)){
        two.classList.add('orange')
        point[1].classList.add('active')
        point[7].classList.remove('active')
        point[0].classList.remove('active')
        point[3].classList.remove('active')
        point[4].classList.remove('active')
        point[5].classList.remove('active')
        point[6].classList.remove('active')
        point[2].classList.remove('active')
        one.classList.remove('orange')
        three.classList.remove('orange')
        five.classList.remove('orange')
        four.classList.remove('orange')
        seven.classList.remove('orange')
        eight.classList.remove('orange')
        six.classList.remove('orange')
    }
})
amount.addEventListener('input', function (event){
    if(amount.value===one.textContent.slice(1, eight.length)){
        one.classList.add('orange')
        point[0].classList.add('active')
        point[1].classList.remove('active')
        point[7].classList.remove('active')
        point[3].classList.remove('active')
        point[4].classList.remove('active')
        point[5].classList.remove('active')
        point[6].classList.remove('active')
        point[2].classList.remove('active')
        two.classList.remove('orange')
        three.classList.remove('orange')
        five.classList.remove('orange')
        four.classList.remove('orange')
        seven.classList.remove('orange')
        eight.classList.remove('orange')
        six.classList.remove('orange')
        if(amount.value!==one.textContent.slice(1, eight.length)){
            two.classList.remove('orange')
            three.classList.remove('orange')
            five.classList.remove('orange')
            four.classList.remove('orange')
            seven.classList.remove('orange')
            eight.classList.remove('orange')
            six.classList.remove('orange')
            one.classList.remove('orange')
            point[7].classList.remove('active')

        }
    }
})