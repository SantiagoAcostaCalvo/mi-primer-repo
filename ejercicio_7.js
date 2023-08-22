// Simulación de entrada del usuario (cambiar a "devolucion" o "perdida")
let accionUsuario = "devolucion";

// Datos de ejemplo
let tipoItem = "revista"; // Cambiar a "revista" para simular revistas
let diasRetraso = 5;
let ejemplaresPerdidos = 0;

// Constantes de costos y tarifas
const TARIFA_DIARIA_LIBRO = 600;
const TARIFA_DIARIA_REVISTA = 500;
const COSTO_POR_EJEMPLAR_PERDIDO = 10000;

// Variables para cálculos y mensajes
let montoMulta = 0;
let mensaje;

// Solicitar al usuario que indique si es una devolución o pérdida
switch (accionUsuario) {
    case "devolucion":
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
    case "perdida":
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
