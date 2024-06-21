## Curso de sql: Structured query language
![this is image about colors](https://www.pexels.com/photo/pink-and-yellow-wallpaper-1170576/);

Notación de CHEN
Data: Unidad singular de conocimiento. Por si solo no tiene un valor 
Información: Otorgar contexto a los datos
Mysql
1.	Descargar el entorno de ejecución y /o trabajo
Tipo de sentencias SQL	
Data Definition Language (DDL): CREATE, ALTER, DROP, TRUNCATE
Data Manipulation Language (DML): SELECT, INSERT, UPDATE, DELETE
Data Control Language (DCL): GRANT, ROVOKE
Transaction Control Language (TCL): COMMIT, ROLLBACK, SET TRANSACTION

Comando o sentencias
SHOW DATABASE 
CREATE DATABASE “NAME_OF_DATABASE”
DROP DATABASE “NAME_OF_DATABASE”

In SQL is neccesary finish with character “;”
We can add condition in SQL. 
Example:
DROP DATABASE IF EXISTS coders
For avoid error, use conditionals in the sentences 

-For create user we use the command 
CREATE USER ‘jose’ @ ‘localhost’ IDENTIFIED BY ‘cardona’;
We can separate domain or server whit the character @



## Primera presentación
1. Modelo entidad relación
   Elementos de ER: Entity, relationship, attribute 

# Importancia
1. Visión clara
2. Refleja con precisión los requerimientos
3. Punto de referencia
4. Identifica relaciones incorrectas 

## Segunda presentación 
1. ENTIDAD - Características, ejemplos 
    Representación abstracta de algo. Noción sobre algo del mundo real: Objeto, persona, animal.
    ### Características
    - Identificables
    - Existencia independiente : Fuerte y débil ---
    - Cardinalidad 
    - Atributos 
    - Tipos de entidades
    - Instancias

## Tercera presentación 
1. Qué son los atributos?
- Tipos de atributos: 
  - Simple
  - compuestos: Atributos que se pueden dividir en varios componentes
  - multivaluados: Exigen una tabla nueva: Dobe contorno en el circulo y/o óvalo 

2. Representación en el diagrama ER

## Cuarta presentación 
1. Cardinalidad y Ordinalidad de las relaciones
 - Cantidad de instancias que pueden estar asociadas entre dos entidades
 - Conceptos de cardinalidad: 
    - Uno a uno
    - Uno a muchos 
    - Muchos a muchos 
2. Ordinalidad: Participación mínima, restricciones mínimas y máximas en las relaciones entre entidades: 
- Obligatotio y opcional 
- Mínimo absouto y máximo absoluto: Determinar el máximo de las instancias 
 ### Nota: Una instancia debe tener una relación almenos con otra instancia - Ordinalidad

## Quinta presentación
- Integridad y calidad de los datos
- Restricciones de dominio 
- Restricciones de entidad - Cardinalidad / Participación: 
- Restricciones referencial - Llaves foráneas
   - Inserción 
   - Actualización 
   - Eliminación: 
    - On delete cascade
    - On delete set null
    - On delete restrict
- Restricciones de usuario 

- Impacto en el diseño del diagrama ER: Tener en cuenta las restricciones al empezar a crear 

## Sexta presentación 
Claves database
1. Claves candidatas, superclaves y claves compuestas 
2. Claves priamrias y foráneas 

## Séptima presentación 
1. Bases de datos relacionales
- Tipos de relaciones
 - Many to many: Normalización 
 - One to many
 - One to One
 ### Nota: En el modelado no es necesario crear la tabla pivote. Sin embargo, se debe agregar en la base de datos

## Octava presentación
1. Los EERD
 - Atributos 
 - Entidades
 - Jerarquía
 - Generalización y especialización 
 - Entidades regualares
 Entidad regular - Entidad débil 

## Novena presentación 
1. Matriz relacional 
  - Características
   - Atomicidad: Los datos deben ser lo más indivisibles y no pueden ser descompuestos en unidades más pequeñas
   - Constistencia
   - Normalización 
   - Claves primarias
   - Claves foráneas

2. Operaciones básdicas en matrices relacionales
 - Selección 
 - Proyección
 - Unión
 - Intersección 
 - Diferencia

3. Matrices relaciones extendidas (MRE) // Superclases - subclases
 - Características 
    - Jerarquía
    - Herencia
    - Especialización
    - Generalización 



