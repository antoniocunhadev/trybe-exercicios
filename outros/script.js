const pai = document.getElementById("pai"); // Recupere o elemento com o id pai
const irmaoElementoOndeVoceEsta = document.createElement("section"); // Crie um novo elemento
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento com o id `pai`

console.log(document.getElementById("irmaoElementoOndeVoceEsta"));

const ondeEuEstou = document.getElementById("elementoOndeVoceEsta");
const terceiroEUltimoFilho = document.createElement("section");
terceiroEUltimoFilho.id = "terceiroEUltimoFilho";
ondeEuEstou.appendChild(terceiroEUltimoFilho);

console.log(document.getElementById("terceiroEUltimoFilho"));

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoDoFilho = document.createElement("section");
filhoDoFilho.id = "filhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoDoFilho);

console.log(document.getElementById("filhoDoFilho"));

console.log(document.getElementById('filhoDoFilho').parentElement.parentElement.parentElement.children[2]);