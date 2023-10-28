const welcome: string = "Bienvenidos a la mejor tienda de stickers";
const stickerp: number = 4000;
const stickerg: number = 6000;
const CantidadStickersGrandes: number = parseInt(prompt("Ingrese la cantidad de stickers grandes que desea:"));
const CantidadStickersPequeños: number = parseInt(prompt("Ingrese la cantidad de stickers pequeños que desea:"));
const TotalStickers: number = CantidadStickersGrandes + CantidadStickersPequeños;

if (TotalStickers >= 10) {
    const TotalPagar: number = CantidadStickersGrandes * stickerg + CantidadStickersPequeños * stickerp;
    console.log(`¡Gracias por su compra! El total de su compra es $${TotalPagar}`);
} else {
    console.log("Debe comprar al menos 10 stickers");
}
