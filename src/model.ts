// Variables y elementos

export interface Partida {
    puntuacionUsuario: number,
    carta: number,
    cartasMostradas: number[],
}

export const partida: Partida = {
    puntuacionUsuario: 0,
    carta: 0,
    cartasMostradas: [],
}