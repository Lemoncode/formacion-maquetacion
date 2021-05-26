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

#### Eliminamos el grid area y posicionamos con grid-row-start, grid-row-end, etc..

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
-	grid-template-areas:
-		"a b c"
-		"a b c"
-		"a d e";
}

.a {
-   grid-area: a;
    background-color: teal;
+   grid-row-start: 1;
+   grid-row-end: 4;
+   grid-column-start: 1;
+   grid-column-end: 2;
}
.b {-
-   grid-area: b;
    background-color: thistle;
+   grid-column: 2 / 3;
+   grid-row: 1 / 3;
}
.c {
-	grid-area: c;
	background-color: tomato;
}
.d {
-	grid-area: d;
	background-color: tan;
}
.e {
-	grid-area: e;
	background-color: steelblue;
}
```

#### Añadimos control de cuadrícula implícita con grid-auto-columns y grid-auto-flow

Añadir nuevos elementos al html

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
```
