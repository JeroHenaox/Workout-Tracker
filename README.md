# Workout Tracker API

API RESTful desarrollada con Node.js y Express para gestionar ejercicios de un sistema de entrenamiento.

## Tecnologías utilizadas

* Node.js
* Express
* Git y GitHub

## Recurso: Exercises

La API permite consultar, crear, actualizar y eliminar ejercicios.

## Endpoints

| Método | URL                                                   | Descripción                           | Estado          |
| ------ | ----------------------------------------------------- | ------------------------------------- | --------------- |
| GET    | `http://localhost:8000/api/v1/exercises`              | Listar todos los ejercicios           | 200             |
| GET    | `http://localhost:8000/api/v1/exercises/exercise-001` | Obtener un ejercicio por ID           | 200 / 404       |
| POST   | `http://localhost:8000/api/v1/exercises`              | Crear un ejercicio                    | 201 / 400       |
| PUT    | `http://localhost:8000/api/v1/exercises/exercise-001` | Actualizar completamente un ejercicio | 200 / 400 / 404 |
| PATCH  | `http://localhost:8000/api/v1/exercises/exercise-001` | Actualizar parcialmente un ejercicio  | 200 / 404       |
| DELETE | `http://localhost:8000/api/v1/exercises/exercise-001` | Eliminar un ejercicio                 | 204 / 404       |

## GET - Listar ejercicios

URL:

```text
http://localhost:8000/api/v1/exercises
```

Respuesta:

```json
[
  {
    "id": "exercise-001",
    "name": "Press de banca",
    "muscleGroup": "Pecho",
    "equipment": "Barra"
  },
  {
    "id": "exercise-002",
    "name": "Sentadilla",
    "muscleGroup": "Piernas",
    "equipment": "Barra"
  }
]
```

Estado:

```text
200 OK
```

## GET - Obtener ejercicio por ID

URL:

```text
http://localhost:8000/api/v1/exercises/exercise-001
```

Respuesta:

```json
{
  "id": "exercise-001",
  "name": "Press de banca",
  "muscleGroup": "Pecho",
  "equipment": "Barra"
}
```

Estado:

```text
200 OK
```

Si el ejercicio no existe:

```text
404 Not Found
```

## POST - Crear ejercicio

URL:

```text
http://localhost:8000/api/v1/exercises
```

Body:

```json
{
  "name": "Curl de bíceps",
  "muscleGroup": "Bíceps",
  "equipment": "Mancuernas"
}
```

La API genera automáticamente el ID del nuevo ejercicio.

Estado:

```text
201 Created
```

Si faltan datos requeridos:

```text
400 Bad Request
```

## PUT - Actualizar ejercicio

URL:

```text
http://localhost:8000/api/v1/exercises/exercise-001
```

Body:

```json
{
  "name": "Press inclinado",
  "muscleGroup": "Pecho",
  "equipment": "Mancuernas"
}
```

Estado:

```text
200 OK
```

## PATCH - Actualizar parcialmente

URL:

```text
http://localhost:8000/api/v1/exercises/exercise-001
```

Body:

```json
{
  "equipment": "Barra"
}
```

Estado:

```text
200 OK
```

PATCH permite modificar solamente los campos enviados.

## DELETE - Eliminar ejercicio

URL:

```text
http://localhost:8000/api/v1/exercises/exercise-001
```

Estado:

```text
204 No Content
```

Si el ejercicio no existe:

```text
404 Not Found
```

## Query Strings

La API permite utilizar query strings para filtrar y limitar los resultados.

### Filtrar por grupo muscular

```text
http://localhost:8000/api/v1/exercises?muscleGroup=Pecho
```

### Filtrar por equipo

```text
http://localhost:8000/api/v1/exercises?equipment=Barra
```

### Limitar resultados

```text
http://localhost:8000/api/v1/exercises?limit=1
```

### Combinar filtros

```text
http://localhost:8000/api/v1/exercises?muscleGroup=Pecho&limit=1
```

Si `limit` no es un número válido:

```text
http://localhost:8000/api/v1/exercises?limit=abc
```

Respuesta:

```json
{
  "error": "El parámetro limit debe ser un número mayor que 0"
}
```

Estado:

```text
400 Bad Request
```

## Códigos de estado utilizados

| Código | Significado                     |
| ------ | ------------------------------- |
| 200    | Operación exitosa               |
| 201    | Recurso creado                  |
| 204    | Recurso eliminado correctamente |
| 400    | Datos o parámetros incorrectos  |
| 404    | Recurso no encontrado           |

## Estructura del proyecto

```text
src/
├── controllers/
│   └── exercises.controller.js
└── routes/
    └── v1/
        └── exercises.routes.js
```

## Versionamiento

El recurso `exercises` fue desarrollado en la rama:

```text
feat/exercises
```

Los cambios fueron organizados mediante commits siguiendo la secuencia establecida en la actividad:

1. Scaffold de router y endpoints básicos.
2. Implementación de rutas GET.
3. Creación de recursos con POST.
4. Actualización con PUT y PATCH.
5. Eliminación con DELETE.
6. Validación de parámetros, query strings y estados HTTP.
7. Actualización del README con endpoints, ejemplos y estados.
