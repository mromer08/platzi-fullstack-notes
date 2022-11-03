# Cómo se manejan los permisos
## Tabla de comandos para la clase
|Comando|Función|
|-------|-------|
|whoami |Muesta el usuario con el que se está trabajando|
|su 	|Switch User Cambia al usuario al que le especifiques|
|chmod 	|Cambia los permisos de un archivo|
|chown 	|Change Owner Cambia el propietario de un archivo|
|passwd |Cambia la contraseña del usuario que se le indique o el actual|
## Tipos de archivos
En la siguiente tabla se hace referencia al primer caracter que se ve al aplicar el comando `ls -l`

|Atributo     |Tipo de archivo|
|------------|-------|
| - | Un archivo normal|
| d | Un directorio |
| l | Un link simbólico|
| b | Bloque especial, son archivos que manejan información para el sistema, como la información de un disco duro|

## Tipo de modo
Los siguientes caracteres se leen de 3 en 3, por cada uno de los siguientes usuarios:

- r (read)
- w (write)
- x (execute)

### Owner (Dueño)
El dueño del archivo, si no se ha cambiado, es quien lo creó y tienen mayor jerarquía sobre los otros 3. Le corresponden los tres primeros caracteres de los permisos (rwx)
### Group
Se puede crear grupos de usuarios para darle a todos o varios los mismos permisos. A estos usuarios le corresponden el cuarto, quinto y sexto caracter de los permisos de usuarios y tienen mayor jerarquía que el último. (r-x)
### World
También llamado “otros”, es cualquier otro usuario que no pertenezca a un grupo de usuario y tampoco sea el dueño, este tiene la menor jerarquía. (r-x)
### Modo Simbólico
|Simbolo|Significado|
|-------|-----------|
|u|Solo para el usuario|
|g|Solo para el grupo|
|o|Solo para otros (world)|
|a|Aplica para todos|
## Tipo de permisos
|Símbolo|Significado|Permiso|
|-------|-----------|-------|
|r 	|readable| 	Significa que puede leer su contenido|
|w 	|writable|	El usuario puede editar el contenido del archivo, también el nombre y los permisos|
|x 	|executable| 	El usuario puede ejecutarlo en caso de que sea un programa|

Los permisos se escriben en ese orden rwx. Para indicar que el permiso no está disponible, se escribe un guion.

Generalmente se utiliza el sistema octal para representar cierto tipo de permisos:

|Octal|Binario|Permisos|
|-----|-------|--------|
|0|000| --- |
|1|001| --x |
|2|010| -w- |
|3|011| -wx |
|4|100| r-- |
|5|101| r-x |
|6|110| rw- |
|7|111| rwx |

## Ejercicios de práctica

Este concepto puede ser algo complicado así que lo mejor es prácticar, te dejaré unos ejercicios para que sea más fácil interpretarlo.

Convierte los siguientes permisos a símbolos y en su representación numérica:

- De un directorio, el dueño tiene permiso de lectura y escritura, el grupo tiene permisos de escritura y ejecución y world no tiene permisos.
- De un enlace simbólico el dueño tiene todos los permisos, el grupo y world sólo de lectura.
- De un archivo comun todos tienen todos los permisos, pero el world no tiene permiso de ejecución.

Si sientes que necesitas más información puedes preguntar a la comunidad o prácticar en la terminal.
# Modificando permisos en la terminal
Con el comando `chmod` (change mod) podemos cambiar los permisos de los archivos de dos formas, una es usando los símbolos (rwx) y otra es con el sistema octal.
## Cómo cambiar los permisos de un archivo (chmod)

Es bastante sencillo cambiar los permisos de forma simbólica. Para esto, hay que escribir después del comando chmod el símbolo del usuario, luego el operador y por último el permiso que quieres agregar o quitar.
```
chmod [simboloDelUsuario][operador][permiso] [archivoParaCambiarSusPermisos]
```
|owner|group|others|
|-----|-----|------|
|u (de user)| 	g 	|o|


|Operador 	|Función|
|-----------|-------|
| +	|Añade un permiso|
| -	|Quita un permiso|
| =	|Asigna un permiso|

Para hacerlo de forma simbólica pero con varios grupos de usuario a la vez, puede hacerse separandolos por comas. En el siguiente ejemplo se le agregará al usuario el permiso de readable y al de grupo se van a reemplazar sus permisos actuales por solamente el de writable
```
$ chmod u+r,g=w [archivo]
```
Para hacerlo mediante el sistema octal, simplemente se debe colocar el número correspondiente según la tabla que se mostró anteriormente POR CADA grupo de usuario. En el siguiente ejemplo se le darán permisos rwx(7) al usuario y r-x(5) al mundo y al grupo:

```
chmod 755 [archivo]
```
## Cambiar el propietario (chown)
Se puede cambiar el propietario de un archivo de la siguiente manera:
```
chown [usuarioAlQuePertenecerá] [archivo]
```
# Cómo gestionar usuarios (whoami | su)
Cuando se listan los archivos con el comando `ls -l` la tercera columna muestra el usuario que creó el archivo y la cuarta columna el grupo que tiene control sobre dicho archivo
```
-rw-r--r-- 1 manu manu  533 oct 25 19:06 alias.md
-rw-r--r-- 1 manu manu 4348 nov  2 22:11 archivos-permisos.md
-rw-r--r-- 1 manu manu 1024 oct 25 18:57 explorando-archivos.md
```
# Ejercicios de práctica

Recuerda que si haces mucho desastre puedes borrar casi lo que sea con el usuario root y ten mucho cuidado con lo que borras.

- Crea un archivo llamado “ArchivoPoderoso.txt”, luego dale los permisos r-xrwxr-xr-x usando la forma simbólica del comando chmod.
- Crea un archivo con el usuario root llamado “pelota.txt”, luego dale los permisos rwxr-x–x usando la forma numérica del comando chmod y luego cambia el propietario a tu usuario principal con chown.
- Crea un archivo con un nombre bonito y asígnale los permisos --------- usando su forma simbólica.
