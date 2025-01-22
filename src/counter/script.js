// TODO: increment and decrement the count when the buttons are clicked

const plus = document.getElementById('increment');
const minus = document.getElementById('decrement');
const count = document.getElementById('count');

plus.addEventListener('click', () => {
    let value = parseInt(count.innerText); 
    count.innerText = value + 1;
})

minus.addEventListener('click', () => {
    let value = parseInt(count.innerText); 
    count.innerText = value - 1;
})