// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'manga', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['jaca', 'kiwi', 'laranja'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const fruitSaladWithAdditional = [...fruit, ...additional]
  return fruitSaladWithAdditional
};

console.log(fruitSalad(specialFruit, additionalItens));