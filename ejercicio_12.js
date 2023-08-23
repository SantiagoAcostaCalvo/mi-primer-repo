const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const equipos = {};
const fechas = 3;
let fechaActual = 1;

console.log("Bienvenido al simulador de resultados de la Champions League.");

function ingresarResultados() {
    if (fechaActual <= fechas) {
        console.log(`\nIngresa los resultados de la fecha ${fechaActual}:`);
        ingresarEquipo(1);
    } else {
        calcularPuntos();
    }
}

function ingresarEquipo(equipoActual) {
    if (equipoActual <= 3) {
        rl.question(`Equipo ${equipoActual}: `, (equipo) => {
            rl.question(`Marcador: `, (marcador) => {
                equipos[equipo] = equipos[equipo] || { puntos: 0, goles: 0 };
                equipos[equipo].goles += parseInt(marcador);
                
                const marcadorLocal = parseInt(marcador.split('-')[0]);
                const marcadorVisitante = parseInt(marcador.split('-')[1]);
                
                if (marcadorLocal > marcadorVisitante) {
                    equipos[equipo].puntos += 3;
                } else if (marcadorLocal === marcadorVisitante) {
                    equipos[equipo].puntos += 1;
                }
                
                ingresarEquipo(equipoActual + 1);
            });
        });
    } else {
        fechaActual++;
        ingresarResultados();
    }
}

function calcularPuntos() {
    const equiposOrdenados = Object.keys(equipos).sort((equipoA, equipoB) => {
        if (equipos[equipoA].puntos === equipos[equipoB].puntos) {
            return equipos[equipoB].goles - equipos[equipoA].goles;
        }
        return equipos[equipoB].puntos - equipos[equipoA].puntos;
    });

    console.log("\nRanking de equipos:");
    equiposOrdenados.forEach((equipo, index) => {
        console.log(`${index + 1}. ${equipo} - Puntos: ${equipos[equipo].puntos} - Goles: ${equipos[equipo].goles}`);
    });

    console.log("\n¡Gracias por usar el simulador de resultados de la Champions League!");
    rl.close();
}

ingresarResultados();
