# Workout Tracker API

API RESTful desarrollada como actividad de formación en desarrollo de software utilizando Node.js, Express, Git y GitHub.

El proyecto permite gestionar usuarios, rutinas de entrenamiento, ejercicios y registros de progreso.

## Tecnologías utilizadas

* Node.js
* Express
* Git
* GitHub
* Thunder Client

## Instalación

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm start
```

El servidor se ejecuta en:

```text
http://localhost:8000
```

# Endpoints de la API

La API utiliza la versión:

```text
http://localhost:8000/api/v1
```

## Users

| Método | Endpoint                                 | Descripción                         |
| ------ | ---------------------------------------- | ----------------------------------- |
| GET    | `http://localhost:8000/api/v1/users`     | Obtener todos los usuarios          |
| GET    | `http://localhost:8000/api/v1/users/:id` | Obtener un usuario por ID           |
| POST   | `http://localhost:8000/api/v1/users`     | Crear un usuario                    |
| PUT    | `http://localhost:8000/api/v1/users/:id` | Actualizar completamente un usuario |
| PATCH  | `http://localhost:8000/api/v1/users/:id` | Actualizar parcialmente un usuario  |
| DELETE | `http://localhost:8000/api/v1/users/:id` | Eliminar un usuario                 |

### Ejemplo GET

Petición:

```text
http://localhost:8000/api/v1/users
```

Respuesta:

```json
[
  {
    "id": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    "name": "Carlos Navia",
    "email": "carlos@example.com",
    "role": "user",
    "createdAt": "2025-09-12T12:00:00Z"
  }
]
```

### Ejemplo GET por ID

Petición:

```text
http://localhost:8000/api/v1/users/b42f53fa-7b30-4b91-8d36-dc1c6ef27611
```

### Ejemplo POST

Petición:

```text
http://localhost:8000/api/v1/users
```

Body:

```json
{
  "name": "Juan Perez",
  "email": "juan@example.com",
  "role": "user"
}
```

### Query Strings

Filtrar por rol:

```text
http://localhost:8000/api/v1/users?role=user
```

Buscar por nombre o correo:

```text
http://localhost:8000/api/v1/users?search=Carlos
```

Combinar filtros:

```text
http://localhost:8000/api/v1/users?role=user&search=Carlos
```

---

# Workouts

Permite gestionar las rutinas de entrenamiento de los usuarios.

## Endpoints

| Método | Endpoint                                    | Descripción                         |
| ------ | ------------------------------------------- | ----------------------------------- |
| GET    | `http://localhost:8000/api/v1/workouts`     | Obtener todas las rutinas           |
| GET    | `http://localhost:8000/api/v1/workouts/:id` | Obtener una rutina por ID           |
| POST   | `http://localhost:8000/api/v1/workouts`     | Crear una rutina                    |
| PUT    | `http://localhost:8000/api/v1/workouts/:id` | Actualizar completamente una rutina |
| PATCH  | `http://localhost:8000/api/v1/workouts/:id` | Actualizar parcialmente una rutina  |
| DELETE | `http://localhost:8000/api/v1/workouts/:id` | Eliminar una rutina                 |

### Ejemplo GET

Petición:

```text
http://localhost:8000/api/v1/workouts
```

### Ejemplo GET por ID

Petición:

```text
http://localhost:8000/api/v1/workouts/workout-001
```

### Ejemplo POST

Petición:

```text
http://localhost:8000/api/v1/workouts
```

Body:

```json
{
  "userId": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
  "name": "Rutina de pecho",
  "description": "Entrenamiento para pecho"
}
```

### Query String

Filtrar por usuario:

```text
http://localhost:8000/api/v1/workouts?userId=b42f53fa-7b30-4b91-8d36-dc1c6ef27611
```

---

# Exercises

Permite gestionar los ejercicios disponibles para las rutinas.

## Endpoints

