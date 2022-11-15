# Git reset y git reflog
> git reset es una mala práctica, no deberías usarlo en ningún momento. Debe ser nuestro último recurso.

## Resumen
- Git reflog guarda referencia de TODO lo que se ha hecho en el repositorio (A diferencia de git log).
- git reset devuelve al estado que se le indique, eliminando todo antes del estado indicado
- Comunmente su utiliza el reset --hard ya que en casos de emergencia es el más efectivo

Git guarda todos los cambios aunque decidas borrarlos, al borrar un cambio lo que estás haciendo sólo es actualizar la punta del branch, para gestionar éstas puntas existe un mecanismo llamado registros de referencia o reflogs.

La gestión de estos cambios es mediante los hash’es de referencia (o ref) que son apuntadores a los commits.

Los recoges registran cuándo se actualizaron las referencias de Git en el repositorio local (sólo en el local), por lo que si deseas ver cómo has modificado la historia puedes utilizar el comando:

> git reflog

Muchos comandos de Git aceptan un parámetro para especificar una referencia o “ref”, que es un puntero a una confirmación sobre todo los comandos:

- git checkout Puedes moverte sin realizar ningún cambio al commit exacto de la ref
```bash
git checkout eff544f
```
- git reset: Hará que el último commit sea el pasado por la ref, usar este comando sólo si sabes exactamente qué estás haciendo
```bash
git reset --hard eff544f # Perderá todo lo que se encuentra en staging y en el Working directory y se moverá el head al commit eff544f

git reset --soft eff544f # Te recuperará todos los cambios que tengas diferentes al commit eff544f, los agregará al staging area y moverá el head al commit eff544f
```
- git merge: Puedes hacer merge de un commit en específico, funciona igual que con una branch, pero te hace el merge del estado específico del commit mandado
```bash
git checkout master
git merge eff544f # Fusionará en un nuevo commit la historia de master con el momento específico en el que vive eff544f
```

¿Qué pasa cuando todo se rompe y no sabemos qué está pasando? Con git reset HashDelHEAD nos devolveremos al estado en que el proyecto funcionaba.

- git reset --soft HashDelHEAD te mantiene lo que tengas en staging ahí.
- git reset --hard HashDelHEAD resetea absolutamente todo incluyendo lo que tengas en staging.

# Reconstruir commits en Git con amend
Remendar un commit con amend puede modificar el commit más reciente (enmendar) en la misma rama. Lo ejecutamos así:
```bash
git add -A # Para hacer uso de amend los archivos deben de estar en staging
git commit --amend # Remendar último commit
```
Este comando sirve para agregar archivos nuevos o actualizar el commit anterior y no generar commits innecesarios. También es una forma sencilla de editar o agregar comentarios al commit anterior porque abrirá la consola para editar este commit anterior.

> Usar amend es una mala práctica, sobre todo cuando ya se ha hecho push o pull al repositorio remoto.
> Al momento de hacer amend con algún commit que esté en remoto, va a generar un conflicto que se va a arreglar haciendo un commit adicional y se perderá el beneficio del amend.

# Buscar archivos y commits de git con grep y log
El comando `git grep` funciona igual que el comando `grep` en linux. Las flags más importantes son:

- `git grep <palabra>` Encuentra los archivos donde se ha usado esa palabra
- `git grep -n <palabra>` Muestra el archivo y número de linea donde se a usado esa palabra
- `git grep -c <palabra>` Muestra cuantas veces se ha usado esa palabra en los documentos del repo

Para buscar dentro del log (commits) del repositorio se utiliza la flag `-S`

```
git log -S "palabra_buscar"
```