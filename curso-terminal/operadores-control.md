# Operadores de control
Los operadores de control son símbolos reservados por la terminal que nos permiten encadenar comandos.
## Comandos en la misma linea síncronos (;)
Permite ejecutar comandos de manera síncrona (uno detrás de otro)
```
$ mkdir dir1; ls; date;
```
El comando `date` es una utilidad de la terminal que muestra la fecha.

## Comandos asíncronos (&)
Permite ejecutar varios comandos en distintos hilos del procesador al mismo tiempo
```
$ date & echo "Hola" & cal
```
el comando `cal` imprime un calendario en consola

## Comandos con condicionales
Se pueden ejecutar comandos dependiendo de la ejecución de otros comandos. Los distintos operadores que se muestran se pueden combinar para lograr algo mucho más complejo
### Operador AND (&&)
El símbolo `&&` indica que para que se ejecute el siguiente comando, el anterior tuvo que ejecutarse de manera correcta. De lo contrario terminará justo en el error y no continuará.

```
$ mkdir test && cd test
```
### Operador OR (||)
Este condicional no le importa que todos los comandos se ejecuten de manera correcta, simplemente con que uno lo haga le basta. Por lo que es posible obtener errores al momento de trabajar con este condicional. En el siguiente ejemplo uno de los dos comandos no existe

```
$ cd projects/ || cambia-carpeta projects/
```


