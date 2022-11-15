# Flujos de trabajo profesionales
Generalemente el programador no se encarga de hacer merge entre ramas, esa es tarea del organizador del proyecto. Líder de proyecto, etc.
## Pull request en github
Es una funcionalidad de github (en gitlab llamada merge request y en bitbucket push request), en la que un colaborador pide que revisen sus cambios antes de hacer merge a una rama, normalmente master.

Al hacer un pull request se genera una conversación que pueden seguir los demás usuarios del repositorio, así como autorizar y rechazar los cambios.

Articulo de interés
https://platzi.com/blog/que-es-devops

https://platzi.com/servidores/

## Forks o Bifurcaciones

Es una característica única de GitHub en la que se crea una copia exacta del estado actual de un repositorio directamente en GitHub, éste repositorio podrá servir como otro origen y se podrá clonar (como cualquier otro repositorio), en pocas palabras, lo podremos utilizar como un git cualquiera
.
Un fork es como una bifurcación del repositorio completo, tiene una historia en común, pero de repente se bifurca y pueden variar los cambios, ya que ambos proyectos podrán ser modificados en paralelo y para estar al día un colaborador tendrá que estar actualizando su fork con la información del original.
.
Al hacer un fork de un poryecto en GitHub, te conviertes en dueñ@ del repositorio fork, puedes trabajar en éste con todos los permisos, pero es un repositorio completamente diferente que el original, teniendo alguna historia en común.
.
Los forks son importantes porque es la manera en la que funciona el open source, ya que, una persona puede no ser colaborador de un proyecto, pero puede contribuír al mismo, haciendo mejor software que pueda ser utilizado por cualquiera.
.
Al hacer un fork, GitHub sabe que se hizo el fork del proyecto, por lo que se le permite al colaborador hacer pull request desde su repositorio propio.
Trabajando con más de 1 repositorio remoto

Cuando trabajas en un proyecto que existe en diferentes repositorios remotos (normalmente a causa de un fork) es muy probable que desees poder trabajar con ambos repositorios, para ésto puedes crear un remoto adicional desde consola.
```
git remote add <nombre_del_remoto> <url_del_remoto> 

git remote upstream https://github.com/freddier/hyperblog
```
Al crear un remoto adicional podremos, hacer pull desde el nuevo origen (en caso de tener permisos podremos hacer fetch y push)

## .gitignore
El archivo `.gitignore` se utiliza para ignorar archivos dentro del repositorio (por ejemplo arhivos binarios como las imágenes, contraseñas, etc). Puede verse el siguiente enlace para la sintaxis más detallada sobre gitignore o ver proyecto open source como laravel, arduino, entro otros.

https://git-scm.com/docs/gitignore

## README.md
Es un archivo donde se coloca la descripción del proyecto. Utiliza la sintaxis del lenguaje markdown, el cual se puede aprender y practicar viendo otros repositorios. También se puede utilizar el siguiente editor online para hacerlo mucho más facil

https://pandao.github.io/editor.md/en.html

## GitHub Pages
Podemos publicar el contenido de nuestro repositorio con GitHub Pages. Para más información dirigirse a:

https://pages.github.com/

