let pai = document.getElementById("pai");
let maisUmIrmao = document.createElement("section");
maisUmIrmao.id = "maisUmIrmao";
maisUmIrmao.innerText = "Mais um irmão";

pai.appendChild(maisUmIrmao);

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
let maisUmFilho = document.createElement("section");
maisUmFilho.id = "terceiroFilhoDoFilhoAcidente";
maisUmFilho.innerText = "Mais um filho";

elementoOndeVoceEsta.appendChild(maisUmFilho);

let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
let netinho = document.createElement("section");
netinho.id = "netinho";
netinho.innerText = "Netinho";

primeiroFilhoDoFilho.appendChild(netinho);

document.getElementById('netinho')
