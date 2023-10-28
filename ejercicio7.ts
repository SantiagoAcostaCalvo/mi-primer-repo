// Simulación de entrada del usuario (cambiar a "devolución" o "pérdida")
let accionUsuario: string = "devolución";

// Datos de ejemplo
let tipoItem: string = "libro"; // Cambiar a "revista" o "libro" para simular
let diasRetraso: number = 5;
let ejemplaresPerdidos: number = 0;

// Constantes de costos y tarifas
const TARIFA_DIARIA_LIBRO: number = 600;
const TARIFA_DIARIA_REVISTA: number = 500;
const COSTO_POR_EJEMPLAR_PERDIDO: number = 10000;

// Variables para cálculos y mensajes
let montoMulta: number = 0;
let mensaje: string | undefined;

// Solicitar al usuario que indique si es una devolución o pérdida
switch (accionUsuario) {
    case "devolución":
        // Solicitar al usuario la cantidad de días de retraso
        diasRetraso = 5; // Cambiar este valor por la entrada real del usuario

        // Calcular multa por retraso
        switch (tipoItem) {
            case "libro":
                montoMulta = TARIFA_DIARIA_LIBRO * diasRetraso;
                break;
            case "revista":
                montoMulta = TARIFA_DIARIA_REVISTA * diasRetraso;
                break;
            default:
                mensaje = "Tipo de item no válido.";
                break;
        }
        break;
    case "pérdida":
        // Solicitar al usuario la cantidad de ejemplares perdidos
        ejemplaresPerdidos = 2; // Cambiar este valor por la entrada real del usuario

        montoMulta = COSTO_POR_EJEMPLAR_PERDIDO * ejemplaresPerdidos;
        break;
    default:
        mensaje = "Acción no válida.";
        break;
}

// Generar mensaje final
if (mensaje === undefined) {
    mensaje = `Monto total a pagar: $${montoMulta}`;
}

console.log(mensaje);
