let bill = document.querySelector(".bill");
let people = document.querySelector(".people");
let custom = document.querySelector(".custom");
let tipBtns = document.querySelector(".tip-section");
let amount = document.querySelector(".amount");
let total = document.querySelector(".total");
let error = document.querySelector(".error");
let reset = document.querySelector(".btn-reset")
let tipPerc = 0;
let tip = 0;
let billValue = 0;
let numPeople = 0;


bill.addEventListener('blur',(e) => {
    billValue = e.target.value;
})

tipBtns.addEventListener('click',(e) => {
    tipPerc = e.target.value;
    tip = billValue * (tipPerc/100);
})

custom.addEventListener('blur',(e) => {
    tipPerc = e.target.value;
    tip = billValue * (tipPerc/100);
})

people.addEventListener('input',(e) => {
    numPeople = e.target.value;
    if (numPeople == 0 || numPeople == ""){
        error.classList.add("visible");
        people.style.border = "2px solid red";
        amount.textContent = "$0.00";
        total.textContent = "$0.00";
    }
    else {
        error.classList.remove("visible");
        people.style.border = "2px solid hsl(172, 67%, 45%)";
        tipPerPerson = tip/numPeople;
        totalPerPerson = billValue/numPeople + tipPerPerson;
        amount.textContent = `$${tipPerPerson.toFixed(2)}`;
        total.textContent = `$${totalPerPerson.toFixed(2)}`;
    }
    
})

reset.addEventListener('click',() => {
    error.classList.remove("visible");
    amount.textContent = "$0.00";
    total.textContent = "$0.00";
    bill.value = "";
    custom.value = ""
    tipPerc = 0;
    tip = 0;
    billValue = 0;
    numPeople = 0;
})
