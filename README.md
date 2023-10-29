# BootcampJS - Módulo 4

A continuación explico los pasos para que funcione este display de turnos.

1. He declarado la variable **turno** como `let`, dándole el valor de 0.

2. Después he creado los botones necesarios en HTML y he capturado el `id` declarando las variable según lo que iba necesitando, como ejemplo:

   `const botonSiguiente = document.getElementById('turnoSiguiente') as HTMLButtonElement;`

3. Una vez creadas las variables que necesitaba, he creado la función actualizar turno de la siguiente manera:

   `const actualizarTurno = () => turnoActual.innerText = turno.toString().padStart(2, '0');`

4. El paso siguiente ha sido asignar a cada elemento HTML un `.addEventListener` y darle funcionalidad. En el caso del `botonAnterior` he hecho una comparación para que no haya turnos negativos.
   <br/>
   <br/>

# Challenge

Para conseguir que los números tengan siempre un 0 delante, al crear la función `actualizarTurno`, hago que turno pase a ser un string y luego le paso `.padStart(2, '0')`;
<br/>
<br/>

# Avanzado

1. Para empezar he creado en html los componentes necesarios y después he declarado las variables de `turnoManual` y `botonCambiarTurno`.

2. Después he creado la función `cambiarTurno` con un if, que sirve para evitar que si le dan al botón de Cambiar sin haber rellenado el input, no salga NaN en el display.

3. Por último he creado el evento para el botón y así se cambie manualmente.
   <br/>
   <br/>

# Extra

Haciendo un poco de búsqueda, he añadido un último evento extra, para que no se puedan añadir al input números negativos ni decimales. Lo he hecho un poco por evitar posibles errores.
