import * as readline from 'readline';

// Valores de monedas y billetes
const valoresMonedas: number[] = [500, 1000];
const valoresBilletes: number[] = [2000, 5000];

// Costo del servicio
const costoServicio: number = 500;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bienvenido al sistema de administración de pago de la pesa electrónica.");

let totalPagado: number = 0;

// Ciclo do while para ingresar monedas y billetes hasta alcanzar o superar el costo del servicio
const ingresarPago = () => {
    rl.question("Ingresa el tipo de pago (moneda / billete): ", (tipoPago) => {
        tipoPago = tipoPago.toLowerCase();

        if (tipoPago === "moneda") {
            rl.question("Ingresa el valor de la moneda (500 / 1000): ", (valor) => {
                valor = parseInt(valor);

                if (valoresMonedas.includes(valor)) {
                    totalPagado += valor;
                    console.log(`Total pagado: ${totalPagado} pesos.`);
                } else {
                    console.log("Valor no válido. Ingresa un valor de moneda válido.");
                }
                calcularCambio(totalPagado);
            });
        } else if (tipoPago === "billete") {
            rl.question("Ingresa el valor del billete (2000 / 5000): ", (valor) => {
                valor = parseInt(valor);

                if (valoresBilletes.includes(valor)) {
                    totalPagado += valor;
                    console.log(`Total pagado: ${totalPagado} pesos.`);
                } else {
                    console.log("Valor no válido. Ingresa un valor de billete válido.");
                }
                calcularCambio(totalPagado);
            });
        } else {
            console.log("Tipo de pago no válido. Ingresa 'moneda' o 'billete'.");
        }
    });
};

// Ciclo do while para ingresar monedas y billetes hasta alcanzar o superar el costo del servicio
const continuarPago = () => {
    if (totalPagado < costoServicio) {
        ingresarPago();
    }
};

ingresarPago();
continuarPago();

// Función para calcular el cambio y mostrar el mensaje final
function calcularCambio(totalPagado: number) {
    if (totalPagado === costoServicio) {
        console.log("Pago exacto. ¡Gracias por utilizar la pesa electrónica!");
    } else if (totalPagado < costoServicio) {
        console.log(`Falta dinero para completar el pago. Debes pagar al menos ${costoServicio - totalPagado} pesos.`);
        continuarPago();
    } else {
        let cambio: number = totalPagado - costoServicio;
        console.log(`Cambio a devolver: ${cambio} pesos. ¡Gracias por utilizar la pesa electrónica!`);
        console.log("¡Vuelve pronto!");
        rl.close();
    }
}
