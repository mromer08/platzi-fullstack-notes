# Wildcards/Comodines
Son una serie de caracteres especiales que nos permiten encontrar patrones o realizar búsquedas más avanzadas. Es aplicable para archivos y directorios.

Se utiliza en cualquier comando de manipulación de archivos como `ls`, `mv`, `cp` y `rm`.

Las wildcards buscan incluso en contenido de carpetas a 2 niveles de profundidad por defecto

## Tabla de Wildcards
|Wildcard 	|Función|
|-----------|-------|
|*          |Busca todo|
|?          |Busca por cantidad de caracteres|
|[CLASE]    |Busca por caracteres específicos|

## Buscar todo (*)
Busca toda la información dentro de un directorio y es posible limitarla indicarse alguna extensión con la que termina o inicia. Ejemplos
```
$ ls *.txt
$ ls datos*
```
## Buscar por cantidad de caracteres (?)
De la misma manera que antes, se le puede limitar y se coloca en la cadena de manipulación el signo `?` para indicar el lugar del caracter (o caracteres) que puede ir variando en la búsqueda

```
$ ls datos?
$ ls datos???
$ ls -l foto?.png
```
## Clases: similitud con expresiones regulares
Se puede crear algo así como una expresión regular para hacer filtrados por letras mayusculas o minusculas por ejemplo. Aunque no es igual que una expresión regular como tal, se le parece.
- `upper`
```
$ ls [[:upper:]]*
$ ls -d [[:upper:]]*
```
- `lower`
```
$ ls [[:lower:]]*
$ ls -d [[:lower:]]*
```
Para crear una clase y utilizar las wildcards basta con ponerla entre corchetes y colocar dentro los caracteres que queremos incluir o por los que queremos filtrar.

Por ejemplo este muestra los archivos que inician con 'a' o con 'd':
```
$ ls [ad]*
```
- rango de numeros

La clase para filtrar por rango de números es igual que en una regex:

```
$ ls -l foto[2-6]*
```
Adicionalmente se encuentran las siguientes clases que envuelven los digitos y letras en general
```
$ ls -l foto[:alnum:]*  <caracteres alfanumericos>
$ ls -l foto[:digit:]*  <caracteres numericos>
$ ls -l foto[:alpha:]*  <caracteres alfabéticos>
```