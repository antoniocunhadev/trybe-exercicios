// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// espalha o array items e adiciona o elemento 'Meia'
const newItems = [...items, 'Meia'];

console.log(items);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
  price: 23
}

const newInformation = {...product, ...productPrice};

console.log(newInformation);

console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800