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
