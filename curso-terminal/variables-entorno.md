# Cómo configurar variables de entorno
Las variables de entorno son útiles cuando necesitamos que cierta información prevalezca para poder trabajar más rápido o necesitamos guardar información para no tener que recordarla constantemente.
## Links simbólicos
Son como accesos directos en Linux. Para crearlos se utiliza el comando `ln -s` seguido de la ruta a la cual apuntará el link y luego el nombre con el que se llamará el acceso directo

```
ln -s Documents/Dev Desarrollo
```
Para eliminarlo es igual que cualquier otro archivo. A pesar de que los links simbolicos tienen permisos según la terminal, en realidad no aplican como tal dichos permisos.
## Variables de entorno en Linux

En linux hay varias variables de entorno que ya están preestablecidas, para verlas desde la consola es tan simple como usar el comando `echo` seguido de la variable de entorno. O el comando `printenv` para verlas todas

```
echo $HOME
printenv
```

Las variables de entorno SIEMPRE se llaman con el signo `$` por delante

### Variables de entorno escenciales en linux
|Variable| 	Contenido|
|--------|-----------|
|HOME 	        |Indica el home del usuario|
|PATH 	        |Indica las direcciones de donde están los binarios que usa el sistema|
|BASH_VERSION 	|Indica la versión del bash que estás utilizando|
|SHELL 	        |Dirección de la shell que estás utilizando|

Por convención las variables de entorno se crean en mayúsculas.

## Creando/Editando variables de entorno
Para crear/editar variables de entorno o hacer permanente algún alias se debe de editar el archivo `.bashrc` (para bash) o `.zshrc` (para zsh) con algún editor de texto. Una vez estando dentro se pueden declarar alias o variables de entorno
```
# Contenido dentro del archivo .bashrc
# Creando nuevo alias
alias l="ls -lh"

# creando nueva variable de entorno
PLATZI_MESSAGE="Hola mundo"
```
Para concatenar variables de entorno, se hace de la siguiente manera, en este caso con la variable `PATH`:
```
PATH=$PATH:/home/dir1
```
Notese como primero se llama a la variable anterior de PATH y luego con `:` se concatena la siguiente ruta (en este ejemplo)