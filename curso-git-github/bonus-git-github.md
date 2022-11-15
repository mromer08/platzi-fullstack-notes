# Comandos y recursos colaborativos en Git y Github
A continuación veremos una lista de comandos colaborativos para facilitar el trabajo remoto en GitHub:

- `git shortlog -sn`: muestra cuantos commit han hecho cada miembro del equipo.
- `git shortlog -sn --all`: muestra cuantos commit han hecho cada miembro del equipo, hasta los que han sido eliminados.
- `git shortlog -sn --all --no-merge`: muestra cuantos commit ha hecho cada miembro, quitando los eliminados sin los merges.
- `git blame <Archivo>`: muestra quien hizo cada cosa línea por línea en un archivo.
- `git <comando> --help`:muestra como funciona el comando. Se debe tener instalado `man` en la distro linux
- `git blame <archivo> -L<No_Inicio>,<No_Final>`: muestra quien hizo cada cosa línea por línea, indicándole desde qué línea ver. Ejemplo -L35,50.
- `git branch -r`: se muestran todas las ramas remotas.
- `git branch -a`: se muestran todas las ramas, tanto locales como remotas.

## Configurando alias en gitub de manera global

Para configurar alias en github de manera global se hace de la siguiente manera

```bash
git config --global alias.<nombre_alias> "<comando_entero>"

# Por ejemplo
git config --global alias.stats "shortlog -sn --all --no-merges"

# Tambien puede crearse un alias para el comando del arbolito
```

## Github insights
Dentro de un repositorio en la pestaña de `insights` pueden verse varias graficas con información del repo como:
- Pulse: Información sobre los pull request, issues y colaboradores
- Contributors: Muestra información sobre los contribuidores en un repositorio.
- Community: Muestra lo necesario que debería tener un proyecto de cara a la comunidad. (Buenas practicas)
- Traffic: Trafico del proyecto (no es publico)
- Commits: Info sobre commits
- Code frequency: Cuánto código se agrega y se elimina por semana.
- Dependency graphs: Muestra información sobre las librerías que se utilizan en el proyecto
- Alerts: No es público y muestra posibles vulnerabilidades del proyectos detectadas por github.
- Network: Muestra el flujo de trabajo en el proyecto (similar al `gitk`)
- Fork: Muestra las personas que han hecho un fork del proyecto