| Método | Endpoint                                     | Descripción                           |
| ------ | -------------------------------------------- | ------------------------------------- |
| GET    | `http://localhost:8000/api/v1/exercises`     | Obtener todos los ejercicios          |
| GET    | `http://localhost:8000/api/v1/exercises/:id` | Obtener un ejercicio por ID           |
| POST   | `http://localhost:8000/api/v1/exercises`     | Crear un ejercicio                    |
| PUT    | `http://localhost:8000/api/v1/exercises/:id` | Actualizar completamente un ejercicio |
| PATCH  | `http://localhost:8000/api/v1/exercises/:id` | Actualizar parcialmente un ejercicio  |
| DELETE | `http://localhost:8000/api/v1/exercises/:id` | Eliminar un ejercicio                 |

### Ejemplo GET

Petición:

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

### Ejemplo GET por ID

Petición:

```text
http://localhost:8000/api/v1/exercises/exercise-001
```

### Ejemplo POST

Petición:

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

### Query Strings

Filtrar por grupo muscular:

```text
http://localhost:8000/api/v1/exercises?muscleGroup=Pecho
```

Filtrar por equipo:

```text
http://localhost:8000/api/v1/exercises?equipment=Barra
```

Limitar resultados:

```text
http://localhost:8000/api/v1/exercises?limit=1
```

Combinar filtros:

```text
http://localhost:8000/api/v1/exercises?muscleGroup=Pecho&limit=1
```

---

# Progress

Permite registrar y consultar el progreso de los entrenamientos.

## Endpoints

| Método | Endpoint                                    | Descripción                             |
| ------ | ------------------------------------------- | --------------------------------------- |
| GET    | `http://localhost:8000/api/v1/progress`     | Obtener todos los registros de progreso |
| GET    | `http://localhost:8000/api/v1/progress/:id` | Obtener un registro por ID              |
| POST   | `http://localhost:8000/api/v1/progress`     | Crear un registro de progreso           |
| PUT    | `http://localhost:8000/api/v1/progress/:id` | Actualizar completamente un registro    |
| PATCH  | `http://localhost:8000/api/v1/progress/:id` | Actualizar parcialmente un registro     |
| DELETE | `http://localhost:8000/api/v1/progress/:id` | Eliminar un registro                    |

### Ejemplo GET

Petición:

```text
http://localhost:8000/api/v1/progress
```

Respuesta:

```json
[
  {
    "id": "progress-001",
    "userId": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    "workoutId": "workout-001",
    "date": "2025-09-12",
    "weight": 70,
    "repetitions": 10
  },
  {
    "id": "progress-002",
    "userId": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    "workoutId": "workout-002",
    "date": "2025-09-13",
    "weight": 75,
    "repetitions": 8
  }
]
```

### Ejemplo GET por ID

Petición:

```text
http://localhost:8000/api/v1/progress/progress-001
```

### Ejemplo POST

Petición:

```text
http://localhost:8000/api/v1/progress
```

Body:

```json
{
  "userId": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
  "workoutId": "workout-001",
  "date": "2025-09-15",
  "weight": 90,
  "repetitions": 5
}
```

### Ejemplo PUT

Petición:

```text
http://localhost:8000/api/v1/progress/progress-001
```

Body:

```json
{
  "userId": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
  "workoutId": "workout-001",
  "date": "2025-09-15",
  "weight": 90,
  "repetitions": 5
}
```

### Query Strings

Filtrar por usuario:

```text
http://localhost:8000/api/v1/progress?userId=b42f53fa-7b30-4b91-8d36-dc1c6ef27611
```

Filtrar por rutina:

```text
http://localhost:8000/api/v1/progress?workoutId=workout-001
```

---

# Parámetros de ruta

Los identificadores de los recursos se reciben mediante `req.params`.

Ejemplo:

```text
http://localhost:8000/api/v1/users/b42f53fa-7b30-4b91-8d36-dc1c6ef27611
```

El valor del ID se obtiene mediante:

```js
const { id } = req.params;
```

