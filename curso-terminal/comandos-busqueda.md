# Comandos de búsqueda
Se utilizan para localizar archivos o directorios de forma recursiva a partir de una ubicación específica

## Búsqueda de rutas para binarios
Este comando solo funciona para aquellas aplicaciones que poseen binarios en nuestro PC. Se utiliza el comando `which`, opcionalmente puede usarse `whereis` el cual muestra mucha más información además de la ruta del binario:

https://www.geeksforgeeks.org/whereis-command-in-linux-with-examples/

```
which node
whereis node
whereis -m node
```

## Busqueda de archivos y directorios
Se utiliza el comando `find` el cual es muy versatil y posee varios parametros los cuales se pueden combinar:

```
find [ruta_inicial] [opciones]
```

- `-name`: Con este parametro le indicamos el nombre por el cual se desea buscar (puede hacerse uso de wildcards)
- `type`: Con este parametro se le indica qué tipo de archivos vamos a buscar: `f` para files, `d` para directories y `l` para links simbolicos
- `size`: Permite filtrar por tamaño con un número acompañado de `c` para byte, `k` para kilobyte, `M` para Megabyte y `G` para Gygabyte. Por defecto buscará con el tamaño exacto que se le indique. Para que la busqueda sea del tipo > se usa `+` y para que sea del tipo < se usa `-`
- `empty` no hay que indicarle nada más, busca todos los archivos vacíos
- `maxdepth` Se le debe indicar la profundidad máxima a la que se quiere profundizar la búsqueda en nuestro arbol de directorios (limita hasta el máximo dado)
- `mindepth` Se le debe indicar la profundidad mínima a la que se quiere profundizar la búsqueda en nuestro arbol de directorios(se salta hasta el mínimo dado)

<b>Nota:<b> para buscar en la carpeta home del usuario, puede utilizarse cualquiera de los siguientes simbolos: `~`, `./` (si nos encontramos en la home), `/home`

```
find ~ -maxdepth 3 -name a* -type f -size +1k
```


## Tabla de comandos de búsqueda
| Opción 	|Función|
|-----------|-------|
| -size 	|Busca por el peso|
| -mindepth |Asigna una profundidad mínima|
| -maxdepth |Asigna una profundidad máxima|
| -type 	|Busca por el tipo de archivo|
| -name 	|Busca por el nombre del archivo|
| -exec     |Ejecuta un comando luego de realizar la búsqueda|

