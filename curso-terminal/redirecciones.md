# Redirecciones: cómo funciona la shell
Para practicar redirecciones en linux
https://linuxjourney.com/lesson/stdout-standard-out-redirect

Para más info visitar
https://www.linuxtotal.com.mx/index.php?cont=redireccionamiento-en-linux

En la consola nosotros generamos una entrada cuando escribimos y una salida casi siempre que ejecutamos un comando.

A las entradas típicamente se les suele llamar Standard Input y a las salidas Standard Output, además se les suele abreviar como stdin y stdout respectivamente.

- El stdin generalemente proviene de lo que escribimos con el teclado, o tambien puede introducirse por medio de archivos

- De acuerdo a la entrada (`stdin`) pueden generarse dos producciones: `stdout` (la info que requerimos) o `stderr` (un error por no poder procesar correctamente el comando)

## File descriptors
Los file descriptors son números que identifican un recurso. En el caso de la shell (un tipo de terminal) tenemos 3 file descriptors:

0. stdin (Standart input)
1. stdout (Standart output)
2. stderr (Standart error)

## Operador de redirección (>)
El operador de redirección `>` sirve para enviar alguna de las dos salidas del stdin hacia algun lugar para almacenarla (archivos)

```
$ ls . > output.txt
```

Este operador por defecto reemplaza la información en el destino que se le solicita. Es decir que no concatena la información en caso de tener data previa al ejecutar el comando. Para que pueda aplicarse una concatenación debe de escrubirse dos veces el signo `>>`

```
$ ls . >> output.txt
```
Por defecto también redirige el `stdout`, para que pueda redigir también el `stderr` debemos anteponer al signo el número del file descriptor correspondiente:
```
$ ls errorsdfj 2> error.txt
```

Para poder redirigir ambas (tanto los errores si los hubiera o la información en caso de que el comando sea procesado de forma correcta), se debe de hacer una redirección (con o sin concatenación) y luego al final escribir ambos file descriptors más el signo `2>&1`.
```
ls errosadf >> output.txt 2>&1
```

## Pipe out operator (|)
Pipe operator es un operador que permite tomar la salida de un comando y pasarla como entrada de otro comando.

En ejemplos vistos en clase, el comando `tee` se usa para generar un archivo en base a una salida. Se utiliza justo en estos casos para sacarle provecho al pipe operator. El siguiente ejemplo muestra como concatenar dos archivos en uno solo con ayuda del comando `cat` (concatena dos entradas, muestra info de un archivo)
```
$ cat images.txt videos.txt | tee archivos.txt
```
Tambien si se sigue trabajando con archivos e información, puede resultar útil el comando `sort` con el cual se puede organizar la salida alfabéticamente 
```
$ ls | sort | tee archivosHome.txt
```