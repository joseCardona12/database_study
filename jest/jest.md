## Jest
Jest es un framework de javascript testing enfocado en la simplicidad

## Pasos para el uso
1. Inicializa un nuevo proyecto de __Node.js__
   npm install -y

2. Instala __jest__ 
   npm install jest -D

3. Configura el script de prueba en el __package.json__
   "scripts": {
        "test": "jest"
   } 

## Test unitarios
1. __describe__: Utilizado para englobar nuestro código de test. Empezamos a describir nuestro test.

1. __test__: Comando para iniciar el test, recibe dos parametros. 
    - __Primer parámetro__: La información sobre el test, explicación (string)
    - __Segundo parámetro__: Callback

## Matchers 
Son funciones que se utilizan para comparar valores en las pruebas
1. __toBe()__: Que sea ago 
    ```test("Object is equal objec", ()=>{
        expect(data).not.toEqual(data1);
    })
1. __test()__: Palabra reservada para testear el código 
1. __expect()__: Esperar algo. Es la espectativa (casos)
    Yo espero que 1, 2 toBea (sea) 3
1. __it()__: Alias de __test()__

### String
1. __toContain__: Comprueba que un array o string contiene un valor especídifco
1. __toHaveLength__: Verifica la longitud de un array o string
1. __toMatch__: Verifica que un string coincide con una expresión regular 
1. __toThrow__: Verifica que una función lanza un error

### Thruthiness
1. __toBeNull__:
1. __toBeDefined__:
1. __toBeUndefined__:
1. __toBeTruthy__:
1. __toBeFalsy__:

### Numbers
1. __toBeGreaterThan__:
1. __toBeGreaterThanOrEqual()__:
1. __toBeLessThan()__:
1. __toBeLessThanOrEqual()__:
1. __toBe__:
1. __toBeCloseTo__:
1. __toEqual__:

