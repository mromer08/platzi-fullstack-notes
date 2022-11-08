# Flujo de trabajo básico con un repositorio remoto
En un repositorio creado por nosotros el flujo de trabajo se compone básicamente por:
1. `git init` con el que se inicia un repositorio local
2. `git add` con el que se agregan archivos o cambios en el respositorio.
3. `git commit -m ` con el que se guardan los cambios agregados en el reposistorio. Tambien puede usarse `git commit -am ` para guardar MODIFICACIONES a archivos que se estan dentro del repo y hacer commit de una vez.
4. `git push` con el que se envía la última versión de los commits al repositorio remoto

Si no se cuenta con un repositorio ya creado, podemos clonar uno ya existente con el comando `git clone` y obtner la versión más acutalizada del repositorio con el comando `git pull`

# Introducción a las ramas o branches
Se crea una rama con `git branch <nombre_rama>`, esta rama se crea desde el punto en el que nos encontramos (se recomienda que sea la última versión del master). Puediendo ser tanto el master como cualquier otro commit anterior.

- `git branch <nombre de la rama>`: Con este comando se genera una nueva rama.
- `git checkout <nombre de la rama>`: Con este comando puedes saltar de una rama a otra.
- `git checkout -b <rama>`: Genera una rama y nos mueve a ella automáticamente, Es decir, es la combinación de git brach y git checkout al mismo tiempo.

Para ver la historia de una rama se utiliza el comando
```
# para un resumen de las ramas y su historia
git show-branch

# Para ver de manera más detallada la historia de cada rama en el repo
git show-branch --all
```

## HEAD
La cabecera o HEAD representan la rama y el commit de esa rama donde estamos trabajando. Por defecto, esta cabecera aparecerá en el último commit de nuestra rama principal. 
## Fusión de ramas con git merge
Con el comando `git merge <rama_para_unir>` se pueden unir ramas. Lo que hará es un nuevo commit en donde los cambios de la `<rama_para_unir>` se FUSIONARÁN CON LA RAMA ACTUAL (en este caso la master). Para ello es necesario verificar que nos encontremos en la rama desde la cual se quiere hacer el merge
```
git checkout master
git merge ramab
```
## Resolver conflictos en un merge
Al momento de querer hacer un commit puede que surja algún conflicto. Para ello hay dos formas de resolverlas: manualmente o con el editor de código. Para resolverlo de manera manual, hay que identificar un patrón en el archivo de texto y eliminarla. El patrón es bastante simple e indica el head y la rama que tiene el conflicto.

Luego de haber resuelto el conflicto se tiene que volver a hacer un commit con esos cambios ya que en ese momento nos encontramos en la zona de `unmerged`

Para revertir o cancelar un merge basta con usar el comando `git merge --abort`

### Conflictos en repositorios remotos
Al trabajar en equipo es necesario trabajar con repositorios remotos. Para ello es comun que se deba clonar el repositorio con `git clone`. Para actualizar el repositorio local se usa el comando `git fetch` y luego se debe de hacer un merge para fusionar los datos traídos del repositorio remoto con los locales con `git merge`.

Para traer los datos del repositorio local y fusionarlos de una vez se utiliza `git pull`
