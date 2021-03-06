# Modelo de caja

Para **CSS** todo elemento **HTML** es tratado como una caja. El modelo define cómo funcionan juntas las diferentes partes de una caja para crear un elemento que puedas ver en tu página.

####Partes de una caja

- **Contenido**: Es el área donde se muestra el contenido y su tamaño puede ser modificado con las propiedades `width` y `height`.
- **Relleno**: O **padding** es el espacio en blanco alrededor del contenido y podemos controlar su tamaño con la propiedad `padding` y otras relacionadas.
- **Borde**: Envuelve el contenido y el relleno de la caja. Es controlado por la propiedad `border` y otras relacionadas.
- **Margen**: Es la capa más externa y envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Controlamos su tamaño con la propiedad `margin` y otras relacionadas.
  ![Modelo de caja](box-model.png)

> **Debemos tener claro y saber diferenciar dos aspectos; el espacio que ocupa una caja y el tamaño de esa caja. Lo primero hace referencia al espacio que ocupa la caja en la página. Lo segundo al tamaño visible de la caja.**

### Tipos de modelo de cajas.

Existe un modelo de cajas estándar y un modelo de cajas alternativo.

#### Modelo de caja estándar

Es el modelo establecido por defecto. En este modelo el relleno y el borde se suman al ancho y alto de la caja para obtener el tamaño real visible que ocupa.
Si tenemos el siguiente CSS para nuestra caja:

```css
.box {
	width: 350px;
	height: 150px;
	margin: 10px;
	padding: 25px;
	border: 5px solid black;
}
```

El espacio que ocupa nuestra caja usando el modelo de cajas estándar será en realidad de 410 px (350 + 25 + 25 + 5 + 5); y su altura, de 210 px (150 + 25 + 25 + 5 + 5), porque el área de relleno y el borde se añaden al ancho que se utiliza para el contenido de la caja.
![Modelo de caja estándar](standard-box-model.png)

> El margen no se cuenta para el tamaño real de la caja ya que este no afecta al contenido, tan solo al espacio total que la caja ocupa en la página.

#### Modelo de caja alternativa

Con este modelo el ancho y alto será el establecido con las propiedades `width` y `height` y será el espacio interior para el contenido el que se reduzca al añadir un border o relleno. Si tomamos el ejemplo anterior nuestra caja quedaría ahora de la siguiente manera.
![Modelo de caja estándar](alternate-box-model.png)

Para establecer el modelo de caja como **alternativo** en un elemento lo hacemos con la siguiente propiedad.

```css
.box {
	box-sizing: border-box;
}
```

Si queremos activar este modelo por defecto en todos los elementos de nuestra página podemos hacerlo con el siguiente código.

```css
html {
	box-sizing: border-box;
}
*,
*::before,
*::after {
	box-sizing: inherit;
}
```

Añadimos la propiedad `box-sizing` en el elemento `<html>` y hacemos que el resto de elementos hereden el valor de esa propiedad.

### Comportamiento de una caja.

Todo elemento HTML tiene definido por defecto un tipo de comportamiento el cual puede ser modificado como veremos más adelante.

> Una caja por defecto puede ser de dos tipos, `caja en bloque` o `caja en línea` y esto define como se comportará en relación a la página y al resto de elementos.

#### Comportamiento por defecto de la caja en bloque:

- Fuerza un salto de línea al llegar al final.
- Ocupa el 100% del ancho de su contenedor.
- Se respetan las propiedades `width` y `height`.
- El relleno (padding), el margen y el borde mantienen a otros elementos alejados de la caja.

#### Comportamiento por defecto de la caja en línea:

- La caja no fuerza ningún salto de línea al llegar al final.
- Las propiedades `width` y `height` no se aplican.
- Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
- Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.

#### Comportamiento especial inline-block:

Existe un tercer tipo de comportamiento especial que proporciona un punto medio entre `en bloque` y `en línea`. Esto es útil para situaciones en las que no deseas que un elemento fuerce un salto de línea, pero sí deseas que se respeten las propiedades width y height para evitar superposiciones.

- Se respetan las propiedades `width` y `height`.
- El relleno (padding), el margen y el borde mantienen a otros elementos alejados de la caja.
- No se fuerza un salto de línea y solo se hace más grande que su contenido si añades las propiedades width y height explícitamente.

> No es un comportamiento establecido por defecto por lo que tendrá que ser proporcionado explícitamente al elemento.

### Visualización interna y externa de una caja.

Ambas visualizaciones están condicionadas por el comportamiento de la caja.

- **Externa**. Determina como un elemento interactua y fluye respecto al documento y/o los elementos que le rodean.

- **Interna**. Determina cómo se disponen e interactúan los elementos dentro de una caja. Por defecto se dispondrán según la visualización externa de cada elemento o flujo normal (flow layout).

---

## Propiedad display

La propiedad display establece el tipo de visualización tanto externa como interna de un elemento.

Principales valores:

- **{display: block}**. Comportamiento externo en bloque e interno con su flujo normal o flow layout.
- **{display: inline}**. Comportamiento externo en línea e interno con su flujo normal o flow layout.
- **{display: inline-block}** Comportamiento externo en bloque pero sin forzar un salto de línea e interno con su flujo normal.
- **{display: flex}**. Comportamiento externo en bloque e interno como flexible.
- **{display: inline-flex}**. Comportamiento externo en bloque pero sin forzar un salto de línea e interno como flexible.
- **{display: grid}**. Comportamiento externo como block e interno como rejilla.
- **{display: inline-grid}**. Comportamiento externo en bloque pero sin forzar un salto de línea e interno como rejilla.
- **{display: none}**. El documento se procesa como si el elemento no existiera en el árbol de documentos. Todos los elementos descendientes también quedan desactivados.

Otros valores: https://developer.mozilla.org/es/docs/Web/CSS/display

> <sub>Fuente: https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model</sub>
