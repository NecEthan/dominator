// TODO: get a reference to the #button and #txt and #output
// TODO: add an event listener to the #button that changes the text in #output to the uppercase value of #txt

const button = document.getElementById('btn');
const txt = document.getElementById('txt');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    let text = txt.value
    output.innerHTML = text.toLowerCase()
})