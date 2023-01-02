// arquivo script.js

console.log(document.querySelector("#elementoOndeVoceEsta"));

console.log(
  (document.querySelector(
    "#elementoOndeVoceEsta"
  ).parentNode.style.backgroundColor = "blue")
);

console.log(
  (document.querySelector("#primeiroFilhoDoFilho").innerText = "Primeiro filho do filho")
);

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector("#elementoOndeVoceEsta").previousElementSibling);

console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);

console.log(
  (document.querySelector("#elementoOndeVoceEsta").nextElementSibling)
);

console.log(
  (document.querySelector("#pai").children[2])
);
