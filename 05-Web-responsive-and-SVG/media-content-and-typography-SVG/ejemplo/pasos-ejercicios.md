## 1. Imagen responsive

Vamos a comenzar añadiendo a nuestro ejemplo el vídeo y las imágenes para ver su comportamiento antes de añadir estilos.

```diff
  <!DOCTYPE html>
  <html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="styles.css" />
		<link rel="stylesheet" href="avatar.styles.css" />
		<script type="module" src="avatar.js"></script>
		<title>Lemoncode - Responsive</title>
	</head>
	<body>
		<div class="grid-container">
			<header class="header">
				<div class="header__avatar">
					<avatar-component />
				</div>
				<ul class="header__menu">
					<li class="header__menu__item">Home</li>
					<li class="header__menu__item">About</li>
				</ul>
			</header>

			<main class="main">
				<section class="main__section">
					<h3>Imagen</h3>
+					<img class="main__section__img" src="assets/logo.png" alt="wallpaper"/>
					<span class="main__section__txt"
						>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
						unde corrupti optio quisquam corporis nihil voluptatibus hic
						laboriosam quas nobis nesciunt amet facilis id nam iste, error
						magnam numquam impedit?</span
					>
				</section>
				<section class="main__section">
					<h3>Vídeo</h3>
					<span class="main__section__txt"
						>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
						unde corrupti optio quisquam corporis nihil voluptatibus hic
						laboriosam quas nobis nesciunt amet facilis id nam iste, error
						magnam numquam impedit?</span
					>
+					<video
+						controls
+						src="assets/01-Props-Ts-React-1.m4v"
+						class="main__section__video"
+						poster="assets/lemoncode-wallpaper-led.png"
+					>
+						Tu navegador no admite el elemento <code>video</code>.
+					</video>
				</section>
			</main>

			<footer class="footer">
+				<img class="footer__img" src="assets/logo.png" />
				<span class="footer__copy">&copy; by Lemoncode 2021</span>
			</footer>
		</div>
	</body>
  </html>

```

Podemos ver cómo pese a estar en contenedores flex y grid el tamaño no se adapta al contenedor.

## 2. Vamos a añadir sus estilos

```diff

+  .main__section__img {
+  	width: 50%;
+  }

+  .main__section__video {
+  	width: 63%;
+  	background-color: black;
+  }

+  .footer__img {
+    width: 50px;
+  }

```

Y ahora vamos a jugar con su comportamiendo añadiendo también la propiedad **height** a la imagen.

```diff

  .main__section__img {
    width: 50%;
+   height: 50%;
  }
```

Si hacemos lo mismo para el vídeo vemos que el comportamiento es distinto, siempre coge la propiedad con mayor tamaño y ajusta la otra sin deformar el vídeo.

---

## 3. Pasamos a controlar el tamaño de texto.

Pero antes **obsevemos el comportamiento** aumentando el tamaño de letra en el navegador.

Vamos a definir un font-size en la etiqueta `<html>` en **%** y en **rem** y ver que pasa si volvemos a cambiar los parámetros del navegador.

```diff
html {
	box-sizing: border-box;
	font-family: "Roboto", sans-serif;
+	font-size: 100%;
}
```

Ahora definimos el font-size con un tamaño fijo en px

```diff
html {
	box-sizing: border-box;
	font-family: "Roboto", sans-serif;
+	font-size: 16px;
}
```

Ahora ya tenemos el control sobre el tamaño de fuente al aplicar rem y em.

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

### 4. Controlar el tamaño de letra en el componente avatar

De esta manera conseguimos que el tamaño de letra sea siempre el mismo en cualquier proyecto.

