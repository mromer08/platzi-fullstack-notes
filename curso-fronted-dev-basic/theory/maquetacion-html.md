# Maquetación con HTML
## Anatomía de un documento HTML y sus elementos
Los elementos son cada una de las partes que conforman un archivo HTML. Su estructura contiene:
- **Etiquetas**: es la representación de un elemento HTML. Se dividen en etiquetas de apertura, representadas por `<etiqueta>` y etiquetas de cierre, representadas por `</etiqueta>`.

- **Contenido**: es el texto o elementos **encerrados** por la etiqueta, este valor es opcional en algunas de ellas.
```HTML
<!--Ejemplo de estructura de un elemento en html-->
<h1> Platzi </h1>
<!--
<apertura> contenido </cierre>
-->
```

### Atributos HTML
Los atributos HTML son propiedades en la etiqueta de apertura que manejan el comportamiento del elemento. Su valor está envuelto en comillas. Nos ayudan a comunicarnos con CSS y JS.
```HTML
<!--Ejemplo de estructura de un atributo en html-->
<h1 class="title">
<!--
<etiqueta atributo="valor">
-->
```
### Elementos vacíos
Los elementos vacíos son aquellos que únicamente **se representan en una etiqueta de apertura**. Por ejemplo, la etiqueta de imagen: 
```HTML
<img src="cat.jpg" alt="cat">
```
Estas etiquetas pueden cerrarse en la misma etiqueta de apertura, utilizando la barra inclinada "/" al final: `<img.../>`

### Anidamiento de elementos
> Consiste en envolver varias etiquetas en otras etiquetas.
Interpreta a cada elemento HTML como una caja donde puedes guardar diferentes elementos u otras cajas. Estas cajas tendrán diferentes tamaños y estarán colocadas junto a otras.
```HTML
<section>
    <h1>Platzi</h1>
    <p>Tiene una comunidad</p>
    <ul>
        <li>Increíble</li>
        <li>Maravillosa</li>
        <li>Inigualable</li>
    </ul>
</section>
```
Aquellas etiquetas que envuelven a otras se las denomina "padres". Y las etiquetas que son el contenido de otras, se las denomina "hijos".

### Estructura básica de un documento HTML
La estructura básica de un documento HTML está configurado por las siguientes etiquetas principales
- Etiqueta `<Doctype>`: Especifica que el archivo se maneje con la versión 5 de HTML.
- Etiqueta `<html>`: Define el elemento raíz de un documento HTML. Puede especificarse el lenguaje mediante la propiedad `lang`.
- Etiqueta `<head>`: Define la *metainformación*, es decir, toda la info que no es contenido como tal de la pagina web. Por ejemplo enlaces a archivos CSS, JS, el titulo, el icono de la pestaña del navegador.

- Etiqueta `<body>`: Define el contenido de la página web. Debe ser hijo cercano de `<html>` y padre de todas las etiquetas HTML, exceptuando las que definen la metainformación.

### Comentarios en HTML
Para establecer un comentario HTML se lo envuelve entre `<!--` y `-->`, independiente de la cantidad de líneas.
```HTML
<!-- Este es un comentario de una línea -->
<!--
Este es un comentario de varias líneas
-->
```

## HTML semántico
> El HTML semántico consiste en que cada elemento tenga su propia etiqueta que lo defina correctamente. Sin utilizar etiquetas muy generales, como `<div>` o `<span>`.

### El problema con la etiqueta div
La etiqueta div define un bloque genérico de contenido, que no tiene ningún valor semántico. Se utiliza para elementos de diseño como contenedores.

### ¿Cuáles son las etiquetas semánticas?

Las etiquetas semánticas para definir una interfaz de una página web son:

- `<header>`: define el encabezado de la página (no confundir con `<head>`).
- `<nav>`: define una barra de navegación que incluye enlaces.
- `<section>`: define una sección de la página.
- `<footer>`: define un pie de página o de sección.
- `<article>`: define un artículo, el cual puede tener su propio encabezado, navegación, sección o pie de página.

> Se debe evitar el uso excesivo de `<div>`. Sin embargo no significa que no se pueda usar ya que es una etiqueta muy util.

### Ventajas de utilizar HTML semántico

Las ventajas de utilizar un HTML semántico son:

- Ayuda a tu sitio a ser accesible
- Mejora tu posicionamiento (SEO)
- Código más claro, legible y mantenible
- Ayuda a buscadores (como Google) a encontrar tu página

## Etiquetas HTML más usadas
Para conocer todas las etiquetas existentes se puede visitar la web de [HTML Reference](https://htmlreference.io/ "HTML Reference")

|Layout|Enlaces|Textos  |Formularios|Imágenes y video|Listas|
|------|-------|--------|-----------|----------------|------|
|HEADER|a      |h1...h6 |Form       |img             |ul    |
|NAV|          |p       |input      |svg             |li    |
|SECTION|      |span    |label      |iframe          |ol    |
|ARTICLE||              |button     |video           |      |
|ASIDE||                |           |                |      |
|FOOTER||               |           |                |      |

- Etiquetas de layout o diseño de la página: Se usan para construir una página semántica
```html
<!--Etiquetas más usadas de html para layout-->
    <header>
    <nav>
    <section>
    <article>
    <aside>
    <footer>
```
- Etiquetas de enlace: La etiqueta `<a>` o *anchor* define un vínculo o enlace hacia una URL. Se utiliza con el atributo `href` con el valor del enlace
```html
<a href="https://platzi.com/cursos/frontend-developer/">
    Curso Frontend
</a>
```
- Etiquetas para textos
    * h1...h6: Define diferentes tipos de titulos con diferente orden de importancia. Solo puede existir una etiqueta h1 por página web
    * `<p>`: Define un párrafo
    * `<span>`: Define un contenedor genérico de tipo *inline*. No tiene valor semántico

- Etiquetas para multimedia
    * `<img>`: Define una imágen. Es necesario indidcarle con el atributo `src` la URL de la imágen. Y `alt` representa un texto alternativo en caso de que la imágen no cargue.
    * `<svg>`: Define un *svg*
    * `<iframe>`: Define un contenedor para una página web, dentro de otra página web
    * `<video>`: Define un contenedor de video.

- Etiquetas para formularios
    * `<form>`: Define un formulario
    * `<input>`: Define un elemeneto de entrada del formulario. Existen varios tipos. Los cuales se indican con `type`. Para mas info revisar la [Documentacion](https://developer.mozilla.org/es/docs/Learn/Forms/HTML5_input_types "documentacion")
    * `<label>`: Es un titulo de la etiqueta `<input>`. Es utilizado para acciones de accesibilidad
    * `<button>`: Define un botón. Es usado para la interactividad de la página.

- Etiquetas para listas
    * `<ul>`: Define una lista desordenada. (unordered list)
    * `<ol>`: Define una lista ordenada (ordered list)
    * `<li>`: Define un elemento dentro de una lista (list item)