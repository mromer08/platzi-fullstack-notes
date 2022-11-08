# Comandos para iniciar un repositorio con git
- `git init`: para inicializar el repositorio git y el staged
- `git add nombre_del_archivo.txt`: enviar el archivo al staged
- `git status`: ver el estado, si se requiere agregar al starget o si se requiere commit
- `git conf`: para ver las posibles configuraciones
- `git conf --list`: para ver la lista de configuraciones hechas
- `git conf --list --show-origin`: para mostrar las configuraciones y sus rutas
- `git rm --cached nombre_del_archivo.txt`: para eliminar el archivo del staged(ram)
- `git rm nombre_del_archivo.txt`: para eliminar del repositorio
- `git log` muestra el historial de cambios en el repositorio

# Analizar cambios en los archivos
- `git show archivo.txt` muestra los cambios realizados en un archivo
- `git diff <hash_commit1> <hash_commit2>` compara dos commits. El primero respecto al segundo

# ¿Qué es el staging?
El working directory es el lugar donde estamos trabajando actualmente, de ahí se pasan al staging. El staging es el lugar donde se guardan temporalmente los cambios, para luego ser llevados definitivamente al repositorio. El repositorio es el lugar donde se guardan todos los registros de los cambios realizados a los archivos.

# ¿Qués es branch(rama) y cómo funciona un Merge en git?
Una branch o rama es una versión del código del proyecto sobre el que se trabaja. Estas ramas ayudan a mantener el orden en el control de versiones y manipular el código de forma segura.

## Tipos de branches o ramas en git

1. Rama main (Master): Es la rama principal, de la que surgen las otras
2. Rama development: Es la rama que se usa cuando se está experimentando o desarrollando en un projecto
3. Rama hotfix: Se utiliza esta rama cuando se requiere resolver un bug de improvisto de manera rápida.

`Todos los commits se aplican sobre la rama en la que se encuentra`

# Volver en el tiempo
Con `git log --stat` se puede ver el registro de cambios en el proyecto con información extra de manera resumida
## git checkout

Con el comando git `git checkout <hash_commit>` podemos viajar en el tiempo y volver a una versión anterior del archivo o del proyecto completo y también permite regresar. Con `git checkout <rama>`  también se puede cambiar entre ramas. Para regresar a la versión actual basta con hacer el checkout hacia la rama en la que se trabaja:
```
# Vuelvo al pasado
git checkout acb41ef86077b84634af2c6b417db3b85765e601 historia.txt
# Regreso al presente
git checkout master historia.txt
```

## git reset

Para volver a commits previos borrando los cambios realizados en ese commit, se puede usar:

- `git reset --soft <hash_commit>`: Elimina los cambios hasta el staging area
- `git reset --mixed <hash_commit>`: Elimina los cambios hasta el working area
- `git reset --hard <hash_commit>`: Regresa hasta el commit el commit que se le indica (lo borra del disco)

## git reset vs. git rm
### git rm
Este comando elimina archivos de git sin eliminar su historial del sistema de versiones, por lo que si se quiere recuperar solo hay que "viajar en el tiempo" y recuperar el último commit antes de borrar el archivo

- `git rm --cached`: Elimina los archivos del repositorio local y del staging area. Volviendolos al working directory.
- `git rm --force`: Elimina los archivos de git y del disco duro. Es posible recuperarlos luego pero con comandos más avanzados.

### git reset
A diferencia del `git checkout`, este comando `git reset` no permite el retorno por lo que una vez usado no se podrá volver. Este comando solo debe usarse en casos de emergencia ya que es peligroso.

Con `git reset HEAD` podemos sacar archivos del staging area, no para borrarlos sino para que los últimos cambios no se envién al último commit.
