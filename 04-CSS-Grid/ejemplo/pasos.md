## 1. Grid, grid-template-rows, grid-template-columns

Comenzamos a crear nuestro grid añadiendo la propiedad display y definiendo el tamaño de filas y columnas

```diff
.grid {
	margin: 0 auto;
	width: 800px;
	height: 650px;
	border: 10px solid yellowgreen;
+	display: grid;
+	grid-template-columns: 150px 150px 150px;
+	grid-template-rows: 150px 150px 150px;
}

```

## 2. grid-template-areas

Creamos la estructura de áreas, podemos observar que en apariencia nada cambia pero el navegador ya nos ofrece otra información.

```diff
.grid {
	margin: 0 auto;
	width: 800px;
	height: 650px;
	border: 10px solid yellowgreen;
	display: grid;
	grid-template-columns: 150px 150px 150px;
	grid-template-rows: 150px 150px 150px;
+	grid-template-areas:
+		"a b c"
+		"a b c"
+		"a d e";
}

```

## 3. grid-auto-columns, grid-auto-rows, grid-auto-flow

**Añadir 6 nuevos elementos al html y luego otros 6**
Podemos ver cómo los nuevos elementos ocupan las celdas que quedaban disponibles y cómo se crean nuevas ocupando el espacio disponible para el resto de elementos.
Si añadimos nuevos elementos ese espacio se vuelve a distribuir.

```diff
+	<div class="newElements"></div>
+	<div class="newElements"></div>
+	<div class="newElements"></div>
+	<div class="newElements"></div>
+	<div class="newElements"></div>
+	<div class="newElements"></div>
```

**Ahora vamos a pasar a controlar la cuadrícula implícita, es decir tomaremos el control para nuevos elementos no definidos.**

```diff
.grid {
    display: grid;
    grid-template-rows: 150px 150px 150px;
    grid-template-columns: 150px 150px 150px;
    gap: 20px;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    width: 800px;
    height: 650px;
    border: 10px solid yellowgreen;
+   grid-auto-columns: 100px;
+   grid-auto-flow: column;
}

+.newElements {
+	border: 1px solid red;
+}
```

## 4. row-gap, columns-gap, gap

Vamos a añadir el espaciado entre filas y columnas

```diff
.grid {
	display: grid;
	grid-template-rows: 150px 150px 150px;
	grid-template-columns: 150px 150px 150px;
	gap: 20px;
	justify-content: center;
	align-content: center;
	margin: 0 auto;
	width: 800px;
	height: 650px;
	border: 10px solid yellowgreen;
	grid-auto-columns: 100px;
	grid-auto-flow: column;
+	gap: 20px;
}
```

## 5. grid-row-start || grid-row-end || grid-column-start || grid-column-end || grid-column || grid-row

Ahora vamos a posicionar los elementos en nuestro grid indicando qué espacio deben ocupar.

```diff
.a {
	background-color: teal;
+	grid-column-start: 1;
+	grid-column-end: 2;
+	grid-row-start: 1;
+	grid-row-end: 4;
}
.b {
	background-color: thistle;
+	grid-column: 2 / 3;
+	grid-row: 1 / 3;
}
.c {
	background-color: tomato;
+	grid-column: 3 / 4;
+	grid-row: 1 / span 2;
}
```

## 6. z-index

Vamos a hacer que dos elementos ocupen la misma celda y con la propiedad z-index controlar quién queda por encima.

```diff
.a {
	background-color: teal;
	grid-column-start: 1;
-	grid-column-end: 2;
+	grid-column-end: 3;
	grid-row-start: 1;
-	grid-row-end: 4;
+	grid-row-end: 2;
}
.b {
	background-color: thistle;
	grid-column: 2 / 3;
	grid-row: 1 / 3;
+	z-index: -1;
}
```

## 7. repat() || minmax() || min-content || max-content || fr

Ahora probaremos estas funciones y valores para definir el tamaño de filas y columnas

```diff
.grid {
	margin: 0 auto;
-	width: 800px;
+	width: 80%;
	height: 650px;
	border: 10px solid yellowgreen;
	display: grid;
-	grid-template-columns: 150px 150px 150px;
+	grid-template-columns: repeat(3, 150px);
-	grid-template-rows: 150px 150px 150px;
+	grid-template-rows: repeat(3, 150px);
	grid-template-areas:
		"a b c"
		"a b c"
		"a d e";
	gap: 20px;
}
```

```diff
.grid {
	margin: 0 auto;
	width: 80%;
	height: 650px;
	border: 10px solid yellowgreen;
	display: grid;
-	grid-template-columns: repeat(3, 150px);
+	grid-template-columns: repeat(3, minmax(150px, 300px));
	grid-template-rows: repeat(3, 150px);
	grid-template-areas:
		"a b c"
		"a b c"
		"a d e";
	gap: 20px;
}
```

```diff
.grid {
	margin: 0 auto;
	width: 80%;
	height: 650px;
	border: 10px solid yellowgreen;
	display: grid;
-	grid-template-columns: repeat(3, minmax(150px, 300px));
+	grid-template-columns: repeat(3, min-content);
	grid-template-rows: repeat(3, 150px);
	grid-template-areas:
		"a b c"
		"a b c"
		"a d e";
	gap: 20px;
}
```

```diff
.grid {
	margin: 0 auto;
	width: 80%;
	height: 650px;
	border: 10px solid yellowgreen;
	display: grid;
-	grid-template-columns: repeat(3, min-content);
+	grid-template-columns: repeat(3, max-content);
	grid-template-rows: repeat(3, 150px);
	grid-template-areas:
		"a b c"
		"a b c"
		"a d e";
	gap: 20px;
}
```

```diff
.grid {
	margin: 0 auto;
	width: 80%;
	height: 650px;
	border: 10px solid yellowgreen;
	display: grid;
-	grid-template-columns: repeat(3, max-content);
+	grid-template-columns: repeat(3, minmax(min-content, max-content);
	grid-template-rows: repeat(3, 150px);
	grid-template-areas:
		"a b c"
		"a b c"
		"a d e";
	gap: 20px;
}
```

```diff
.grid {
	margin: 0 auto;
	width: 80%;
	height: 650px;
	border: 10px solid yellowgreen;
	display: grid;
-	grid-template-columns: repeat(3, minmax(min-content, max-content);
+	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 150px);
	grid-template-areas:
		"a b c"
		"a b c"
		"a d e";
	gap: 20px;
}
```

## 8. justify-content || align-content

Vamos a alinear el conjunto

#### Creamos la primera estructura con un grid area

```css
body {
	background-color: rgb(22, 21, 17);
}
.grid {
	display: grid;
	grid-template-rows: 150px 150px 150px;
	grid-template-columns: 150px 150px 150px;
	gap: 20px;
	justify-content: center;
	align-content: center;
	margin: 0 auto;
	width: 800px;
	height: 650px;
	border: 10px solid yellowgreen;
	grid-template-areas:
		"a b c"
		"a b c"
		"a d e";
}

.a {
	grid-area: a;
	background-color: teal;
}
.b {
	grid-area: b;
	background-color: thistle;
}
.c {
	grid-area: c;
	background-color: tomato;
}
.d {
	grid-area: d;
	background-color: tan;
}
.e {
	grid-area: e;
	background-color: steelblue;
}
.cell {
	border: 1px solid white;
}
.cell span {
	border: 1px solid yellowgreen;
}
```
