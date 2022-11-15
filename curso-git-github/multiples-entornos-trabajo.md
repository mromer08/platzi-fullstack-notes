# Git Rebase
> Es una mala práctica usar rebase, sobretodo en remoto. Debe usarse con precaución de manera local
Git Rebase SOLO DEBE USARSE de manera LOCAL. Ya que mueve o combina una rama con otra sin dejar rastro de los cambios (commits)
https://docs.google.com/document/d/10c_OpDcSMRTZz-I7bJBpv-xOI1mdzilycSJJKtA-g18/edit?usp=sharing

Para hacer un rebase en la rama feature de la rama master, correrías los siguientes comandos:
```bash
git checkout feature
git rebase master
```
Esto trasplanta la rama feature desde su locación actual hacia la punta de la rama master

Ahora, falta fusionar la rama feature con la rama master
```bash
git checkout master
git rebase feature
# No reorganices el historial público
```

Nunca debes reorganizar las confirmaciones una vez que se hayan enviado a un repositorio público. La reorganización sustituiría las confirmaciones antiguas por las nuevas y parecería que esa parte del historial de tu proyecto se hubiera desvanecido de repente.

# Git stash: Guardar cambios en memoria y recuperarlos después
> Útil para moverse entre ramas con cambios guardados en memoria sin necesidad de commitearlos. Es un comando muy útil

El stashed nos sirve para guardar cambios para después, Es una lista de estados que nos guarda algunos cambios que hicimos en Staging para poder cambiar de rama sin perder el trabajo que todavía no guardamos en un commit

Ésto es especialmente útil porque hay veces que no se permite cambiar de rama, ésto porque tenemos cambios sin guardar, no siempre es un cambio lo suficientemente bueno como para hacer un commit, pero no queremos perder ese código en el que estuvimos trabajando.

El stashed nos permite cambiar de ramas, hacer cambios, trabajar en otras cosas y, más adelante, retomar el trabajo con los archivos que teníamos en Staging, pero que podemos recuperar, ya que los guardamos en el Stash.
## git stash

El comando git stash guarda el trabajo actual del Staging en una lista diseñada para ser temporal llamada Stash, para que pueda ser recuperado en el futuro.

Para agregar los cambios al stash se utiliza el comando:
```bash
git stash
```
Podemos poner un mensaje en el stash, para asi diferenciarlos en git stash list por si tenemos varios elementos en el stash. Ésto con:
```bash
git stash save "mensaje identificador del elemento del stashed"
```
## Obtener elelmentos del stash

El stashed se comporta como una Stack de datos comportándose de manera tipo LIFO (del inglés Last In, First Out, «último en entrar, primero en salir»), así podemos acceder al método pop.

El método pop recuperará y sacará de la lista el último estado del stashed y lo insertará en el staging area, por lo que es importante saber en qué branch te encuentras para poder recuperarlo, ya que el stash será agnóstico a la rama o estado en el que te encuentres. Siempre recuperará los cambios que hiciste en el lugar que lo llamas.

Para recuperar los últimos cambios desde el stash a tu staging area utiliza el comando:
```bash
git stash pop
```
Para aplicar los cambios de un stash específico y eliminarlo del stash:
```bash
git stash pop stash@{<num_stash>}
```
Para retomar los cambios de una posición específica del Stash puedes utilizar el comando:
```bash
git stash apply stash@{<num_stash>}
```
Donde el <num_stash> lo obtienes desden el git stash list
## Listado de elementos en el stash

Para ver la lista de cambios guardados en Stash y así poder recuperarlos o hacer algo con ellos podemos utilizar el comando:
```bash
git stash list
```
Retomar los cambios de una posición específica del Stash || Aplica los cambios de un stash específico
## Crear una rama con el stash

Para crear una rama y aplicar el stash más reciente podemos utilizar el comando
```bash
git stash branch <nombre_de_la_rama>
```
Si deseas crear una rama y aplicar un stash específico (obtenido desde git stash list) puedes utilizar el comando:
```bash
git stash branch nombre_de_rama stash@{<num_stash>}
```
Al utilizar estos comandos crearás una rama con el nombre <nombre_de_la_rama>, te pasarás a ella y tendrás el stash especificado en tu staging area.
## Eliminar elementos del stash

Para eliminar los cambios más recientes dentro del stash (el elemento 0), podemos utilizar el comando:
```bash
git stash drop
```
Pero si, en cambio, conoces el índice del stash que quieres borrar (mediante git stash list) puedes utilizar el comando:
```bash
git stash drop stash@{<num_stash>}
```
Donde el <num_stash> es el índice del cambio guardado.

Si, en cambio, deseas eliminar todos los elementos del stash, puedes utilizar:
```bash
git stash clear
```
## Consideraciones:

- El cambio más reciente (al crear un stash) SIEMPRE recibe el valor 0 y los que estaban antes aumentan su valor.
- Al crear un stash tomará los archivos que han sido modificados y eliminados. Para que tome un archivo creado es necesario agregarlo al Staging Area con git add [nombre_archivo] con la intención de que git tenga un seguimiento de ese archivo, o también utilizando el comando git stash -u (que guardará en el stash los archivos que no estén en el staging).
- Al aplicar un stash este no se elimina, es buena práctica eliminarlo.

# Git Clean: Limpiar el proyecto de archivos no deseados

El comando clean actúa en archivos sin seguimiento, este tipo de archivos son aquellos que se encuentran en el directorio de trabajo, pero que aún no se han añadido al índice de seguimiento de repositorio con el comando `add`.
```bash
git clean
```
La ejecución del comando predeterminado puede producir un error. La configuración global de Git obliga a usar la opción `force` con el comando para que sea efectivo. Se trata de un importante mecanismo de seguridad ya que este comando no se puede deshacer.
## Revisar que archivos no tienen seguimiento.
```bash
git clean --dry-run
```
## Eliminar archivos listados pero sin seguimiento
```bash
git clean -f
```

Para más información ir a la documentación oficial https://git-scm.com/docs/git-clean

# Git cherry-pick: traer commits viejos al head de un branch
> En general es preferible hacer el trabajo manual con un merge o checkout, ya que usar cherry-pick es una MALA PRACTICA. Tener precaución con el uso de este comando

Git Cherry-pick es un comando que permite tomar uno o varios commits de otra rama sin tener que hacer un merge completo. Así, gracias a cherry-pick, podríamos aplicar los commits relacionados con nuestra funcionalidad en la rama master sin necesidad de hacer un merge. 
Para poder usarlo se debe estar en la rama sobre la que se aplicará el cambio, y usar el comando indicandole el hash del commit que nos queremos traer

```bash
# Quiero traerme una funcionalidad a la rama main
git checkout main

# Voy a aplicarla en main un commit hecho en otra rama
git cherry-pick <hash_commit>
```
