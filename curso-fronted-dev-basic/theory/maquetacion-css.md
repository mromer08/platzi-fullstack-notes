# Maquetación con CSS
## Anatomía de una declaración CSS: selectores, propiedades y valores
Una declaración de CSS es un bloque que especifica el conjunto de estilos que se añadirán a un elemento HTML. Su estructura contiene lo siguiente:

- Selector: define el elemento o conjunto de elementos a los cuales se añadirán los estilos.
- Propiedad: es el nombre del estilo de CSS.
- Valor: es el valor que tomará la propiedad.

### Comentarios en CSS

Los comentarios de CSS consisten en señalar algo que se ignorará. Para establecer un comentario CSS se lo envuelve entre `/*` y `*/`, independiente de la cantidad de líneas.

### Propiedades iniciales de CSS

Antes de empezar con CSS utilizaremos algunas propiedades de CSS.

- `color`: establece el color del texto de un elemento.
- `background-color`: establece un color de fondo al elemento.
- `font-size`: establece el tamaño de la fuente.
- `width`: establece la anchura de un elemento.
- `height`: establece la altura de un elemento.

### Medidas iniciales

Estas son las medidas iniciales que debes conocer para establecer tamaños de elementos o de tipografía:

- `px`: establece una longitud de píxeles.
- `%`: establece un porcentaje con respecto a una medida base.