---

# Query Strings

Los parámetros enviados después del signo `?` se reciben mediante `req.query`.

Ejemplo:

```text
http://localhost:8000/api/v1/exercises?muscleGroup=Pecho
```

Estos parámetros se utilizan para realizar filtros o limitar los resultados.

---

# Body

Los datos enviados mediante POST, PUT y PATCH se reciben mediante `req.body`.

El proyecto utiliza:

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

Ejemplo:

```json
{
  "name": "Press de banca",
  "muscleGroup": "Pecho",
  "equipment": "Barra"
}
```

---

# Cabeceras HTTP

La API cuenta con un endpoint para trabajar con cabeceras HTTP.

Endpoint:

```text
http://localhost:8000/api/headers
```

Se pueden enviar las siguientes cabeceras:

```text
Content-Type
Authorization
X-API-Key
```

La API obtiene la API Key mediante:

```js
req.get("X-API-Key")
```

Si no se envía la API Key, la API responde:

```json
{
  "error": "API Key requerida en cabecera X-API-Key"
}
```

Estado:

```text
401 Unauthorized
```

La API también establece la cabecera:

```text
X-API-Version: 1.0
```

---

# Métodos HTTP utilizados

| Método | Uso                                 |
| ------ | ----------------------------------- |
| GET    | Consultar recursos                  |
| POST   | Crear recursos                      |
| PUT    | Actualizar completamente un recurso |
| PATCH  | Actualizar parcialmente un recurso  |
| DELETE | Eliminar recursos                   |

---

# Códigos de estado HTTP

| Código | Significado           | Uso                              |
| ------ | --------------------- | -------------------------------- |
| 200    | OK                    | Petición realizada correctamente |
| 201    | Created               | Recurso creado correctamente     |
| 204    | No Content            | Recurso eliminado correctamente  |
| 400    | Bad Request           | Datos o parámetros incorrectos   |
| 401    | Unauthorized          | API Key requerida                |
| 404    | Not Found             | Recurso no encontrado            |
| 500    | Internal Server Error | Error interno del servidor       |

---

# Estructura del proyecto

```text
workout-tracker/
│
├── src/
│   ├── config/
│   │   └── env.js
│   │
│   ├── controllers/
│   │   ├── users.controller.js
│   │   ├── workouts.controller.js
│   │   ├── exercises.controller.js
│   │   └── progress.controller.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   ├── progress.routes.js
│   │   └── v1/
│   │       ├── index.js
│   │       ├── users.routes.js
│   │       ├── workouts.routes.js
│   │       └── exercises.routes.js
│   │
│   └── app.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

# Versionamiento con Git

El proyecto utiliza Git y GitHub para controlar las versiones.

## Ramas principales

```text
main
develop
```

## Ramas de funcionalidades

```text
feat/users
feat/workouts
feat/exercises
feat/progress
```

Cada recurso fue desarrollado en su propia rama y posteriormente integrado en `develop`.

Finalmente, los cambios de `develop` fueron integrados en `main`.

---

# Pruebas

Las pruebas de los endpoints fueron realizadas utilizando Thunder Client.

Se comprobaron:

* GET para listar recursos.
* GET por ID.
* POST para crear recursos.
* PUT para actualizar recursos completos.
* PATCH para actualizar parcialmente.
* DELETE para eliminar recursos.
* Parámetros mediante `req.params`.
* Query strings mediante `req.query`.
* Datos mediante `req.body`.
* Cabeceras HTTP.
* API Key.
* Diferentes estados HTTP.

Los principales recursos utilizados durante las pruebas fueron:

```text
http://localhost:8000/api/v1/users
http://localhost:8000/api/v1/workouts
http://localhost:8000/api/v1/exercises
http://localhost:8000/api/v1/progress
```

---

# Autor

Jeronimo Henao Sanchez

Proyecto desarrollado como actividad de formación en desarrollo de software utilizando Node.js, Express y Git.
