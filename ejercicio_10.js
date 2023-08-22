const readline = require('readline');

// Preguntas y respuestas correctas
const preguntas = [
    "¿Html es un leguanje de programación?",
    "¿Javascript se conecta directamente a la base de datos?",
    "¿Java se encuentra del lado del servidor?",
    "¿CSS esta en el lado del servidor'?",
    "¿El dato de tipo booleano se caracteriza por ser una cadena de texto?"
];
const respuestasCorrectas = ["falso", "falso", "verdadero", "falso", "falso"];

// Contador de puntos
let puntos = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para realizar el examen
function realizarExamen(preguntas, respuestasCorrectas, indice) {
    if (indice < preguntas.length) {
        rl.question(`${preguntas[indice]}: `, (respuesta) => {
            if (respuesta.toLowerCase() === respuestasCorrectas[indice]) {
                puntos += 10;
            }
            realizarExamen(preguntas, respuestasCorrectas, indice + 1);
        });
    } else {
        console.log(`¡Examen completado! Puntos obtenidos: ${puntos}`);
        rl.close();
    }
}

console.log("Bienvenido al examen de conocimientos responder falso o verdadero.");
realizarExamen(preguntas, respuestasCorrectas, 0);
