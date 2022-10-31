# Manipulando archivos desde la termina
## comando ls
Con el comando ls podemos visualizar una lista de los archivos incluso los ocultos (marcados con un punto al inicio)

```
$ ls -la
```
la bandera -lS muestra los archivos ordenados por tamaño del mayor al menor. Se le puede agregar el atributo `h` para ver los tamaños realmente en un formato que podamos entender

```
$ ls -lS
$ ls -lSh
```
La bandera `-lr` permite listar los elementos pero ordenados en orden alfabetico descendente (z-a)

```
$ ls -lr
```
La bandera `-d` permite listar los elementos pero únicamente si son directorios

```
$ ls -d
```
## comando tree
Es otro comando para visualizar archivos, colocando solo el comando tree muestra todo el desglose de directorios en la computadora, pero se le pue de introducir el argumento `-L profundidad` donde se le debe pasar como argumento el número de niveles del cual quiere profundizar.

Por ejemplo, aquí mostrará el arbol únicamente con una profundidad de 2 directorios
```
$ tree -L 2
```
## Comando mkdir
Sirve para crear un directorio
```
$ mkdir <nombre_directorio>
```
## Comando touch
Sirve para crear archivos, sino se le indica la extensión, por defecto será .txt
```
$ touch <nombre_archivo>
```
## comando cp
Este comando copia archivos
```
$ cp <nombre_archivo> <nombre_copia>
```
## comando mv
Este comando mueve archivos. Pueden usarse rutas relativas o estáticas
```
$ mv <nombre_archivo> <nombre_directorio>
```
Con este comando también se pueden renombrar archivos/directorios colocando el nuevo nombre como argumento tambien
```
$ mv <nombre_archivo> <nuevo_nombre_archivo>
```
## comando rm
Sirve para borrar archivos
```
$ rm <nombre_archivo>
```
El modo interactivo `-i` de remove permite eliminar archivos solo si se realiza una confirmación
```
$ rm -i <nombre_archivo>
```
El comando remove con directorios no es tan sencillo de aplicar, para ello hay que considerar lo siguiente:

- `rm -r` Recoursive elimina de manera recursiva para directorios
- `rm -rf` Esto fuerza la eliminación sin importar qué


 