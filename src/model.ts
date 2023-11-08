export interface Partida {
    puntuacionUsuario: number,
    carta: Carta,
    cartasMostradas: Carta[],
}

interface Carta {
    valor: number,
    url: string,
}

export const partida: Partida = {
    puntuacionUsuario: 0,
    carta: { valor: 0, url: '/src/images/back.png' },
    cartasMostradas: [],
}