# **Tipos y Estructuras de datos**

Todos los lenguajes de programacion tienen tipos de datos integrados, aunque suelen tener
ciertas variantes.

Estos, pueden ser utilizados para poder construir otras estructuras.

## **Tipos de datos**

ECMAScript define nueve tipos de datos, controlados por el operador _typeof_.

### **datos primitivos**

Un valor primitivo, es un tipo de dato que no es un objeto, y no tiene metodo.

## **Datos**

## Primitivos

- _Undefined_:  
  Una variable a la que no se le asigna valor recibe _undefined_.
- _Boolean_:  
  Es una entidad logica y se representa en dos valores: _true_ y _false_. (verdadero o falso)
- _Number_:  
   Representa numeros y numeros de punto flotante, ademas tiene 3 valores simbolicos:
  _+Infinity_, _-Infinity_ y _NaN_ ("not a number")
- _String_:  
  Se usa para representar datos textuales.
- _BigInt_:  
  Puede representar numeros enteros con presicion arbitraria.
  Se puede operar mas alla del limite que tiene Number (mas adelante se explicara.)
- _Symbol_:  
  Se puede utilizar para añadir claves de propiedades unicas a un objeto, que no sean iguales
  a cualquiera que se les pueda añadir al objeto con otro codigo. (se explicara mas adelante)

### **_El tipo 'null'_**

Null es un tipo de datos primitivo, pero que tiene un uso adicional:
si el objeto no se hereda se muestra null.

## No Primitivos

- _Object_:  
  Un objeto es un valor en la memoria al que posiblemente hace referencia un indicador.

- _Function_:  
  Las funciones son los bloques de codigo fundamentales de JavaScript.
  Reprecenta un conjunto de instrucciones que realiza una tarea, o calcula un valor,
  puede recibir una entrada de datos y SIEMPRE retorna un valor de salida.

Las funciones deben ser _declaradas_ o _expresiones_

#

### un ejemplo de expresion de funcion podria ser el siguiente:

var summar = function (a, b) {  
return a +b  
}

#

### ejemplo de declaracion de funcion:

function sumar(a,b) {  
 return a+b  
}

#

## Ejercicio 1

Ahora ve a la carpeta src y dentro de ella busca _ejercicios_
alli tendras el ejercicio numero 1, que sirve para aplicar lo aprendido en la
explicacion de tipos de datos

#

## **tip**: recuerda que puedes ejecutar una evaluacion de tu codigo ejecutando el siguiente comando en la consola:

### `npm run ejercicio1`
