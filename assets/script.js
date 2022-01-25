let yourName = "David Wendt" 

// We'll use these variables to track the counts of each cookie type
let gb = 0 
let cc = 0 
let sugar = 0 

// Transferring IDs into ID's for JS
const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const gbTotal = document.querySelector('#qty-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const ccTotal = document.querySelector('#qty-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const sugarTotal = document.querySelector('#qty-sugar')

const total = document.querySelector('#qty-total')

// Event Listeners

//GB

gbPlusBtn.addEventListener('click', function() {
    gb++;
    gbTotal.textContent=gb;
    total.textContent=gb+cc+sugar;
})
gbMinusBtn.addEventListener('click', function() {
    if (gb > 0)
    gb--;
    gbTotal.textContent=gb;
    total.textContent=gb+cc+sugar;
})

//CC

ccPlusBtn.addEventListener('click', function() {
    cc++;
    ccTotal.textContent=cc;
    total.textContent=gb+cc+sugar;
})
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0)
    cc--;
    ccTotal.textContent=cc;
    total.textContent=gb+cc+sugar;
})

//Sugar

sugarPlusBtn.addEventListener('click', function() {
    sugar++;
    sugarTotal.textContent=sugar;
    total.textContent=gb+cc+sugar;
})
sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0)
    sugar--;
    sugarTotal.textContent=sugar;
    total.textContent=gb+cc+sugar;
})

//Text Cred
credit.textContent = `Created by ${yourName}`