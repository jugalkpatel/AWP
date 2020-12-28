let output = document.querySelector('.output');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.btn-reset');
let counter = Number(output.innerText);

plus.addEventListener('click', function(e) {
    counter += 1;
    output.innerText = counter;
    checkCount(counter);
})
minus.addEventListener('click', function(e){
    counter -= 1;
    output.innerText = counter;
    checkCount(counter);
})

reset.addEventListener('click', function(e){
    output.innerText = "0";
})

function checkCount(digit) {
    if (digit > 0) {
        output.style.color = "green";
        return;
    }
    output.style.color = "red";
}
