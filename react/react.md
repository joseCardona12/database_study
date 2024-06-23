# Curso de React

## ¿Qué es?
Es una biblioteca de javascript de código abierto

## Funciones
1. Componentes reutilizables 
1. Crear aplicaciones dinámicas
1. Buen desempeño

React se centra en crear componentes que actúan como bloques.
__Componente:__ Es una parte de la interfaz de usuario que es independiente y reutilizable.

## Se divide
1. __Componentes funcionales:__ Función de javascritp que retorna un elemento de react **(JSX)**
  - El nombre empieza con mayúsculas
  - Puede recibir valores
2. __Componentes de clase:__ Clases de ES6 **(Javascript moderno)** que retorna un componente de react. 
 - Debe extender de React.component
 - Debe tener un método **render()** para retornar un elemento de **(JSX)**
 - Puede recibir valores

## Props
Propiedades - argumentos que puede recibir un componente de react.
Los props pueden ser enviados de un componente **padre** a un componente **Hijo**, es lineal. No se puede enviar props de un componente **hijo** a un componente **padre**.

## State
Representación de javascript del conjunto de propiedades de un componente y sus valores actuales.

__NOTA:__ Anteriormente en versiones 16.8 hacia abajo, se usaba componentes de clase para trabajar con los **estados** de los componentes, debido a que las funciones funcionales no lo permitían.

## Hooks
Es una función especial que te permite trabajar con estados en componentes funcionales y otros aspectos de react.
Con **hooks** podemos agregar ciertos estados a los componentes funcionales. Asignar y actualizar.

## Event Listener 
Es una función que es ejecutada cuando ocurre un evento en específico.

## Comando inicial para react
npx create-react-app name_app.
Para iniciar en la misma carpeta y no crear una nueva, se utiliza . reemplazando el nombre del directorio

## .json
Es un formato ligero de intercambio de datos
Javascript Object Notation

## .md
Markdown

## Imágenes
Para utilizar imágenes en react es necesario utilziar el __require__
__Ejemplo__ 
src={require('../images/testimonio-emma.png')} 
Asimismo, usar las imágenes por medio de __import__

## Importación
En react para usar los componentes funcionales es necesario exportar e importar.
__Ejemplo__
import React from "react";
Al importar podemos usar la función 

## Exportaciones
Existen 2 tipos de exportaciones
1. __Nombrada__: Este tipo se encarga de exportar nuestros componentes de un archivo jsx. Se utiliza cuando hay más de un componente en un archivo. Es necesario deestructurar al importar
2. __Por defecto__: Este tipo se encarga de exportar el componente de un archivo jsx por defecto. Es el único componente que puede encontrar en el archivo. No se deestructurar al importar

## Iniciando con react

### Primer paso
Iniciar nuestro aplicativo con el comando 
__npm init -y__
Este comando va a crear el archivo package.json

![alt text](image-1.png)

Las dependencias necesarias son: 
react,
react-dom y react-scripts

### Segundo paso
Descargar las dependencias.

Para descargar las dependencias utilizamos 
el comando npm install nombre_dependencia

Ejemplo
__npm install react__
En este ejemplo __install__ se puede reducir a una sola letra __i__, con esta aclaración el otro comando que se puede utilizar es: __npm install i react__


