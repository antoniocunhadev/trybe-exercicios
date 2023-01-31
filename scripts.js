const a = 15;
const b = 5;
const c = 10;

// primeiro exercicio
console.log  (a + b);
console.log  (a - b);
console.log  (a * b);
console.log  (a / b);
console.log  (a % b);

// segundo exercicio
if (a > b) {
  console.log ('a maior que b');
} else {
  console.log ('b maior que a');
}

// terceiro exercicio
if (a > b && a > c) {
  console.log ('A é o maior B e C');
}

else if (b > a && b > c) {
  console.log ('B é o maior A e C');
}

else {
  console.log ('C é o maior A e B');
}

// quarto exercicio
let parametro = 20;

if (parametro > 0) {
  console.log ('Positivo');
}
else if (parametro < 0) {
  console.log ('Negativo');
}
else {
  console.log ('Zero');
}

// quinto exercicio
const angloA = 40
const angloB = 40
const angloC = 100

let somaAngulos = angloA + angloB + angloC

let todosOsAngulosPositivos = angloA > 0 && angloB > 0 && angloC > 0

if (todosOsAngulosPositivos) {
  if (somaAngulos === 180) {
  console.log (true)
  }
  else {
    console.log (false)
  } 
} else {
    console.log ('Erro: ângulo inválido');
}


// sexto exercicio
movimento = 'REi'
switch (movimento.toLowerCase()) {
  case 'rei':
    console.log('uma casa em qualquer direção')
    break;
  case 'rainha':
    console.log('movimenta em todas as direções')
    break;
  case 'bispo':
    console.log('movimenta em diagonal')
    break;
  case 'cavalo':
    console.log('movimenta em L')
    break;
  case 'torre':
    console.log('movimenta em linha reta')  
    break;
  case 'peao':
    console.log('uma casa em diagonal') 
    break;
  default: 
    console.log('movimento invalido')  
}

// setimo exercicio
let porcentagem = 70

if (porcentagem >= 90 && porcentagem <= 100) {
  console.log ('A')
}
else if (porcentagem >= 80 && porcentagem <= 89) {
  console.log ('B')
}
else if (porcentagem >= 70 && porcentagem <= 79) {
  console.log ('C')
}
else if (porcentagem >= 60 && porcentagem <= 69) {
  console.log ('D')
}
else if (porcentagem >= 50 && porcentagem <= 59) {
  console.log ('E')
}
else if (porcentagem < 50 && porcentagem > -1) {
  console.log ('F')
}
else {
  console.log ('Porcentagem invalida')
}

// oitavo exercicio

let aa = 1
let bb = 1
let cc = 9

if (aa % 2 == 0 || bb % 2 == 0 || cc % 2 == 0) {
  console.log (true)
} else {
  console.log (false)
}

// nono exercicio

let aaa = 1
let bbb = 10
let ccc = 90

if (aaa % 2 == 1 || bbb % 2 == 1 || ccc % 2 == 1) {
  console.log (true)
} else {
  console.log (false)
}

// decimo exercicio
let valorDeCusto  = 100;
let impostoSobreOCusto = valorDeCusto * 20 / 100;
let valorCustoTotal = valorDeCusto + impostoSobreOCusto;
let lucroLiquido = valorCustoTotal * 50 / 100;
let valorVenda = lucroLiquido + valorCustoTotal;

if (valorDeCusto >= 0 ) {
  console.log (lucroTotal = lucroLiquido * 1000)
} 
else if (valorDeCusto <= 0) {
  console.log ('erro ao inserir valores')
}


// decimo primeiro exercicio
let inss;
let ir;

let salario = 2070

if (salario <= 1556.94) {
  inss = (salario * 8 / 100);
}
else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = (salario * 9 / 100);
}
else if (salario >= 2594.93 && salario <= 5189.82) {
  inss = (salario * 11 / 100);
}
else if (salario >= 5189.82) {
  inss = (570.88);
} 

console.log ('Valor do INSS descontado: R$' + inss)

const baseSalario = salario - inss;

if (baseSalario <= 1903.98) {
  ir = 0;
}
else if (baseSalario >= 1903.99 && baseSalario <= 2826.65) {
  ir = (baseSalario * 7.5 / 100 - 142.80);
}
else if (baseSalario >= 2826.66 && baseSalario <= 3751.05) {
  ir = (baseSalario * 15 / 100 - 354.80);
}
else if (baseSalario >= 3751.06 && baseSalario <= 4664.68) {
  ir = (baseSalario * 22.5 / 100 - 636.13);
}
else {
  ir = (baseSalario * 27.5 / 100 - 869.36);
}
console.log ('Valor do IR descontado: R$' + ir)

const salarioLiquido = baseSalario - ir;

console.log ('Salario liquido a receber R$' + salarioLiquido);





