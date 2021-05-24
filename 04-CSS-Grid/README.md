# CSS Grid

### Qué es CSS Grid

Es un sistema de maquetación en regilla pensado para distribuir el contenido en filas y/o columnas. También permite dividir una página o elemento en áreas o regiones.
El grid se define en la propiedad `display` con el valor `display: grid` o `display: inline-grid`. Una vez definido, todos los hijos directos se convertirán en elementos de la cuadrícula.

![Ejemplo grid](./assets/grid.png)

### Partes de un Grid

- **Grid Tracks o pistas** es el espacio entre dos líneas. Definen la fila (grid row) o la columna (grid column).

  ![Ejemplo track](./assets/grid-tracks.png)

- **Líneas de cuadrícula** se crean al definir las pistas. La numeración de la siguiente imagen muestra el número de línea vertical y horizontal.

  ![Ejemplo línea](./assets/grid-lineas.png)

- **Grid Cell o celda** es la división más pequeña que puede tener un grid. Está delimitada por dos líneas verticales y dos horizontales. Si no tenemos definidas estas celdas de manera explícita Grid generará de manera automática una celda por cada elemento hijo que encuentre y este pasará a ocupar dicha celda.

  ![Ejemplo celda](./assets/grid-cell.png)

- **Grid Áreas** se crean a partir de una o más celdas y siempre deben ser de naturaleza rectangular, es decir no podemos crear un área en forma de "T" por ejemplo.

  ![Ejemplo área](./assets/grid-area.png)

- **Grid Gutters o Gap** es un espacio que podemos controlar y que separa cada pista o track. Es la parte sombreada de la siguiente imagen.

  ![Ejemplo gutters](./assets/grid-gutter.png)

### Propiedades

#### Estructura del grid

- **grid-template-columns** define el ancho de una o varias columnas de manera individual `grid-template-columns: 50px 20% 1fr auto;`
- **grid-template-rows** define el alto de una o varias filas de manera individual `grid-template-rows: 100px 100px 200px;`
- **grid-template-areas** define y da nombre a cada uno de los **grid area**

  ```css
  grid-template-areas:
  	"a b c"
  	"a b c"
  	"a d e";
  ```

  ![Ejemplo template area](./assets/grid-template-area.png)

- **grid-template** propiedad que engloba las tres anteriores (shorthand para area, row y column).

  ```css
  grid-template:
  	"a a a" 40px
  	"b c c" 40px
  	"b c c" 40px / 1fr 1fr 1fr;
  ```

- **grid-auto-columns** define el ancho de todas las posibles columnas no definidas en el Grid Container `grid-auto-columns: 200px;` `grid-auto-columns: auto;`
- **grid-auto-rows** define el alto de todas las posibles filas no definidas en el Grid Container `grid-auto-rows: 200px;` `grid-auto-rows: auto;`
- **grid-auto-flow** Define la dirección en donde se ubicaran los elemento que no estén definidos como filas y columnas dentro del Grid Container.

  > Ejemplo: Tenemos definido un grid container de 2\*2 donde caben 4 elementos pero es posible que nuestra aplicación genere algún elemento más.
  > Con la propiedad **grid-auto-flow: column** y **grid-auto-columns: 100px** establecemos que todo elemento que venga de más se establezca en nuevas columnas con un ancho de 100px.

#### Posicionar elementos en el grid

- **grid-row-start || grid-row-end || grid-column-start || grid-column-end** se pueden usar de manera individual o conjunta para definir el inicio y fin de la fila y columna. Por ejemplo, si queremos que un elemento ocupe de la fila 2 y las columnas 2 y 3 lo indicaríamos así:

  ```css
  .element {
  	grid-row-start: 2; /* define el inicio desde la línea de fila indicada */
  	grid-row-end: 3; /* define el fin en la línea de fila indicada */
  	grid-column-start: 2; /* define el inicio desde la línea de columna indica */
  	grid-column-end: 4; /* define el fin en la línea de columna indicada */
  }
  ```

  ![posicionando elementos](./assets/grid-element-position1.png)

  **grid-row || grid-column** son los shorthand para poder definir principio y fin en una sóla propiedad:

  ```css
  .element {
  	grid-row: 2 / 3; /* define el inicio y fin respecto a filas */
  	grid-column: 2 / 4; /* define el inicio y fin respecto a columnas */
  }
  ```

  **Otros valores** que podemos utilizar:

  - **-1** como valor de fin de fila o columna indica que ocupe todo el espacio de fila o columna.
  - **span** (se extiende) el elemento ocupará el número de filas o columnas indicado, sólo se puede usar con `grid-row` y `grid-column`

    ```css
    grid-column: 1 / span 4;
    ```

  - **auto** define el inicio o final de una fila o columna de manera automática
    ```css
    grid-row: 1 / auto;
    ```
