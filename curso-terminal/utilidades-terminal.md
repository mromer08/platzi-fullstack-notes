# Utilidades de red
|Comando 	|Función|
|-----------|-------|
|`ifconfig` 	|Muestra la configuración de los dispositivos de red (de forma extendida)|
|`netstat -i`   |Muestra la configuración de los dispositivos de red (de forma resumida)|
|`ping` 	    |Envía paquetes a una dirección para comprobar su conectividad|
|`curl` 	    |Muestra por consola el archivo devuelto por la dirección|
|`wget` 	    |Guarda el archivo devuelto por la dirección|

```
ping www.google.com

# Limitando los paquetes enviados con -c
ping -c 4 www.google.com

# Especificando tamaño de los paquetes en bytes(-s)
ping -s 20 www.google.com

curl www.google.com
curl www.google.com > index.html

wget www.google.com
wget www.google.com www.platzi.com
```
# Comprimiendo archivos tar y zip
## Comprimiendo archivos con formato .tar
Se utiliza la siguiente sintaxis:
```
tar [opciones] [nombre-comprimido] [directorio_a_comprimir]
```
Las opciones del comando tar son:
- `-c` Indica que se va a comprimir algo, y siempre va acompañada de la opcion `-f` la cual indica que se están comprimiendo archivos
- `-v` Es para ver un log de lo que está comprimiendo el comando.
- `-z` Se utiliza para comprimir archivos en formato `.tar.gz` (recomendado)
```
tar -cvf compressed.tar.gz Documents/toCompress/
tar -czvf compressed.tar.gz Documents/toCompress/
```
- `-x` Se utiliza para descomprimir sustituyendo la opcion `-c` Si se usó la extensión `.tar.gz` se debe usar la opción `-z` también.
```
tar -xvf compressed.tar.gz Documents/toCompress/
tar -xzvf compressed.tar.gz Documents/toCompress/
```
## Comprimiendo archivos .zip
Comprime y descomprime archivos con el comando `zip`, se utiliza la opción `-r` de recursive para comprimir carpetas con contenido.
```
zip -r comprimida.zip ./Comprimir
```
Para descomprimir archivos basta con usar `unzip`
```
unzip comprimida.zip
```

## Manejo de procesos (Administrador de tareas en linux)
|Comando 	|Función|
|-----------|-------|
|ps 	    |Muestra una tabla con los procesos que se están ejecutando|
|top 	    |Muestra una interfaz con los procesos que se están ejecutando más los recursos que consumen información adicional|
|kill 	    |Mata el proceso que le indiques mediante el PID|

Con `ps` podemos ver de forma resumida los procesos que se están ejecutando en la terminal actual. `top` hace lo mismo pero con mucha más información y de manera general en el pc. En ambos existe una columna llamada "PID" el cual se le pasa como parametro a `kill` para eliminar ese proceso.

Adicionalmente existe `htop`, el cual es una evolución de `top` siendo mucho más completo que éste y permitiendo filtrar, eliminar, etc... procesos sin salir del comando.
### Procesos en foreground y background
Cuando se muestra el proceso de un comando que ejecutamos se dice que está en foreground, de lo contrario, si no se muestra decimos que está en background.
Para matar un proceso en ejecución en la terminal se utiliza `CTRL-C`, y para suspenderla se utiliza `CTRL-Z`. Con esto será enviada al background. Para ver todos los procesos que están en el background se usa el comando `jobs`, mostrará una tabla y en la izquieda tendrá el número de trabajo (no es lo mismo que el PID). Si se quiere regresar un comando a ejecución en la terminal (el foreground) se usa el comando `fg [numero_trabajo]`, en `zsh` se debe anteponer el signo `%`

```
$ jobs
[1]+  Detenido                cat > nota.txt

$ fg 1
```
#### Formas de mandar al background
Puede hacerse explicitamente con el comando `bg [numero_trabajo]`, otra manera es colocando el signo `&` al final de cualquier comando
```
$ bg 1

cat > nota.txt &
```
## Editores de texto en la terminal
Existen varios editores de texto para la terminal como nano, emacs, nand, o vim.

En vim existen dos versiones o editores diferentes: vi que es un editor viejo y vim que es la versión modificada/moderna de vi.

vim tiene un coloreado para la sintaxis de cualquier lenguaje y es realmente útil para editar archivos de manera rapida
### Tabla de comandos para uso de Vim
|Comando 	|Función|
|-----------|-------|
|vim 	    |Abre el archivo especificado. Si no existe lo crea|
|:q 	    |Cierra el editor|
|:w 	    |Guarda los cambios|
|/búsqueda] |Busca dentro del texto|
|dd 	    |En el modo normal, selecciona una línea y la borra|
|:wq 	    |Guarda cambios y cierra el editor|
|:wq! 	    |Guarda si puede los cambios y cierra de manera forzada el editor|