/*let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push ('Passear');
tasksList.push ('Comer');

console.log(tasksList.length); */
// 3

/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push ('Andar')

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro */ 

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
tasksList.unshift('Andar')
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']