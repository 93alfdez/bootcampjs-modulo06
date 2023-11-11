import { partida } from "./model";


// Pedir carta
export const dameCarta = () => {

    partida.carta.valor = Math.floor(Math.random() * 10 + 1);

    if (partida.carta.valor > 7) {
        partida.carta.valor = partida.carta.valor + 2;
    };

};

export const cartasMostradas = () => {
    // Cartas Mostradas
    if (partida.cartasMostradas.includes(partida.carta)) {
        dameCarta();
        return;
    };

    partida.cartasMostradas.push(partida.carta);
}


// Actualiza la puntuación
export const actualizaPuntuacion = () => {
    let valorCarta: number = partida.carta.valor;

    if (partida.carta.valor >= 10) {
        valorCarta = 0.5;
    };

    partida.puntuacionUsuario = partida.puntuacionUsuario + valorCarta;
}