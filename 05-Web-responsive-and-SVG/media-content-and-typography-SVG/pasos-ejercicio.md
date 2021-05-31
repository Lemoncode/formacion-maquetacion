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

Si hacemos lo mismo para el vídeo vemos que la propiedad **height** tiene más peso que **width** pero no se aplican ambas.

---

## 3. Pasamos a controlar el tamaño de texto.

Pero antes **obsevemos el comportamiento** aumentando el tamaño de letra en el navegador.

Vamos a definir un font-size en la etiqueta `<html>`

```diff
html {
	box-sizing: border-box;
	font-family: "Roboto", sans-serif;
+	font-size: 16px;
}
```

Ahora ya tenemos el control sobre el tamaño de fuente al aplicar rem y em.

- Ejemplo de imagen responsive.
  - Añadir height en css
  - Cambiar imagen por svg
- Ejemplo con el vídeo
- Ejemplo de tamaño de imágen para ver la calidad.
  - cambiar tamaño width a 500

---

- Ejemplos de SVG

  - iconmoon.io
