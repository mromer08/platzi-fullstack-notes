# Unidades de medida
> Las unidades de medida establecen una longitud para un determinado elemento o tipografía.

Existen dos tipos de medidas:
- absolutas
- relativas
## Medidas absolutas
> Las medidas absolutas son valores fijos, por lo que la medida no cambiará.

La unidad absoluta más utilizada son los píxeles `px`

|Unidad |	Nombre 	            |Equivalencia            |
|-------|-----------------------|------------------------|
|px 	|píxeles 	            |1 px = 1/96 in          |
|cm 	|centímetros 	        |1 cm = 96/2.54 px       |
|mm 	|milímetros 	        |1 mm = 1/10 cm          |
|Q 	    |cuartos de milímetros 	|1 Q = 1/4 mm            |
|in 	|pulgadas 	            |1 in = 2.54 cm = 96 px  |
|pc 	|picas 	                |1 pc = 1/6 in           |
|pt 	|puntos 	            |1 pt = 1/72 in          |

## Medidas relativas
> Las medidas relativas son valores variables, por lo que la medida depende de un valor externo
Se debe tener en cuidado con estas porque un pequeño cambio puede desencadenar tamaños muy elevados.

Unidad 	|Depende de                                             |
|-------|-------------------------------------------------------|
em 	    |el elemento que lo contiene                            |
rem 	|el elemento raíz                                       |
vw 	    |1% del ancho de la pantalla (view width)               |
vh 	    |1% de la altura de la pantalla (view height)           |
vmin 	|1% de la dimensión más pequeña de la pantalla          |
vman 	|1% de la dimensión más grande de la pantalla           |
ch 	    |anchura del caracter “0” del elemento que lo contiene  |
lh 	    |altura de la línea del elemento que lo contiene        |

## Diferencia entre rem y em

La medida em depende del elemento que lo contiene, es decir, si un elemento tiene font-size de 20px, el valor de em es igual a 20px, el valor de 2em será de 40px y así sucesivamente.

La medida rem depende del elemento raíz, el valor del font-size del elemento raíz es de 16px, por lo tanto, el valor de 2rem es igual a 32px, y así sucesivamente.

En las herramientas del desarrollador, te muestra el tamaño de la fuente (font) en píxeles.

## Diferencia entre porcentajes y la anchura y altura de la pantalla

Los porcentajes representan el tamaño con respecto al total del elemento padre. Si el elemento padre tiene 20px, entonces el 100% será de 20px.

Por otra parte, las medidas de anchura vw y altura vh representan el tamaño con respecto al total de la pantalla. Si el elemento tiene un tamaño de 100vw será el 100 por ciento de la pantalla.

Si un elemento tiene todo el tamaño de la pantalla, entonces solamente en ese punto la medida 100% será igual a 100vw o 100vh.

## Problema con las medidas de texto

Los navegadores tienen una opción para cambiar el tamaño del texto. Con medidas absolutas, el tamaño de la letra no cambiará, por lo que será un problema para el usuario.

Con medidas relativas, el tamaño cambiará con respecto a la fuente del elemento raíz. Por lo que estas son una buena opción para solucionar este problema de accesibilidad, en específico la medida rem.

Sin embargo, la medida rem equivale a 16px y puede ser confuso mientras utilices valores altos. Por lo que vamos a cambiar el valor del elemento de la raíz para que la medida rem sea igual a 10px.

En la etiqueta `<html>` cambia el valor de la propiedad font-size a 62.5%, resultado de una regla de tres: si 16px es igual al 100% entonces cuál será el porcentaje para 10px.
```css
html {
    font-size: 62.5%;
}
```
Con este cambio, la medida rem será igual a 10px, ahora los puedes utilizar sin problema y tus textos cambiarán según las preferencias de usuario.

# Responsive Design
> onsiste en un conjunto de herramientas para que tu sitio se vea bien en varias medidas de pantalla

En la actualidad, la mayoría de sitios web son visitados desde un celular, por lo que asegurarse que nuestro sitio sea responsivo para cualquier dispositivo es fundamental para optimizar las ganancias.

## Qué son las media queries

Las media queries son reglas CSS que establecen un comportamiento distinto o diferentes estilos en un cierto rango de la pantalla. Esto sirve para establecer el layout del sitio web para diferentes tipos de pantalla: escritorio, tablets y celulares.

Estos son dos tipos de media querie :

- `max-width` / `max-height`: establece un rango máximo para cierto comportamiento.
- `min-width` / `min-height`: establece un rango mínimo para cierto comportamiento.

Estos valores son parecidos a condicionales, mientras se cumpla la condición, aplica determinados estilos.

### Estructura de la media querie

La estructura de una media querie consiste en empezar con @media, seguido del tipo de la media querie estableciendo un rango, envolviendo las reglas CSS dentro de ese rango.

```css
@media (max-width:750px){
    div {
        color: red;
    }
    p {
        background-color: red;
    }
}
```

### Herramientas del desarrollador para media queries

Para observar que los cambios se estén aplicando correctamente, las herramientas de desarrollador serán de gran ayuda.

Abre las herramientas del navegador y da clic en la opción “Toggle device tool”, aquí podrás manipular la pantalla y observar en cuántos píxeles está ocurriendo determinados estilos.
Herramientas de desarrollador para media queries