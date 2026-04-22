// Calculadora de partidas Rankeadas

function Saldo (Vitorias , Derrotas){


    let resultado = Vitorias - Derrotas
     return resultado
}

let op = Saldo(131 , 20)

if( op<= 10){console.log(" O Herói tem de saldo " + op , "está no nível Ferro!")}
if( op>= 11 && op<=20){console.log(" O Herói tem de saldo " + op , "está no nível Bronze!")}
if( op>= 21 && op<=50){console.log(" O Herói tem de saldo " + op , "está no nível Prata!")}
if( op>= 51 && op<=80){console.log(" O Herói tem de saldo " + op , "está no nível Ouro!")}
if( op>= 81 && op<=90){console.log(" O Herói tem de saldo " + op , "está no nível Diamante!")}
if( op>= 91 && op<=100){console.log(" O Herói tem de saldo " + op , "está no nível Lendário!")}
if( op>= 101 ){console.log(" O Herói tem de saldo " + op , "está no nível Imortal!")}
