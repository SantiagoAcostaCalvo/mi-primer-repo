import * as readline from 'readline';

// Candidatos
let candidato1: string = "Ana Maria Suarez";
let candidato2: string = "Diego Acero";

// Contadores de votos
let votosCandidato1: number = 0;
let votosCandidato2: number = 0;

let votante: number = 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Simulación de votación con 10 votantes usando un ciclo while
function votar() {
    while (votante <= 10) {
        rl.question(`Votante ${votante}: ¿Por quién deseas votar? (${candidato1} / ${candidato2}) `, (voto) => {
            if (voto === candidato1) {
                votosCandidato1++;
                console.log(`Votante ${votante} ha votado por ${candidato1}`);
            } else if (voto === candidato2) {
                votosCandidato2++;
                console.log(`Votante ${votante} ha votado por ${candidato2}`);
            } else {
                console.log("Voto inválido. Por favor, selecciona uno de los candidatos.");
                return votar(); // Repetir la solicitud para el mismo votante
            }

            votante++;

            if (votante <= 10) {
                votar();
            } else {
                // Determinar el ganador y el perdedor
                let ganador: string, perdedor: string;

                if (votosCandidato1 > votosCandidato2) {
                    ganador = candidato1;
                    perdedor = candidato2;
                } else if (votosCandidato2 > votosCandidato1) {
                    ganador = candidato2;
                    perdedor = candidato1;
                } else {
                    ganador = "Empate";
                    perdedor = "Empate";
                }

                console.log(`Resultado de la votación:`);
                console.log(`${candidato1}: ${votosCandidato1} votos`);
                console.log(`${candidato2}: ${votosCandidato2} votos`);
                console.log(`Ganador: ${ganador}`);
                console.log(`Perdedor: ${perdedor}`);

                rl.close();
            }
        });
        break; // Salir del ciclo para evitar bucle infinito
    }
}

votar();
