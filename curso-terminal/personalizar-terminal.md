# Personalizando terminal
Podemos personalizar la terminal para que quedé bonita, profesional y sea muy cómoda.
Cómo personalizar la terminal de comandos

Para esto, podemos usar un emulador llamado Tilix. En Tilix podemos tener varias terminales activas.
1. Instala Tilix

Tilix es un emulador de terminal. Para instalarlo:
```
$ sudo pacman -S tilix
```
2. Instala ZSH

Vamos a usar la Shell ZSH. Para cambiarla:
```
$ sudo pacman -S zsh
```
Comando para dejar por DEFECTO la shell de bash o zsh con change shell (`chsh`):

```
$ chsh -s $(which bash)

$ chsh -s $(which zsh)
```
(después de cambiar a zsh apretar la opción 0, para crear un archivo .zshrc en blanco)

Para cambiar entre bash y zsh en el momento:
```
$ exec bash

$ exec zsh
```
3. Personaliza funcionalidades y colores

Ahora, puedes ponerle funcionalidades y colores con `OH-MY-ZSH`
```
$ sh-c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
4. Usa Power Level

Vamos a instalarle un tema (`powerLevel10K`):
```
$ git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
después vamos a entrar al archivo .zshrc:
```
$ vim ~/.zshrc
```
buscamos y cambiamos la parte que dice `ZSH_THEME` por esto:
```
$ ZSH_THEME="powerlevel10k/powerlevel10k"
```
Guardamos y salimos.

Después instalamos estas 4 fuentes de texto 1 2 3 4

Cuando salgamos y volvamos a entrar a la terminal nos va a salir el wizard de powerlevel10k para configurar la terminal como quieras, simplemente sigue los pasos.

Para volver a configurar el tema Powerlevel10k desde el principio en caso de que quieras cambiar algo:
```
$ p10k configure
```