```diff
class Avatar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
            .avatar {
                display: flex;
                align-items: center;
                justify-content: center;
                column-gap: 10px;
                font-family: "Roboto", sans-serif;
+               font-size: 16px;
            }
            .avatar__img {
                width: 70px;
                height: auto;
            }
            .avatar__name {
-                font-size: 1.5rem;
-                letter-spacing: 0.05rem;
+                font-size: 1.5em;
+                letter-spacing: 0.05em;
                color: #494738;
            }
        </style>
        <div class="avatar">
        <!-- elemento img -->
        <img class="avatar__img" src="assets/logo-detalle-lemontv.svg" />
        <!-- elemento name -->
        <h1 class="avatar__name">LEMONCODE</h1>
    </div>`;
	}
}

customElements.define("avatar-component", Avatar);

```

# SVG

Vamos a comenzar con un ejemplo donde podremos observar la pérdida de calidad de una imagen respecto a un SVG.

```diff
 <!DOCTYPE html>
 <html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Ejemplo tamaños imagen</title>
		<style>
			.container {
				display: flex;
				flex-direction: row;
				width: 100%;
			}
			.png {
-				width: 5%;
+				width: 500%;
			}
			.svg {
-				width: 5%;
+				width: 500%;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<img class="png" src="assets/logo-baja.png" alt="" />
			<img class="svg" src="assets/logo-detalle-lemontv.svg" alt="" />
		</div>
	</body>
 </html>
```

#### 1. SVG como HTML

Partimos del ejemplo **ejemplo-svg.html** donde hemos añadido las imágenes SVG mediante código HTML.

- En el logo de Facebook hemos puesto el **height** y el **width** como ejemplo.
- El logo de intagram lo hemos incluido en una etiqueta `<object>` para ver las diferencias a la hora de aplicar estilos.

Vamos a empezar añadiendo un borde rojo al icono de facebook

```diff
.social-media__icon__facebook {
	fill: #3a5795;
+	stroke: red;
+	stroke-width: 10px;
}
```

Si intentamos aplicar estos estilos al icono de instagran vemos que no los coge al estar dentro de un `<object>` así que crearemos su propia hoja de estilos y la incluiremos dentro del propio SVG.

**instagram.styles.css**

```diff
+ .instagram {
+ 	fill: #2a5b83;
+ 	stroke: red;
+ 	stroke-width: 10px;
+ }
```

Y añadimos la siguiente línea al inicio del código SVG de la imagen y la clase **.intagram** al propio SVG.

```diff
+ <?xml-stylesheet type="text/css" href="instagram.styles.css"?>
- <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
+ <svg class="instagram" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
...
...
```

#### 2. SVG como fuente

Para crear nuestras fuentes SVG vamos a utilizar la web https://icomoon.io/#icons y seguiremos los pasos para generar las fuentes o bien las imágenes SVG.

Añadimos el directorio con los recursos de las fuentes descargadas

Añadimos el código HTML

```diff
+  <div class="container">
+    <h3>Ejemplo SVG como fuente</h3>
+    <p>Aquí utilizamos las propiedades de una fuente normal.</p>
+    <ul class="social-media">
+      <li class="social-media__icon">
+        <span class="icon icon-facebook2"></span>
+      </li>
+      <li class="social-media__icon">
+        <span class="icon icon-instagram"></span>
+      </li>
+      <li class="social-media__icon">
+        <span class="icon icon-twitter"></span>
+      </li>
+      <li class="social-media__icon">
+        <span class="icon icon-whatsapp"></span>
+      </li>
+      <li class="social-media__icon">
+        <span class="icon icon-youtube"></span>
+      </li>
+    </ul>
+  </div>
```

Y el CSS que nos proporciona la aplicación y el que queramos añadir nosotros

```diff
+ @font-face {
+ 	font-family: "icomoon";
+ 	src: url("assets/fonts/icomoon.eot?evzsii");
+ 	src: url("assets/fonts/icomoon.eot?evzsii#iefix") format("embedded-opentype"),
+ 		url("assets/fonts/icomoon.ttf?evzsii") format("truetype"),
+ 		url("assets/fonts/icomoon.woff?evzsii") format("woff"),
+ 		url("assets/fonts/icomoon.svg?evzsii#icomoon") format("svg");
+ 	font-weight: normal;
+ 	font-style: normal;
+ 	font-display: block;
+ }
+ [class^="icon-"],
+ [class*=" icon-"] {
+ 	/* use !important to prevent issues with browser extensions that change fonts */
+ 	font-family: "icomoon" !important;
+ 	font-style: normal;
+ 	font-weight: normal;
+ 	font-variant: normal;
+ 	text-transform: none;
+ 	line-height: 1;
+
+ 	/* Better Font Rendering =========== */
+ 	-webkit-font-smoothing: antialiased;
+ 	-moz-osx-font-smoothing: grayscale;
+ }
+ /* styles svg fonts */
+ .icon {
+ 	font-size: 2rem;
+ }
+ .icon-facebook2:before {
+ 	content: "\ea91";
+ 	color: #3a5795;
+ }
+ .icon-instagram:before {
+ 	content: "\ea92";
+ 	color: #2a5b83;
+ }
+ .icon-twitter:before {
+ 	content: "\ea96";
+ 	color: #5ea9dd;
+ }
+ .icon-whatsapp:before {
+ 	content: "\ea93";
+ 	color: #00bb2d;
+ }
+ .icon-youtube:before {
+ 	content: "\ea9d";
+ 	color: #cc181e;
+ }
```

#### 3. SVG como background-image CSS

En este ejemplo veremos como utilizar un SVG como imagen de fondo desde CSS

Añadimos el html

```diff
+ <div class="container">
+   <h3>Ejemplo SVG como background CSS</h3>
+   <p>El comportamiento es igual que si utilizamos un png o jpg</p>
+   <div class="icon-background"></div>
+ </div>
```

Y el CSS

```diff
+ .icon-background {
+ 	background-image: url("./assets/logo-lemontv.svg");
+ 	background-repeat: no-repeat;
+ 	background-position: center center;
+ 	width: 300px;
+ 	height: 100px;
+ 	margin: 0 auto;
+ }
```

#### 4. SVG como imagen

Utilizar un SVG como imagen es exactamente igual que un .jpg o .png **con la diferencia que la imagen SVG no se deforma**

Añadimos el HTML

```diff
+ <div class="container">
+   <h3>Ejemplo SVG como imagen</h3>
+   <p>El comportamiento es igual que si utilizamos un png o jpg</p>
+   <img class="img-svg" src="assets/logo-lemontv.svg" />
+ </div>
```

Y el CSS

```diff
+ .img-svg {
+ 	width: 300px;
+ }
```

#### 5. Dibujando con SVG

Como hemos dicho SVG provee elementos para círculos, rectángulos, y curvas simples y complejas.

Vamos a utilizar el elemento círculo y un texto

```diff
+ <div class="container">
+   <h3>Ejemplo dibujando con SVG</h3>
+   <p>
+     Aquí directamente estamos dibujando con SVG podemos ver como el texto
+     toma ciertas propiedades como el borde
+   </p>
+   <svg class="svg">
+     <circle
+       cx="150"
+       cy="190"
+       r="60"
+       stroke="yellow"
+       fill="orange"
+       fill-opacity="0.5"
+       stroke-opacity="0.8"
+       stroke-width="2"
+     />
+     <text class="svg__txt" x="20" y="50">Hello World!</text>
+   </svg>
+ </div>
```

El CSS

```diff
+ .svg {
+ 	display: flex;
+ 	height: 200px;
+ 	margin: 2% auto;
+ 	font-size: 3rem;
+ 	font-weight: bold;
+ 	background: rgb(2, 0, 36);
+ 	background: linear-gradient(
+ 		0deg,
+ 		rgba(2, 0, 36, 1) 0%,
+ 		rgba(246, 174, 57, 1) 1%,
+ 		rgba(14, 107, 126, 1) 65%
+ 	);
+ }
+ .svg__txt {
+ 	fill: rgb(29, 2, 2);
+ 	stroke: #0c0a00;
+ 	stroke-width: 1px;
+ 	border: 1px solid black;
+ }
```
