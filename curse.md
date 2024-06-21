# Base de datos
## Entidad: Características, ejemplos 
    Es una Representación abstracta de algo. Noción sobre algo del mundo real: Objeto, persona, animal.
### Características
    - Identificables
    - Existencia independiente : Fuerte y débil ---
    - Cardinalidad 
    - Atributos 
    - Tipos de entidades
    - Instancias
El modelo utilizado tiene como nombre __Notación de Chen__
#### Key: Atributo que se agrega para ser único e irrepetible 

- Se debe ser conciso y preciso 

#### Instalación del gestor - Gestor de base de datos
SQL lite - sqlitebrowser

Filas - 
Columnas |
Campos: |titulo de la columna| 
Valor del campo: | El contenido de esa columna|
Registros: Toda la información de una fila |

|       CAMPO          | 
|  Valor del campo     |
|  Valor del campo     | 
|  Valor del campo     |
|  Valor del campo     |

------ Filas || Columnas: El registro es todo el contenido de una fila

##### Comandos
- CREATE DATABASE database_name: Crear base de datos
- CREATE TABLE table_name: Crear entidades y/o tablas a la base de datos
- SELECT name FROM user
- SELECT * FROM table_name: select el contenido de las entidades, muestra una tabla depeniendiento de los atributos
- INSERT INTO users (name,lastname,email) VALUES ('jose', 'cardona', 'joseCardona@gmail.com'): Insertar valorres a las entidades
- SELECT price as priceFound FROM products
- SELECT * FROM Products ORDER BY price DESC. 

##### Cláusulas
- AS
- ORDER BY
- DESC - ASC
- NULL LAST - NULLS FIRST

###### Jerarquía: 
- Null 
- Números
- Caracteres especiales
- Letras
- NULLS LAST - NULLS FIRST: ORDER BY ProductName ASC NULLS LAST 
- Función RANDOM()
- DISTINCT

##### Identificadores
Atributo único de las entidades y/o tablas

##### Condiciones
- Where: Condición a registro





