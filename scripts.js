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
const ta = 200
const tb = 20
const tc = 20

if (ta + tb + tc < 180) {
  console.log (true)
}
else if (ta + tb + tc > 180) {
  console.log (false)
}

// sexto exercicio
movimento = 'cao'
switch (movimento) {
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
let porcentagem = 101

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

let a = 11
let b = 10
let c = 9

if (a % 2 || b % 2 || c % 2) {
  console.log (true)
} else {
  console.log (false)
}