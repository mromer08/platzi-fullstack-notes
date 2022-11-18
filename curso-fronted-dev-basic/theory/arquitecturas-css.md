# Arquitecturas en CSS
> Las arquitecturas CSS consisten en manejar el código CSS con una serie de reglas y patrones para facilitar su lectura, mantenibilidad y escabilidad.

Las arquitecturas CSS se encargan de manejar una norma en el código para que cualquiera pueda añadir o quitar funcionalidad sin mucho trabajo en un proyecto donde se maneja una gran cantidad de código.

## Objetivos de las arquitecturas de CSS

Los objetivos de las arquitecturas de CSS son:

- **Ser predecible**: el código debe ser lo menos complejo posible.
- **Reutilizable**: el código debe ser lo menos redundante, para evitar problemas con la especificidad.
- **Mantenible**: el código debe ser lo más fácil de manejar para añadir o quitar estilos.
- **Escalable**: el código debe ser capaz de crecer.

## Buenas prácticas de las arquitecturas de CSS

Las buenas prácticas de las arquitecturas de CSS son:

- **Lineamientos y estándares**: definir normas en tu grupo de trabajo de cómo estará escrito el código.
- **Documentación**: establecer una breve explicación del código y de los lineamientos, esto sirve especialmente para nuevas personas se familiaricen con lo que deben hacer.
- **Componentes**: establecer de manera componetizada cada uno de los elementos de tu página, es decir, manejarlos por partes para después unirlos en un todo.

## Arquitecturas más comunes
VER EL MANUAL PARA MEJOR COMPRENSIÓN
### OOCSS (Object Oriented CSS)
> Consiste en separar la estructura principal y la piel o máscara.

En otras palabras, consiste en tener objetos que son estructuras principales. Estos objetos estarán unidos en una máscara, donde esta será la que cambie pero manteniendo la estructura intacta.

### BEM (Block-Element-Modifier)
> Es una de las más utilizadas actualmente. Consiste en manejar los elementos en clases definidas por bloques, elementos y modificadores.

- **Bloque**: es la estructura principal que es contenedora de varios elementos.
- **Elemento**: es el elemento HTML que hace referencia el contenedor.
- **Modificador**: es un estilo específico para el elemento.

Puede consultarse el siguiente artículo para profundizar en el tema: [Guia de BEM para CSS](https://platzi.com/blog/bem/ "Guia de BEM para CSS")

### SMACSS (Scalable and Modular Architecture for CSS)
> indica el orden de componentes que estarán ubicados en carpetas. La unión de estos componentes dará como resultado tu página web con estilos.


- **Base**: elementos base, como botones, títulos, enlaces.
- **Layout**: estructura de la página, relacionado con el `Responsive Design`.
- **Módulos**: elementos que contienen a los elementos base.
- **Estado**: estilos relacionados con el comportamiento de elemento, relacionado con las `pseudoclases` y `pseudoelementos`.
- **Temas**: conjunto de estilos que definen tu página web.

### ITCSS (Inverted Triangle CSS)
> Consiste en separar los archivos del proyecto; mediante ajustes, herramientas, elementos, entre otros. Todo esto para manejar los detalles de especificidad, claridad y magnitud.

### Atomic Design
> También es una de las más utilizadas actualmente. Consiste en manejar los elementos como una estructura mínima, a partir de la unión de varias de estas, dará como resultado los estilos de la página web.

Se basa en la estructura mínima de la materia, los átomos.


- **Átomos**: estructura mínima; como botones, enlaces, títulos, entre otros.
- **Moléculas**: unión de átomos.
- **Organismos**: unión de moléculas.
- **Plantillas**: unión de organismos.
- **Páginas**: unión de plantillas.

# Enlaces de interés
* https://9elements.com/bem-cheat-sheet/
* https://style.helpscout.com/visual-elements/
* https://www.designsystemsforfigma.com/
* [How to organize your CSS](https://intelygenz.medium.com/how-to-organize-your-css-with-oocss-bem-smacss-a2317fa083a7 "How to organize your CSS")
* [OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/#top "OOCSS")
* [BEM](https://en.bem.info/methodology/ "BEM")
* [SMACSS](https://medium.com/@GreenXIII/organize-your-css-smacss-way-89c087db5092 "SMACSS")
* [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/ "ITCSS")
* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/ "Atomic Design")

