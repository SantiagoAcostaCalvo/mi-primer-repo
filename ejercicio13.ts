import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const referencias: { [marca: string]: string[] } = {
    chevrolet: ["Captiva", "Tracker"],
    mazda: ["Modelo A", "Modelo B"],
    renault: ["Referencia X", "Referencia Y"]
};

const informacionReferencias: { [referencia: string]: string } = {
    captiva: "Chevrolet Captiva: SUV espaciosa con características de seguridad avanzadas.",
    tracker: "Chevrolet Tracker: SUV compacta con tecnología de conectividad.",
    "modelo a": "Mazda Modelo A: Sedán elegante y eficiente en combustible.",
    "modelo b": "Mazda Modelo B: SUV deportiva con rendimiento y comodidad.",
    "referencia x": "Renault Referencia X: Hatchback versátil y económico.",
    "referencia y": "Renault Referencia Y: Sedán compacto con características modernas."
};

console.log("Bienvenido a VenXtucarro - Concesionario de carros");

function mostrarReferencias(marca: string) {
    const referenciasMarca = referencias[marca];
    console.log(`Referencias disponibles de ${marca}:`);
    referenciasMarca.forEach((referencia, index) => {
        console.log(`${index + 1}. ${referencia}`);
    });
}

rl.question("Ingrese la marca de carros (Chevrolet / Mazda / Renault): ", (marcaIngresada) => {
    const marca = marcaIngresada.toLowerCase();

    switch (marca) {
        case "chevrolet":
        case "mazda":
        case "renault":
            mostrarReferencias(marca);
            rl.question("Selecciona una referencia (1/2): ", (referenciaSeleccionada) => {
                const referenciaIndex = parseInt(referenciaSeleccionada) - 1;
                const referenciaElegida = referencias[marca][referenciaIndex].toLowerCase();
                
                const informacion = informacionReferencias[referenciaElegida];
                console.log(`\nInformación de la referencia seleccionada:\n${informacion}`);
                
                rl.close();
            });
            break;
        default:
            console.log("Marca no válida. Ingrese una marca válida.");
            rl.close();
    }
});
