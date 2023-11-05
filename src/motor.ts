import { partida } from "./model";

// Pedir carta
export const dameCarta = () => {

    partida.carta = Math.floor(Math.random() * 10 + 1);

    if (partida.carta > 7) {
        partida.carta = partida.carta + 2;
    };

    if (partida.cartasMostradas.includes(partida.carta)) {
        dameCarta();
        return;
    };

    partida.cartasMostradas.push(partida.carta);
};