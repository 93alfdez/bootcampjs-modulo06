# BootcampJS - Módulo 5

A continuación dejo la explicación de como he creado el juego:

He declarado tres variables `let` globales como son `puntuacionUsuario`, `carta` y `cartasMostradas`, que más adelante las explico.

He capturado los div de `puntuacion`, `mensaje` e `imagen` con `getElementById`. También los botones de `botonDarCarta`, `botonReset`, `botonPlantarse`, `botonQuePasaria`.

También he separado la puntuación de los mensajes que aparecen cuando el usuario hace clic en el botón de _Me planto_ o _¿Quieres saber qué carta era la siguiente?_ para que siempre aparezca la información de la puntuación cuando está jugando o ha terminado el juego. Aclarar que antes de empezar no aparece que la puntuación es 0.

1. **Mostrar puntuación**

   He creado la variable `let puntuacionUsuario: number = 0;` para almacenar la puntuación del usuario.

   En el html he metido un div con el `id=puntuacion`. Declaré la variable `elementoPuntuacion` para recoger el id del div.

   - Hice la función `muestraPuntuacion`:

     Hay un `if` para que se muestre en el div de `puntuacion` que he capturado al principio la puntuación con una frase.

     También habia invocado la función para poder verla en el DOM con `document.addEventListener(`DOMContentLoaded`, muestraPuntuacion);`. Lo dejo comentado porque luego ya no es necesaria.
     <br/>
     <br/>

2. **Pedir carta**

   Creo la función `dameCarta` en la cual digo, que la variable `carta` antes creada como `let` y disponible en el ámbito global utilice los métodos `Math.floor(Math.random() * 10 + 1)` para que la puntuación sea un valor aleatorio entre 0 y 10, le sumamos uno para que nunca sea cero porque esa carta no existe.

   Pasamos a un `if` en el que si la `carta > 7` le sume 2, para saltarnos los valores 8 y 9 de la baraja, y así obtener el resto de valores faltantes.

   De manera adicional, utilizando la variable `cartasMostradas` que es un array vacio de números, y un `if` utilizando el método `.includes()` pasando el valor de la carta y después `cartasMostradas.push(carta)`, añado al final del array las cartas que se han utilizado para no volver a pasarlas.
   <br/>
   <br/>

3. **Mostrar carta**

   A partir de la función recomendada que se facilita en el ejercicio, creo un switch con todos los casos posibles según el valor de la carta y la imagen que le corresponde.

   También he creado un elemento `<img>` en el index, para poder cambiar el src. De manera predeterminada tiene la imagen trasera de la carta.

   En el `.addEventListener` del `botonDarCarta` llamo a las funciones `dameCarta()`,`muestraCarta(carta)` y `muestraPuntuacion(carta)` para que se ejecuten al hacer clic.
   <br/>
   <br/>

4. **Sumar Puntuación**

   En la función `muestraPuntuacion` hay un if en el cual le digo que la carta que tenga un valor mayor o igual que 10, tenga un valor de 0.5.

   A continuación se lo sumo a la puntuación del usuario, para que sume el valor al resto de cartas que hayan salido con valor menor de 10 y así aparezca en el div de manera correcta.
   <br/>
   <br/>

5. **Game Over**

   Primero he creado la funcion `gameOver` pásandole la puntuación del usuario y mediante un `if` en el que le digo que añada al `elementoPuntuacion` y al `elementoMensaje` sus respectivos mensajes, en este caso la puntuación y _Game over_.

   Además, en otro `if` deshabilito los botones de _Pide Carta_ y _Me planto_ para que no se puedan utilizar.
   <br/>
   <br/>

6. **Me planto**

   En el HTML añado un botón de _Me planto_ con su id `mePlanto`.

   En la función `plantarse` creo un if en el que añado cada uno de los mensajes solicitados.

   Cuando el usuario tiene como resultado 7.5, también deshabilito los botones de _Pide Carta_ y _Me planto_ para que no se puedan utilizar.

   En el `.addEventListener` del `botonPlantarse` llamo a la función `plantarse()` para que se ejecute al hacer clic.
   <br/>
   <br/>

7. **Nueva Partida**
   En el HTML añado un botón de _Volver a jugar_ con su id `reset`.

   Dentro de la función `reset` creo dos `if`.

   El primero de ellos deshabilito los botones _Pide Carta_, _Me planto_ y oculto el que creo más adelante de _¿Quieres saber qué carta era la siguiente?_.

   En el segundo, devuelvo la puntuación a 0, los div de puntuación y mensaje, vuelve a estar vacíos, la carta vuelve a ser la parte trasera y el array de `cartasMostradas` vuelve a estar vacío.
   <br/>
   <br/>

8. **Estila la aplicación**

   - Le he añadido un fondo de tapete.

   - He cambiado la tipografía global por _Urbanist_.

   - Colores primarios y hover de los botones cambiados.

   - He retocado las cartas para que no tengan fondo blanco y quede un poco más real.
     <br/>
     <br/>

9. **Apartado opcional | Saber lo que habría pasado**
   Creo un botón nuevo en HTML, que se llama _¿Quieres saber qué carta era la siguiente?_ con el id `quePasaria`.

   En la función `quePasaria` creo un `if` en el que le digo que si `puntuacionUsuario >= 0.5 && puntuacionUsuario <= 7` muestre el botón y deshabilite los de _Pide Carta_ y _Me planto_.

   En el `.addEventListener` del `quePasaria` llamo a las funciones `dameCarta()`,`muestraCarta(carta)` y `muestraPuntuacion(carta)` para que se ejecuten al hacer clic, además de un `if` para mostrar la puntuación que hubiese tenido el jugador y deshabilitando el botón de _¿Quieres saber qué carta era la siguiente?_.

   En el `.addEventListener` del `botonPlantarse` añado la función `quePasaria()` para que se ejecute al hacer clic y aparezca el botón que he creado cuando el usuario se planta.
   <br/>
   <br/>
