const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function bloqueLink(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', bloqueLink);

// Ou utilizar de maneira direta 

// HREF_LINK.addEventListener('click', (event) => {
//   event.preventDefault();
// })

// function clickNot (event) {
//   event.preventDefault();
// } 
// INPUT_CHECKBOX.addEventListener('click', clickNot)

// Ou utilizar de maneira direta

INPUT_CHECKBOX.addEventListener('click', (event) => {
  event.preventDefault();
})

function getLetterA (event) {
  const character = event.key;
  if (character !== 'a') {
  event.preventDefault();
  }
}
INPUT_TEXT.addEventListener('keypress', getLetterA)

// Ou utilizar de maneira direta 

INPUT_TEXT.addEventListener('keypress', (event) => {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
})

