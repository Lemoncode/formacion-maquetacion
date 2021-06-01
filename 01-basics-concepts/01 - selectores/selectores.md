## Introducción.

EL objetivo del lenguaje CSS es permitir al motor del navegador pintar elementos de la página con características específicas, como colores, posición o decoración. Estas características se definen mediante propiedades a las que se les asigna un valor.

- Al conjunto **propiedad:valor** se le llama declaración.
- A la agrupación de varias declaraciones se le llama bloque y este está delimitado por corchetes.
- Una regla está compuesta de uno o varios selectores y un bloque.
- Un selector es la parte de la regla que la asocia con un elemento HTML.

## Sintaxis básica.

Podemos definir los estilos de tres formas:

- Estilos en línea: se escriben directamente en la etiqueta HTML en el atributo **style** y van separados por **;**

  ```html
  <h1 style="color:red; width:100px;"></h1>
  ```

- En el propio documento mediante la etiqueta **style**, donde escribiremos nuestras reglas.
  ```css
     <style>
          p{
              color: red;
          }
     </style>
  ```
- Mediante hojas de estilos externas, con lo que crearemos un archivo independiente con las reglas y que importaremos en el **head** de nuestro HTML de la siguiente manera:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```

---

## Tipos de Selectores.

El selector de una regla indica el elemento sobre el que se van a aplicar los extilos.

- **Selector Universal**: Hace referencia a todos los elementos del documento.

  ```css
  * {
  	/*styles...*/
  }
  ```

- **Selector Etiqueta**. Hacen referencia al propio elemento HTML, por ejemplo:
  ```css
  p {
  	/*styles...*/
  }
  ```
- **Selector Identificador**. Hace referencia al atributo **id** del elemento HTML y este debe ser único en el documento, es decir, no puede haber dos etiquetas con el mismo id.
  ```html
  <p id="id-unico"></p>
  ```
  En CSS este selector siempre comienza con **#**, por ejemplo:
  ```css
  #nombre-id-unico {
  	/*styles...*/
  }
  ```
- **Selector Clase**. Hace referencia al atributo **class** del elemento HTML pero en este caso a diferencia de como ocurre con el ID sí podemos utilizarlo en varios elementos HTML, de hecho esa es su función.
  ```html
  <p class="nombre-clase"></p>
  ```
  ```css
  .nombre-clase {
  	/*styles...*/
  }
  ```
- **Selector Descendiente**. Un elemento es descendiente de otro cuando se encuentra entre las etiquetas de apertura y de cierre del elemento padre. Son útiles por ejemplo cuando queremos que una regla aplique solo a un elemento determinado del documento. Supongamos que queremos que los enlaces que parecen en una determinada sección de nuestra página se muestren de un color determinado.

  ```html
  <a>Enlace 1</a>

  <div class="mi-seccion">
  	<a>Enlace de Seccion</a>
  </div>
  ```

  Si aplicamos el siguiente estilo:

  ```css
  a {
  	color: red;
  }
  ```

  Ese color se aplicará a todas las etiquetas `<a>` del documento, pero si utilizamos un selector descendiente como el siguiente:

  ```css
  .mi-seccion a {
  	color: red;
  }
  ```

  Este estilo solo aplicará a las etiquetas `<a>` que se encuentren dentro del elemento HTML que tiene la clase **.mi-seccion**.

- **Combinación de selectores**. La combinación de selectores nos permite aplicar una regla de estilos a varios elementos. La siguiente regla aplicará en todos los elementos `div` y `p` del documento:

  ```css
  div,
  p {
  	background: red;
  }
  ```

- **Selector de hijos**. Selecciona un elemento que es hijo directo de otro elemento. **_No debe confundirse con el selector descendiente_**. Veamos la diferencia en el siguiente ejemplo, donde el selector hijo solo afecta al primer párrafo (hijo directo de `<div class="padre">`) mientras que un selector descendiente también afectaría al resto de etiquetas `<p>`.

  ```html
  <div class="padre">
  	<p class="hijo"></p>
  	<div class="hijo">
  		<p></p>
  	</div>
  </div>
  ```

  ```css
  .etiqueta-padre > p {
  	border: 1px solid red;
  }
  ```

- **Selector adyacente y Selector general de hermanos**. El selector general de hermanos pertenece a la versión CSS 3 y generaliza el selector adyacente de CSS 2.1. El siguiente ejemplo muestra la diferencia:

  ```css
  /* selector adyacente */
  h1 + h2 {
  	...;
  }
  /* selector general de hermanos */
  h1 ~ h2 {
  	...;
  }
  ```

  ```html
  <h1>...</h1>
  <h2>...</h2>
  <p>...</p>
  <div>
  	<h2>...</h2>
  </div>
  <h2>...</h2>
  ```

  El selector adyacente solo selecciona el primer elemento `<h2>` ya que es el único hermano de `<h1>` que se encuentra justo detrás.
  El selector general de hermanos selecciona todos los elementos `<h2>` salvo el segundo ya que no tienen el mismo elemento padre.

- **Pseudo-elementos**. Los pseudo-elementos se añaden a los selectores y permiten añadir estilos a una parte contreta de ese selector o de su contenido. Podemos encontra su sintaxis de dos formas, con dos puntos dobles `::` (CSS 3) o con dos puntos `:`. Esto forma parte de **CSS3** y de un intento para distinguir pseudo-elementos de pseudo-clases.

  ```css
  selector::pseudo-elemento {
  	propiedad: valor;
  }
  ```

  **Principales pseudo-elementos**:

  - **selector::first-line**, selecciona la primera línea del texto de un elemento.
  - **selector::first-letter**, selecciona la primera letra del texto de un elemento.
  - **selector::before**, selecciona la parte anterior al contenido de un elemento para insertar nuevo contenido generado.
  - **selector::after**, selecciona la parte posterior al contenido de un elemento para insertar nuevo contenido generado.

  - **selector:nth-child(n)**, selecciona el hijo n dentro de ese elemento padre. Por ejemplo el segundo elemento de una lista.
  - **selector:nth-last-child(n)**, idéntico al anterior excepto que cuenta los elementos hacia atrás desde el final.
  - **selector:empty**, selecciona cualquier elemento hijo que no contenga contenido.
  - **selector:first-child**, selecciona el primer elemento hijo dentro del elemento padre.
  - **selector:last-child**, selecciona el último elemento hijo dentro del elemento padre.
  - **selector:nth-of-type(numero)**, selecciona uno o más elementos de un tipo dado, en función de su posición entre un grupo de hermanos. El siguiente ejemplo selecciona el cuarto elemento `<li>` de una lista.
    ```css
    li:nth-of-type(4) {
    	...;
    }
    ```
  - **selector:nth-last-of-type(numero)**, idéntico al anterior excepto que cuenta los elementos hacia atrás desde el final.
  - **selector:not(elemento)**, selecciona cualquier elemento que no sea el elemento dado.
    Algunas pseudo-clases como :nth-child(n) permiten el uso de expresiones complejas para realizar selecciones avanzadas:

    ```css
    /* selecciona todos los elementos impares de una lista */
    li:nth-child(2n + 1) {
    	...;
    }

    /* selecciona todos los elementos pares de una lista */
    li:nth-child(2n) {
    	...;
    }
    ```

---
