# Simulador: Base de Datos Operativa

Prototipo educativo para estudiantes de Ingeniería de Sistemas.

## Tecnología usada

- HTML5
- CSS3
- JavaScript Vanilla
- No requiere framework
- No requiere servidor
- Funciona de manera local en el navegador

## Cómo ejecutar

1. Abre `index.html` en Chrome, Edge o Firefox.
2. No necesitas instalar dependencias.

## Contenido

El simulador incluye módulos sobre:

- Qué es SQL.
- Funcionamiento de una consulta SQL.
- Componentes clave de los sistemas SQL.
- DDL, DML, DQL, DCL y TCL.
- SELECT, INSERT, UPDATE y DELETE.
- CREATE TABLE, ALTER TABLE y DROP TABLE.
- JOIN.
- Normalización.
- Claves primarias y foráneas.
- Activación de claves foráneas en SQLite.
- Índices.
- Claves foráneas compuestas.
- Restricciones diferidas.
- ON DELETE y ON UPDATE.
- SQL vs. NoSQL.
- Concepto de inyección SQL.

## Nota técnica

El editor incluido es un simulador pedagógico de un subconjunto de SQL. No incorpora un motor SQLite real dentro del navegador. Su propósito es enseñar sintaxis, relaciones, integridad y consecuencias de las operaciones de manera controlada.

Una siguiente versión puede integrar SQLite real mediante WebAssembly (WASM), manteniendo la interfaz actual.