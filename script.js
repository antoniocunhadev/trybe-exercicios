// Refatorando o codigo, utilizando função
const headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "green";

function alteraCor (elemento, cor) {
  for (let index = 0; index < alteraCor.length; index += 1) {
    document.getElementsByClassName(elemento).style.backgroundColor = cor
  }
}
alteraCor ('emergency-tasks', 'blue')
alteraCor ('no-emergency-tasks', 'black')

function alteraCor (elemento, cor) {
  document.querySelector(elemento).style.backgroundColor = cor
}
alteraCor ('.emergency-tasks', 'brown')
alteraCor ('.no-emergency-tasks', 'green')

