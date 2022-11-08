# Uso de GitHub
Cuando se trabaja con repositorios remotos debe de usarse el comando 
```
git remote add origin <link o ssh del repo>
```
Para ver los repos remotos hacia los que apuntamos podemos usar el comando `git remote` solo. Y con el comando `git remote -v` (v de verbal) nos muestra información más a detalle.

Para enviar los cambios al repositorio remoto se hace de la siguiente manera

```
git push origin <rama>

# Usualmente en los primeros push
git push origin main
```

Cuando se tienen archivos ya dentro del repositorio remoto lo ideal es hacer un pull desde el `origin` o repositorio remoto:
```
git pull origin main
```
En caso de ocurrir algun error o advertencia se usa el siguiente comando. Puede que sea necesario configurar ciertas cosas en git antes, lo cual se verá reflejado en un mensaje de advertencia
```
git pull origin main --allow-unrelated-histories
```
# Laves públicas y llaves privadas (SSH)
Las llaves públicas y privadas, conocidas también como cifrado asimétrico de un solo camino, sirven para mandar mensajes privados entre varios nodos con la lógica de que firmas tu mensaje con una llave pública vinculada con una llave privada que puede leer el mensaje.

Las llaves públicas y privadas nos ayudan a cifrar y descifrar nuestros archivos de forma que los podamos compartir sin correr el riesgo de que sean interceptados por personas con malas intenciones.
## Cómo funciona un mensaje cifrado con llaves públicas y privadas

1. Ambas personas deben crear su llave pública y privada.
2. Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay problema si la "interceptan").
3. La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos compartir el mensaje.
4. El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean interceptados.
5. La persona a la que enviamos el mensaje cifrado puede emplear su llave privada para descifrar el mensaje y ver los archivos.
`Nota: puedes compartir tu llave pública, pero nunca tu llave privada.`

Para configurar una ssh key en github se puede referir a 

https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Para cambiar el repositorio remoto al cual vamos a mandar cambios se usa el comando 
```
git remote set-url origin url-ssh-del-repositorio-en-github
```
# Tags y versiones en Git y Github
- Crear un nuevo tag y asignarlo a un commit: `git tag -a nombre-del-tag id-del-commit`.
- Borrar un tag en el repositorio local: `git tag -d nombre-del-tag`
- Listar los tags de nuestro repositorio local: `git tag o git show-ref --tags`
- Publicar un tag en el repositorio remoto: `git push origin --tags`
- Borrar un tag del repositorio remoto: `git tag -d nombre-del-tag` y `git push origin :refs/tags/nombre-del-tag`

## Alias en git
```
# Para un proyecto:

git config alias.arbolito "log --all --graph --decorate --oneline"

# Global:

git config --global alias.arbolito "log --all --graph --decorate --oneline"

# Para correrlo:

git arbolito

# alternativa más compleja
git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
```

# Colaboradores en github
Para agregar colaboradores solo hay que ir a `Repositorio > Settings > Collaborators` y ahí se pueden agregar os usernames o emails (públicos) de los colaboradores.

Si, como colaborador, agregaste erróneamente el mensaje del commit, lo puedes cambiar de la siguiente manera:

- Hacer un commit con el nuevo mensaje que queremos, esto nos abre el editor de texto de la terminal:
```
git commit —amend
```
- Corregimos el mensaje
- Traer el repositorio remoto
```
git pull origin main
```
- Ejecutar el cambio
```
git push --set-upstream origin main
```