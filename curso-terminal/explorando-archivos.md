# Explorando Archivos
## Comando head
`head` muestra las primeras 10 lineas de cualquier archivo de texto
```
$ head <archivo.txt>
```
Se puede agregar el atributo `-n` para modificar la cantidad de lineas a mostrar

## Comando tail
Muestra las últimas 10 lineas de cualquier archivo de texto
```
$ tail <archivo.txt>
```
Se puede agregar el atributo `-n` para modificar la cantidad de lineas a mostrar

## comando less
Muestra de manera interactiva un archivo completo
```
$ less <archivo.txt>
```
Dentro de less se pueden realizar busquedas utilizando `/`
```
texto de cualquier archivo ...

/cualquier
```
Para salir solo se presiona la tecla `q` (quit)

## abrir archivos con interfaz grafica
En macOS es con el comando `open` y en linux es con el comando `xdg-open` el cual utiliza el editor de texto que tenemos por defecto (se puede cambiar)
```
$ xdg-open <archivo.txt>
```
## abrir directorios con interfaz grafica
Se utiliza el comando `nautilus` seguido del nombre del directorio
```
$ nautilus <directorio1>
```