let info = [
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
},

{
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}
]

console.log (info[0].personagem + ' e ' + info[1].personagem)
console.log (info[0].origem + ' e ' + info[1].origem)
console.log (info[0].nota + ' e ' + info[1].origem)

if (info[0].recorrente === 'Sim' && info[1].recorrente === 'Sim') {
  console.log ('Ambos s')
}

// Leitura de Objetos
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log ('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)