## Tipos de selectores
El selector define el elemento o conjunto de elementos HTML a los cuales se añadirán estilos. Existen [nombres de colores propios de CSS](https://htmlcolorcodes.com/es/nombres-de-los-colores/ "nombres de colores propios de CSS") que puedes explorar. A continuación veamos más sobre selectores.
### Selectores Básicos y combinadores
> Un selector básico es la mínima expresión CSS para colocar estilos.

1. Selector de tipo: Selecciona todos los elementos que coincidan con el nombre de la etiqueta HTML
```css
div {
    /*Todos los div en el documento*/
}
```
2. Selector de clase: Selecciona todos los elementos que coincidan con las etiquetas HTML que contengan el atributo `class` con el mismo nombre
```html
<div class="card">Soy una carta</div>
<!--Puede existir más de un valor dentro del atributo class separados por espacios.-->
<div class="card card1"> Soy una carta </div>
<div class="card card2"> Soy una carta </div>
```
```css
.card {
    /*Todas las etiquetas con la clase card*/
}
.card1 {
    /* Todas las etiquetas con la clase "card1" */
}

.card2 {
    /* Todas las etiquetas con la clase "card2" */
}
```

3. Selector de ID: Selecciona el único elemento que coincida con la etiqueta HTML que contenga el atributo id. Solo puede existir un valor id para todo el documento.
```html
<button id="eliminar">Eliminar</button>
```
Para seleccionar el elemento, se empieza por el símbolo de hashtag # y seguido el valor exacto del atributo id de la etiqueta. Puede ser cualquier valor que desees colocar.
```css
#eliminar {
    /* La única etiqueta con el id "eliminar" */
}
```
4. Selector de atributo: Selecciona los elementos que coincidan con la etiqueta HTML que contenga el atributo y valor especificado.
```html
<a href="https://platzi.com"> Ir a Platzi </a>
```
Para seleccionar los elementos, se empieza por el nombre de la etiqueta, seguido de corchetes [] que contiene el atributo y valor especificado.
```css
a[href="https://platzi.com"] {
    /* Todas las etiquetas <a> con una propiedad href con valor "https://platzi.com" */
}
```
5. Selector universal: Selecciona todos los elementos del documento mediante un asterisco `*`.

### Selectores combinadores
> Un selector combinador es la unión de dos o más selectores básicos.
```css
selector1 selector2 selector3 {
    /* Estilos */
}
```
1. Combinador de descendientes: 

Selecciona todos los elementos del selector de la derecha que son hijos del selector de la izquierda, independientemente de la profundidad. Estos selectores están separados por un espacio.

```css
padre hijos {
    /* Todos los hijos del padre */
}

div p{
    /* Todos los hijos <p> de <div>*/
}

.container img{
    /* Todos los hijos <img> de la clase "container"*/
}
```
2. Combinador de hijo directo

Selecciona todos los elementos del selector de la derecha que son hijos directos del selector de la izquierda. Estos selectores están separados por `>`.
```css
padre > hijos_directos {
    /* Todos los hijos directos del padre */
}

div > p{
    /* Todos los hijos directos <p> de <div>*/
}

.container > img{
    /* Todos los hijos directos <img> de la clase "container"*/
}
```

3. Combinador de elemento adyacente

Selecciona todos los elementos del selector de la derecha que están adyacente al selector de la izquierda. Estos selectores están separados por `+`.

```css
elemento + adyacente {
    /* Elementos adyacentes */
}

div + p{
    /* Todos los <p> adyacentes a <div>*/
}

.container + img{
    /* Todos los <img> adyacentes a la clase "container"*/
}
```
Adyacente significa que comparten el mismo padre y está **situado inmediatamente hacia abajo** de otro elemento.

4. Combinador general de hermanos

```css
elemento ~ hermanos {
    /* Elementos hermanos */
}

div ~ p{
    /* Todos los <p> hermanos de <div>*/
}

.container ~ img{
    /* Todos los <img> hermanos de la clase "container"*/
}
```
Hermanos significa que **comparten el mismo padre y están situados hacia abajo de otro elemento**. 

### Pseudoclases
> Una pseudoclase define el estilo de un **estado** especial de un elemento
Para más información se puede consultar la [documentación](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes#indice_de_las_pseudo-clases_est%C3%A1ndar "documentación") o estos [trucos](https://css-tricks.com/pseudo-class-selectors/ "trucos")

```css
selector : pseudoclase { 
    propiedad: valor;
}
```
Los más comunes son:

- `:hover` Representa el estado en el cual el cursor está encima del elemento
- `:active` Representa el estado de un elemento que no ha sido visitado.
- `:visited` Representa el estado de un elemento que ya ha sido visitado.
- `:not()` Representa el estado en el cual no coinciden los selectores que se indiquen.
- `:nth-child()` Representa el estado en el cual coinciden los hijos del elemento según el valor indicado.
#### Valores de palabras clave:
* **odd**: Los elementos hijos en posiciones impares
* **even**: los elementos hijos en posiciones pares
Fórmula matemática: `An+B` donde A y B son número enteros

### Pseudoelementos
> Un pseudoelemento define el estilo de una parte específica de un elemento.

Para más información se puede consultar la [documentación](https://developer.mozilla.org/es/docs/web/css/pseudo-elements#lista_de_pseudoelementos "documentación")

```css
selector :: pseudo-elemento { 
    propiedad: valor;
}
```
- `::before` Sirve para agregar un contenido antes del elemento. Se agrega mediante la propiedad `content` de CSS.
- `::after` Sirve para agregar un contenido después del elemento. Se agrega mediante la propiedad `content` de CSS.
- `::first-letter` Sirve para añadir estilos a a la primera letra del texto de cualquier elemento.

## Cascada en CSS
> La cascada es el concepto que determina qué estilos se colocan sobre otros, priorizando a aquellos que se encuentren más abajo del código. 

Cuando se está cambiando una misma propiedad para cierta etiqueta, por el concepto de cascada, CSS se queda con el valor que está escrito más abajo del código. Esto debido a que poseen el mismo valor de especificidad

## Especificidad en CSS
Existen 6 tipos de especificidad con su respectivo valor, donde X es la cantidad de estilos que lo contienen.

|Prioridad|Aplica a|
|---------|--------|
|xoooo|!important|
|xooo|Estilos en linea|
|xoo|# ID|
|xo|Clases, atributos, pseudoclases|
|x|Elementos y pseudoelementos|
|o|Selector universal|

### Malas prácticas de especificidad
La palabra reservada !important es un valor de toda propiedad CSS que provee una especificidad de 10000, por lo que se aplicará ante otros estilos. Esto es una **mala práctica** y no deberías utilizarlo.

Los estilos en línea son las propiedades CSS escritas en el HTML a través de la propiedad style de toda etiqueta. También es una mala práctica y debes evitarlo.

### Calcular la especificidad
Los selectores combinadores suman la especificidad de cada selector básico para obtener la especificidad total de la regla CSS.

Si utilizas Visual Studio Code y mantienes el mouse sobre el selector, te mostrará la especificidad total. [Specificity Calculator](https://specificity.keegan.st/ "Specificity Calculator") es una página web donde puedes calcular la especificidad.

## Tipos de display más usados
> La propiedad display establece el tipo de visualización de los elementos HTML sin afectar el flujo normal de los elementos. VER EL MANUAL PARA MEJOR COMPRENSIÓN

Existen etiquetas que por defecto su display ya está determinado, como la etiqueta `<div>` que tiene display block, `<span>` tiene display inline y `<button>` tiene display inline-block.
### Display block
> Establece que un elemento ocupará todo el espacio disponible por defecto y el siguiente elemento a este se situará por debajo.

Es posible añadir medidas de anchura `width` y altura `height` a estos a elementos. También es posible agregar todas las propiedades del *modelo de caja*

### Display inline
> Establece que un elemento ocupará el espacio del contenido del mismo y el siguiente elemento se situará a la derecha.

**No es posible** añadir medidas de anchura `width` y altura `height` a estos a elementos. Tampoco se pueden aplicar todas las propiedades del *modelo de caja*, únicamente el `margin` en el eje horizontal

### Display inline-block
> Combina las ventajas de bloque de colocar medidas al elemento y propiedades del modelo de caja correctamente; con las ventajas de inline de colocar un elemento seguido de otro en el mismo espacio.

Si elemento excede el contenido total, se coloca en la siguiente línea por debajo.

### Display none (nula)
> Desactiva la visualización de un elemento, como si el elemento no existiera.
```css
.desaparecer{
    /*Se le indidca explicitamente que tomará el display none*/
   display: none; 
  background-color: cornflowerblue;
  
}
```
### Display flexbox
> Flexbox consiste en el ordenamiento de elementos hijos en un solo eje, por defecto horizontalmente. El elemento padre o contenedor deberá contener la propiedad display con el valor `flex`

Para más información sobre el display flexbox se puede consultar la [guia de flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/ "guia de flexbox")
o el [Curso de Diseño Web con CSS Grid y Flexbox](https://platzi.com/clases/flexbox-css-grid/ "Curso de Diseño Web con CSS Grid y Flexbox")

### Display grid
> Grid consiste en el ordenamiento de elementos hijos en dos ejes, como si fuera una cuadrícula o tabla. El elemento padre o contenedor deberá contener la propiedad display con el valor `grid` y debes definir las medidas de las columnas y de las filas. 

Para más información se pude consultar la [guia de grid](https://css-tricks.com/snippets/css/complete-guide-grid/ "guia de grid") o el [Curso de CSS Grid básico](https://platzi.com/cursos/css-grid/ "Curso de CSS Grid básico").

Una vez dominadas flex y grid se puede ver el curso [Curso de Diseño Web con CSS Grid y Flexbox](https://platzi.com/cursos/flexbox-css-grid/ "Curso de Diseño Web con CSS Grid y Flexbox")

Puede ser de interés el siguiente blog https://platzi.com/blog/flexbox-vs-css-grid-cual-es-la-diferencia/

## Modelo de caja
> El modelo de caja se compone de cuatro elementos: margin, border, padding y contenido.

Entrando a las herramientas de desarrollador de un navegador, señalando algún elemento HTML se puede ver en la sección de estilos una vista con el modelo de caja de dicho elemento.

Podría interesar la lectura de [The Rules of Margin Collapse](https://www.joshwcomeau.com/css/rules-of-margin-collapse/ "The Rules of Margin Collapse") y [Flexbox-Learn](https://learn-the-web.algonquindesign.ca/topics/flexbox/ "Flexbox-Learn")

### Bordes del elemento HTML
Para utilizar un borde es necesario definir las siguientes 3 propiedades:

- `border-color` Color del borde
- `border-style` Puede ser `none` `dotted` `dashed` `solid` `double` `groove`
- `border-width` Ancho del borde

Puden colocarse explicitamente cada una de ellas o en una sola línea donde NO importa el ORDEN

```css
div {
    border: [color] [style] [width];
}

div {
    border-color: red;
    border-style: solid;
    border-width: 1px;
}

div {
    border: red solid 1px;
}
/*Estableciendo border para cada arista del elemento*/
div {
  border-top: 5px solid blue;
  border-bottom: 5px solid red;
  border-left: 5px solid black;
  border-right: 5px solid yellow;
}
```
### Padding
> El padding consiste en el espacio entre el borde y el contenido del elemento HTML (interno)
El padding puede declarse de la siguiente forma:
```css
div {
    /*Siguiendo el sentido horario*/
    padding: [arriba] [derecha] [abajo] [izquierda];
    /*Siguiendo el eje principal*/
    padding: [arriba] [abajo] [derecha e izquierda];
    /*Siguiendo los ejes del elemento*/
    padding: [arriba y abajo] [derecha e izquierda];
}
/*Definiendolas por cada lado*/
div {
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 10px;
}
```
### Margin
> El margin consiste en el espacio entre el borde y otro elemento HTML (externo)

```css
div {
    /*Siguiendo el sentido horario*/
    margin: [arriba] [derecha] [abajo] [izquierda];
    /*Siguiendo el eje principal*/
    margin: [arriba] [abajo] [derecha e izquierda];
    /*Siguiendo los ejes del elemento*/
    margin: [arriba y abajo] [derecha e izquierda];
}
/*Definiendolas por cada lado*/
div {
    margin-top: 10px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 10px;
}
```
### Valores por defecto
Por defecto, el navegador establece valores iniciales a algunas propiedades CSS, este es el caso de margin y padding. Una **buena práctica** es utilizar el selector universal para restablecer estos valores a 0, para que no surjan errores inesperados.
```css
* {
    margin: 0;
    padding: 0;
}
```
### Tamaño total del elemento
El tamaño total del elemento está determinado por la suma de los valores de las propiedades border padding y widtho height, dependiendo del eje. La propiedad margin no está incluida en este cálculo.
#### Propiedad box-sizing
La propiedad box-sizing establece cómo se calculará el width y el height si incluyen bordes y espacios internos. Como buena práctica, se lo coloca en el selector universal, para que todos los elementos sigan esta tendencia.
```css
* {
  box-sizing: border-box;
}

```
Con el valor border-box, el tamaño total del elemento será igual al especificado en el width y height, provocando que las medidas del contenido cambien con respecto a los bordes y espacios internos.

### Problema con los bordes
En ocasiones pueden surgir problemas por no saber bien estos conceptos y el espacio que se tiene. Como en el siguiente [problema de border](https://codi.link/PGRpdj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0aTwvZGl2Pg0KPGRpdj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0aTwvZGl2Pg0KDQoNCg==%7CLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBsbyBxdWUgb2N1cnJlICovDQoqIHsNCiAgbWFyZ2luOiAwOw0KICBwYWRkaW5nOiAwOw0KfQ0KDQpkaXZ7DQogIGRpc3BsYXk6IGlubGluZS1ibG9jazsNCiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7DQogIHdpZHRoOiAxNTBweDsNCiAgaGVpZ2h0OiAxNTBweDsNCiAgcGFkZGluZzogMjBweDsNCiAgbWFyZ2luOiAzMHB4Ow0KICAvKiBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7ICovDQp9DQoNCmRpdjpob3ZlcnsNCiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdyYXk7DQogIGN1cnNvcjogcG9pbnRlcjsNCn0NCg0KDQoNCg0KDQo=%7C "problema de border")

## Colapso de márgenes
El colapso de márgenes sucede cuando dos elementos bloque adyacentes tienen un determinado valor de margen, entonces estos márgenes se solapan en un solo valor, el **mayor** de ambos.

En flexbox y grid no ocurre el colapso de márgenes. 

## Posicionamiento en CSS
> El posicionamiento en CSS consiste en cómo un elemento se situará, con respecto a su elemento padre y al flujo normal del documento.
> El flujo normal del documento es el orden de los elementos establecidos en el HTML.
La posición del elemento se la define con la propiedad `position`, mediante los siguientes valores:
- `static` es el valor por defecto de todo elemento HTML, consiste en respetar el flujo normal del documento donde las propiedades de posición no pueden ser establecidas.
- `relative` consiste en respetar el flujo normal del documento donde las propiedades de posición sí pueden ser establecidas.
- `absolute` consiste en quitar al elemento del flujo normal del documento donde las propiedades de posición sí pueden ser establecidas.
- `sticky` consiste en quitar al elemento del flujo normal del documento y fijarlo en un lugar mientras su contenedor sea visible; donde las propiedades de posición sí pueden ser establecidas.

### Propiedades de posición
Además de la propiedad position, existen 4 propiedades del elemento de acuerdo a su posición respecto a su padre: `top` `bottom` `left` `right`.

Estos valores estarán establecidos en el padre próximo que tenga la posición relative.

Si top y bottom están definidos, top gana. Si left y rigth están definidos, left gana (dependiendo el idioma configurado).

### Elemento padre más próximo con posición relativa

El elemento con posición absoluta se desplazará arriba, abajo, izquierda o derecha con respecto al elemento padre más próximo con posición relativa.

Si no existe un padre con posición relativa de un elemento con posición absoluta, este se desplazará con respecto al elemento raíz del documento.

### Posición fija
La posición fixed consiste en quitar al elemento del flujo normal del documento y fijarlo en un lugar; donde las propiedades de posición sí pueden ser establecidas.

### Z-index y el contexto de apilamiento
> El contexto de apilamiento consiste en la superposición de capas o elementos a lo largo del eje Z del navegador

Esto es importante para evitar que un elemento esté ocultando a otro.

El navegador está constituido de tres planos y ejes: el ancho o X; el alto o Y; y el de profundidad o Z.

> El contexto de apilamiento se configura con la propiedad z-index.

Por defecto, todos los elementos tienen un valor auto, es decir, el orden está definido por la estructura del HTML. Los primeros elementos estarán detrás y los últimos estarán de frente.

Si se establece un valor positivo, este elemento se sitúa por delante de los demás. Si se establece un valor negativo, se sitúa por detrás.

Si un elemento tiene un z-index mayor a otro, estará por delante. Sin embargo, **si un elemento que tiene un z-index menor a otros, sus hijos nunca estarán por encima, aunque su z-index sea mayor**.

Para poner a prueba los conocimiento sobre z-index puede consultarse [este quiz](https://gist.github.com/teffcode/e0b3e89df22ecf5374527deaf31b11ca "este quiz")

## Propiedades y valores de CSS más usados
Para conocer todas las etiquetas de CSS y su clasificación se puede consultar [CSS Reference](https://cssreference.io/ "CSS Reference")
- Layout: `display`, existen varios tipos
- Modelo de caja: `margin` `padding` `border`
- Tamaños: `width` `height`
- Textos: `font-size` `font-weight` `font-family` `text-align` `color`
- Colores de fondo: `background` `background-color`

Para poner los bordes redondeados puede usarse la propiedad `border-radius`
