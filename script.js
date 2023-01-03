// let ondeTo = document.getElementById('elementoOndeVoceEsta');
// ondeTo.removeChild(ondeTo.firstElementChild)
// console.log(ondeTo);

// utilizando 'for' quando existe mais de um filho

let ondeTo = document.getElementById("elementoOndeVoceEsta");

let filhos = ondeTo.childNodes;

for (let index = filhos.length - 1; index >= 0; index -= 1) {
  const filhoAtual = filhos[index];

  if (filhoAtual.id === "elementoOndeVoceEsta") {
    filhoAtual.removeChild(filhoAtual.firstElementChild);
  }
}
console.log(filhoAtual)
