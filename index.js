let cardNum = document.getElementById('card-num');
let cardName = document.getElementById('card-name');
let cardMtn = document.getElementById('card-mth');
let cardYr = document.getElementById('card-yr');
let cvc = document.getElementById('cvc');
let name1 = document.getElementById('name');
let num = document.getElementById('num');
let mtn = document.getElementById('mth');
let yr = document.getElementById('yr');
let cvcInput = document.getElementById('cvc-input');

function maxLength(first, second, length) {
    if (first.value.length > length) {
        first.value = first.value.slice(0, length)
    } else {
        second.innerHTML = first.value
    }
}

name1.addEventListener('input', () => {
   maxLength(name1, cardName, 20)
   if (!name1.value) {
        cardName.innerHTML = 'Jane Appleseed'
    }
})

num.addEventListener('input', () => {
    num.value = num.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    maxLength(num, cardNum, 19)
    if (!num.value) {
        cardNum.innerHTML = '0000 0000 0000 0000'
    }
})

mtn.addEventListener('input', () => {
    maxLength(mtn, cardMtn, 2)
    if (!mtn.value) {
        cardMtn.innerHTML = '00'
    }
})

yr.addEventListener('input', () => {
    maxLength(yr, cardYr, 2)
    if (!yr.value) {
        cardYr.innerHTML = '00'
    }
})

cvcInput.addEventListener('input', () => {
    maxLength(cvcInput, cvc, 3)
    if (!cvcInput.value) {
        cvc.innerHTML = '000'
    }
})
