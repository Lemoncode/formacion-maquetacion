# Diseño responsivo

La colocación, márgenes, espaciados entre elementos, tamaños, etc... son valores de las propiedades que vamos añadiendo y que tendremos que ir probando hasta ajustar nuestro desarrollo lo más fielmente posible al diseño. Para esto vamos a utilizar valores relativos `em`, `rem` y `%` evitando siempre que sea posible el uso de valores absolutos en `px`.

## Imágenes y vídeos responsivos

Para que una imagen o un vídeo tenga un comportamiento responsivo simplemente tenemos que evitar los valores absolutos al definir su tamaño, es decir utilizar `%` en lugar de `pixels` a la hora de definir su ancho y alto.
Lo normal a la hora de definir el tamaño para imágenes y vídeos es dar valor a una de las dos propiedades para que mantengan la proporción a la hora de modificar su tamaño ya que se ajustarán a su contenedor y este seguramente no tenga las mismas proporciones.

- Supongamos que tenemos una imagen, sus medidas originales son 200px de ancho por 150px de alto.
- El contenedor donde vamos a insertar la imagen tiene unas medidas de 300px de ancho por 300px de alto.
- Ahora queremos que la imagen se adapte y ocupe todo el ancho del contenedor.

Si a la imagen le definimos un ancho de 100% y un alto de 100% la imagen ocupará todo el espacio de su contenedor pero su aspecto será de una imagen deformada ya que pierde su proporción.
Para que esto no ocurra definimos el ancho al 100% y el alto lo dejamos en auto.

## Textos responsivos

Los valores `rem` utilizan como referencia el `font-size` definido en el elemento raíz del documento `<html>`, es decir si definimos en esta etiqueta un `font-size: 16px` en el resto del documento `1rem` sera equivalente a `16px`, si no se define se toma el valor por defecto del navegador o el valor que el usuario haya establecido en este.

Los valores `em` funcionan igual que `rem` pero relativos al primer `font-size` que se encuentre definido en su contenedor padre. Lo vemos mejor con un ejemplo.

Tenemos el siguiente html:

```html
<html>
	<body>
		<div class="container">
			<p>Soy un elemento hijo de .container</p>
		</div>
	</body>
</html>
```

Y su CSS:

```css
html {
	font-size: 100%; /* 100% = 16px */
}
div.container {
	font-size: 2em;
}
p {
	font-size: 1em;
}
```

Aquí el equivalente en `px` para `div.container` es de `32px` ya que su referencia es el `font-size` de `<html>` pero para `<p>` su referente es `<div class="container">` y su `font-size: 1em;` en `px` es `32px` ya que toma como referencia su contenedor padre más directo.

Si cambiamos en `<p>` su valor a `1rem` su `font-size` en pixels pasaría a ser de `16px`.

> Utilizaremos `em` para conseguir componentes aislados y así poder reutilizarlos.

> Utilizaremos `rem` para establecer el valor inicial desde el componente raíz de nuestro documento.

> La combinación de ambos tipos de valores y su utilización a la hora de definir márgenes o paddings harán que consigamos un diseño mucho más flexible y responsivo ya que a la hora de escalar todo se adaptara de manera proporcional al elemento clave.

---

## SVG

SVG es un lenguaje XML, parecido a XHTML, el cual puede ser usado para dibujar gráficos vectoriales.

HTML provee elementos que definen encabezados, párrafos, tablas, etc. En forma muy similar, SVG provee elementos para círculos, rectángulos, y curvas simples y complejas.

SVG soporta gradientes, rotaciones, efectos de filtro, animaciones, interactividad con JavaScript, añadir texto y más.

SVG es soportado en todos los navegadores modernos.

Existen programas de diseño como Illustrator, Corel Draw o Inkscape (free) con los que se puede trabajar o genrar este tipo de imágenes.

El formato **svg** nos brinda la ventaja de escalado sin pérdida y la posibilidad de cambiar ciertas propiedades como el color mediante código.

> _Toda imagen basada en mapa de bits (píxeles) sufre una pérdida de calidad y definición al ser escalada. Esto es mucho más evidente cuando el escalado es de ampliación._

> _Las imágenes vectoriales están formadas por vectores. Un vector es un objeto geométrico definido mediante cálculos matemáticos, esta es la razón por la que este tipo de imágenes no tiene pérdidas de calidad al ser escaladas. Una fuente o tipografía es un ejemplo claro de imágen vectorial._

> https://developer.mozilla.org/es/docs/Web/SVG/Tutorial

```html
<svg width="100" height="100" class="svg">
	<circle
		cx="85"
		cy="85"
		r="80"
		stroke="blue"
		fill="purple"
		fill-opacity="0.5"
		stroke-opacity="0.8"
		stroke-width="5"
	/>
	<text x="10" y="10">Hello World!</text>
</svg>
```
