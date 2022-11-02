# Cómo se manejan los permisos
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
