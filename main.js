// Ejercicio 1
// let numero = parseInt(prompt("Ingresa un número:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }


//Ejercicio 2
// let suma = 0;
// let numero;

// while (true) {
//     numero = parseInt(prompt("Ingresa un número (0 para terminar):"));

//     if (numero === 0) {
//         break;
//     }
//     suma += numero;
// }
// console.log(`La suma total es: ${suma}`);

//Ejercicio 3
// let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let intento;

// while (true) {
//     intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
//     if (isNaN(intento)) {
//         console.log("Por favor, ingresa un número válido.");
//         continue;
//     }
//     if (intento < numeroSecreto) {
//         console.log("El número es mayor. Intenta de nuevo.");
//     } else if (intento > numeroSecreto) {
//         console.log("El número es menor. Intenta de nuevo.");
//     } else {
//         console.log("¡Felicidades! Adivinaste el número.");
//         break;
//     }
// }

//Ejercicio 4
// let numero = parseInt(prompt("Ingresa un número:"));
// if (isNaN(numero)) {
//     console.log("Por favor, ingresa un número válido.");
// } else {
//     function esPrimo(num) {
//         if (num <= 1) {
//             return false;
//         }
//         for (let i = 2; i <= Math.floor(num / 2); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     if (esPrimo(numero)) {
//         console.log(`${numero} es un número primo.`);
//     } else {
//         console.log(`${numero} no es un número primo.`);
//     }
// }

//Ejercicio 5
// let numero = parseInt(prompt("Ingresa un número:"));

// if (isNaN(numero)) {
//     console.log("Por favor, ingresa un número válido.");
// } else {
//     console.log(`Los divisores de ${numero} son:`);
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             console.log(i); 
//         }
//     }
// }

//Ejercicio 6
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//     console.log(`Elemento ${i + 1}: ${array[i]}`);
// }

//Ejercicio 7
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     let doble = array[i] * 2;
    
//     console.log(`El doble de ${array[i]} es ${doble}`);
// }

// //Ejercicio 8
// let familia = [
//     {
//         nombre: "Juan",
//         edad: 45,
//         relacion: "Padre",
//         ocupacion: "Ingeniero"
//     },
//     {
//         nombre: "Ana",
//         edad: 43,
//         relacion: "Madre",
//         ocupacion: "Doctora"
//     },
//     {
//         nombre: "Carlos",
//         edad: 20,
//         relacion: "Hijo",
//         ocupacion: "Estudiante"
//     },
//     {
//         nombre: "Lucía",
//         edad: 18,
//         relacion: "Hija",
//         ocupacion: "Estudiante"
//     },
//     {
//         nombre: "Rosa",
//         edad: 75,
//         relacion: "Abuela",
//         ocupacion: "Jubilada"
//     }
// ];
// for (let i = 0; i < familia.length; i++) {
//     let persona = familia[i];
//     let mensaje = `Hola, mi nombre es ${persona.nombre}. Tengo ${persona.edad} años. Soy ${persona.relacion} y trabajo como ${persona.ocupacion}.`;
//     console.log(mensaje);
// }

//Ejercicio 9
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         console.log(numeros[i]);
//     }
// }

//Ejercicio 10
// let sumaPares = 0;
// let sumaImpares = 0;
// let numero;

// while (true) {
//     numero = parseInt(prompt("Ingresa un número (0 para terminar):"));

//     if (numero === 0) {
//         break;
//     }
//     if (numero % 2 === 0) {
//         sumaPares += numero;
//     } else {
//         sumaImpares += numero;
//     }
// }
// console.log(`La suma de los números pares es: ${sumaPares}`);
// console.log(`La suma de los números impares es: ${sumaImpares}`);

//Ejercicio 11
// let numeros = [5, 12, 7, 21, 15, 9, 18, 22, 3, 11];
// let numeroMasGrande = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > numeroMasGrande) {
//         numeroMasGrande = numeros[i];
//     }
// }
// console.log(`El número más grande en el array es: ${numeroMasGrande}`);

//Ejercicio 12
// let numeros = [23, 8, 15, 42, 4, 16, 7, 31, 12, 10];

// let numeroMasChico = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < numeroMasChico) {
//         numeroMasChico = numeros[i];
//     }
// }
// console.log(`El número más pequeño en el array es: ${numeroMasChico}`);

// Ejercicio 13
// let jugador1 = prompt("Ingresa el nombre del primer jugador:");
// let jugador2 = prompt("Ingresa el nombre del segundo jugador:");

// function determinarGanador(opcion1, opcion2) {
//     if (opcion1 === opcion2) {
//         return "Empate";
//     } else if (
//         (opcion1 === "piedra" && opcion2 === "tijeras") ||
//         (opcion1 === "tijeras" && opcion2 === "papel") ||
//         (opcion1 === "papel" && opcion2 === "piedra")
//     ) {
//         return "Jugador 1";
//     } else {
//         return "Jugador 2";
//     }
// }

// while (true) {
//     let manoJugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase();
//     let manoJugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase();
//     let resultado = determinarGanador(manoJugador1, manoJugador2);

//     if (resultado === "Empate") {
//         console.log("Empate, sigamos jugando...");
//     } else {
//         console.log(`El ganador es ${resultado === "Jugador 1" ? jugador1 : jugador2}`);
//         break;
//     }
// }

//Ejercicio 14
// let lado = 5;

// for (let i = 1; i <= lado; i++) {
//     console.log('*'.repeat(i));
// }

//Ejercicio 15
// let lado = 5;

// for (let i = lado; i > 0; i--) {
//     console.log('*'.repeat(i));
// }

// Ejercicio 16
let numeros = [34, 7, 23, 32, 5, 62, 32, 1, 45, 20];
function ordenarArray(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
ordenarArray(numeros);
console.log("Array ordenado:", numeros);
