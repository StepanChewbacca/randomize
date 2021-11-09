const arrayNumber = [];
let min = document.querySelector('.min');
let max = document.querySelector('.max');
const btnGuess = document.querySelector('.button_accept');
let genNumbers = document.querySelector('.numbers');
const btnReset = document.querySelector('.button_reset')

btnGuess.addEventListener("click", (e) => {
    e.preventDefault();          
    if (arrayNumber.length === 0) {
        if (!isValidNumber()) {
            resetAll();
            genNumbers.innerHTML = "Enter valid numbers";
            return;
        } else {
            addReadOnly(min);
            addReadOnly(max);
            min = Number(min.value);
            max = Number(max.value) + 1;
        }
    }
    const genNumber = generateNumber(min, max);
    addToArray(arrayNumber, genNumber);
});

btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    resetAll();
})

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function resetAll() {
    arrayNumber.length = 0
    min = document.querySelector('.min');
    max = document.querySelector('.max');
    removeReadOnly(min);
    removeReadOnly(max);
    max.value = "";
    min.value = "";
    genNumbers.innerHTML = "";
}

function isValidNumber() {
    return !(max.value < min.value || isNaN(min.value) || isNaN(max.value) || max.value === "" || min.value === "");
}

function addReadOnly(input) {
    input.setAttribute("readonly", "readonly");
}

function removeReadOnly(input) {
    input.removeAttribute('readonly');
}

function addToArray(array, number) {
    if (max - min === array.length) {
        genNumbers.innerHTML = "All numbers is generated";
        array.length = 0;
        min = document.querySelector('.min');
        max = document.querySelector('.max');
        removeReadOnly(min);
        removeReadOnly(max);
    } else {
        if (array.indexOf(number) === -1) {
            array.push(number);
            genNumbers.innerHTML = String(array);
        } else {
            number = generateNumber(min, max);
            addToArray(array, number);
        }
    }
}
