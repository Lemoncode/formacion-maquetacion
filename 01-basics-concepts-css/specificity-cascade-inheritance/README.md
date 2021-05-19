## Especificidad

_"La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados."_

La especificidad se calcula en base a la jerarquía de los selectores y en función del orden y lugar donde estén ubicados los estilos.

Aunque pensemos en términos de selectores y reglas, no es toda la regla lo que se sobrescribe, sino solo las propiedades que entran en conflicto.

Si dos reglas o propiedades en conflicto tienen la misma especificidad se aplicará siempre la de más abajo (la procesada más recientemente).

#### Jerarquía de mayor a menor:

- **Estilos inline**. Se aplican en el propio elemento HTML mediante el atributo `style`. No es la manera más habitual y tampoco la más recomendable debido a su mayor prioridad respecto al resto y por considerarse de mejor práctica tener los estilos en una hoja externa.
  ```html
  <h1 style="color: red">Hello World</h1>
  ```
- **Selectores ID**. (identificadores) Son los selectores más específicos ya que hacen referencia a un único elemento dentro del documento.
  ```html
  <h1 id="title">Hello World</h1>
  ```
- **Clases, atributos y pseudo-clases**.

  ```html
  <!-- Selector de clase -->
  <h1 class="header">Hello World!</h1>
  <style>
  	.header {
  		color: blue;
  	}
  </style>

  <!-- Selector de atributo -->
  <a href="https://lemoncode.net">Lemoncode</a>
  <style>
  	a[href="https:/lemoncode.net"] {
  		color: green;
  	}
  </style>

  <!-- Selector pseudo clase -->
  <button>Delete</button>
  <style>
  	button:hover {
  		background-color: blue;
  	}
  </style>
  ```

- **Elementos y pseudo-elementos**.

  ```html
  <!-- Selector elemento -->
  <p>This is an element selector</p>
  <style>
  	p {
  		color: red;
  	}
  </style>

  <!-- Selector pseudo elemento -->
  <p>This is a paragraph</p>
  <style>
  	p::first-letter {
  		color: green;
  	}
  </style>
  ```

#### La excepción !important.

Cuando utilizamos `!important` en una propiedad esta sobrescribe a cualquier otra teniendo prioridad sobre todas las demás.

```css
p {
	color: red !important;
}
```

- **El uso de `!important` está considerado como una mala práctica**.
- Su uso hace que el código sea más dificil de depurar.
- Utilízalo solo cuando realmente sea necesario, por ejemplo se puede dar el caso que al utilizar una librería externa como `Bootstrap` sea necesario para poder sobrescribir una propiedad.

---

## Cascada

_CSS significa hojas de estilo en cascada (cascading style sheets). La cascada, y el concepto estrechamente relacionado de especificidad son mecanismos que controlan qué regla se aplica cuando aparecen conflictos. La cascada en las hojas de estilo significa que el orden de las reglas importa en CSS: cuando dos reglas tienen la misma especificidad, se aplica la que aparece en último lugar en el CSS._

**Prioridad de menos a más en las hojas de estilos**

```
CSS Navegador -> CSS usuario -> CSS diseñador -> CSS diseñador !important -> CSS usuario !important
```

El orden de carga en el documento HTML de los archivos externos CSS, dónde se definan estilos en este y el orden de los `@import` en los archivos CSS definen el orden de los estilos que se aplican a una página, recordar que las últimas prevalecen sobre las anteriores.

---

## Herencia

El concepto de herencia en CSS significa que algunas propiedades heredan por defecto los valores establecidos en el elemento padre, pero otras no.

Las propiedades que se heredan por defecto y las que no son cuestión, en gran medida, de sentido común.

#### Control de herencia

CSS proporciona cuatro valores de propiedad universales especiales para el control de la herencia. Todas las propiedades CSS aceptan estos valores:

- **inherit** hace que la propiedad del elemento al cual se aplica tome el valor de la propiedad de su elemento padre.
- **initial** hace que la propiedad del elemento al cual se aplica tenga el mismo valor **_que esté establecido para esa propiedad_** en la hoja de estilo por defecto del navegador.
- **unset** restablece la propiedad a su valor natural, lo que significa que si la propiedad se hereda de forma natural, actúa como `inherit`, y en caso contrario como `initial`.
- **revert** restablece la propiedad a su valor heredado si hereda de su padre o al valor predeterminado establecido para esa propiedad en el elemento por el navegador o usuario. Se puede aplicar a cualquier propiedad CSS incluida la abreviatura `all`.

  ```css
  div {
  	font-weight: bold;
  }
  h3 {
  	font-weight: lighter;
  }
  ```

  ```html
  <!-- Inherit en el h3 hace que su propiedad "font-weight" tome el valor del padre, es decir "bold" -->
  <div>
  	<h3 style="font-weight: inherit;"></h3>
  </div>

  <!-- Initial restablece el texto como "font-weight: normal" porque este es el valor por defecto de la propiedad "font-weight"  -->
  <h3 style="font-weight: initial;"></h3>

  <!-- Unset restablece el texto como "font-weight: normal" porque este es el valor por defecto de la propiedad "font-weight" (unset en este caso actua como initial)  -->
  <h3 style="font-weight: unset;"></h3>

  <!-- Unset en el h3 hace que su propiedad "font-weight" tome el valor del padre, es decir "bold" (unset en este caso actua como inherit) -->
  <div>
  	<h3 style="font-weight: unset;"></h3>
  </div>

  <!-- Revert restablece el texto como "font-weight: bold" porque este es el valor por defecto de la propiedad "font-weight" en el elemento "h3" -->
  <h3 style="font-weight: revert;"></h3>
  ```

---

> <sub>Fuente: https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model</sub>
