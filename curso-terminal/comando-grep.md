# Usando el comando grep
"Grep" significa Global Regular Expression Print. Se utiliza para buscar texto dentro de un archivo a través de regex con la siguiente sintaxis:
```
grep [ExpresiónRegular] [archivoDondeBuscar]
```
## Parametros del comando grep
- `-i`: ignore case sensitive, no toma en cuenta si es mayuscula o minúscula
- `-c`: ocurrecias, tiene como stdout la cantidad de veces que se repiten las coincidencias de la regex en el archivo
- `-v`: se utiliza para excluir una regex y muestra las que NO coinciden con dicha regex.
- `m`: limita el número de lineas que queremos ver de las coincidencias

```
# busca las palabras 'the' dentro del archivo movies.csv
grep the movies.csv

# Busca las palabras 'Action' sin importar si es mayuscula o minuscula
grep -i Action movies.csv

# Cuenta cuantas veces aparece la palabara 'Drama'
grep -c Drama movies.csv
# Cuenta cuantas veces aparece la palabara 'Drama' sin importar las mayusculas o minusculas
grep -ci Drama movies.csv

# Cuenta la cantidad de veces que NO aparece la palabra 'Drama'
grep -cv Drama movies.csv

# Muestra las primeras 10 coincidencias de la palabra 'Fan'
grep -m 10 Fan movies.csv
```

## Tabla de funciones grep
|Opción 	|Función|
|-----------|--------------------------------|
| -m 	    |Limita las líneas de la búsqueda|
| -c 	    |Cuenta las ocurrencias|
| -v 	    |Excluye las ocurrencias|
| -i 	    |Ignora él case sensitive|