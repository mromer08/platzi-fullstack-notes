# Curso de Frontend developer
----------------------------------------------
Curso básico introductorio para fronted developer de platzi

# Introducción al desarrollo frontend
Puede visualizarse un manual en la siguiente carpeta de drive

https://drive.google.com/drive/folders/1rjHz_DeQAIr784vaIxXQRmhHzTZMCNl0?usp=sharing

> La web se construye mediante tres tecnologías esenciales: HTML, CSS y JavaScript. Estos tres lenguajes son las bases en que una app o página web está construida.

## Qué es HTML
> Es el esqueleto con el cual se define cada elemento que compone una pagina web.

El Lenguaje de Marcado de Hipertexto o HTML por sus siglas en inglés (HyperText Markup Language) es el código para construir la **estructura** de una página web.

## Qué es CSS
> Es el que le da éstilo y orden a los elementos de una página web.

El lenguaje de Hojas de Estilos en Cascada o CSS por sus siglas en inglés (Cascade Style Sheets) es el código para **describir la presentación** de los elementos de la página web, los que definimos con HTML.

## Herramientas del navegador
Las herramientas de desarrollador se despliegan con la combinación de teclas
* `F12`
* `Ctrl + Shift + I`
* `Cmd + Opt + I`
* clic derecho e `Inspeccionar` en tu navegador preferido

## Motores de render
> Convierten los archivos a pixeles.

Los motores de renderizado son programas que **traducen nuestro código en un lenguaje que entienda el navegador**, de esta manera el programa sabrá que es lo que tiene que mostrar por pantalla al usuario.

### Motores de renderizado del navegador
|Navegador|Motor|
|---------|-----|
|Chrome|Blink|
|Edge|Edge HTML|
|Safari|Webkit|
|Firefox|Gecko|

Todos realizan esta compilación de manera diferente, pero con el mismo resultado, es decir, convierten los archivos a píxeles.

### Proceso de renderizado del motor del navegador
El motor del navegador realiza 5 pasos para compilar el codigo hasta el renderizado por pantalla:

1. Transforma los **archivos a un árbol de objetos** HTML o CSS, estos se denominan DOM (Document Object Model) y CSSDOM (Cascade Style Sheet Object Model), respectivamente. Cada nodo en el árbol es una representación de los elementos que contiene el archivo HTML o CSS.
2. **Calcula el estilo** correspondiente a cada nodo del DOM relacionado al CSSDOM.
3. **Calcula las dimensiones** de cada nodo y dónde va en la pantalla.
4. Pinta o renderiza los diferentes elementos como **cajas o contenedores**.
5. Agrupa todas las cajas en diferentes capas para **convertirlas en una imagen que se renderiza en pantalla**.