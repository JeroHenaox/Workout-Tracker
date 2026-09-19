# Workout Tracker API

API RESTful desarrollada como actividad de formación en desarrollo de software utilizando Node.js, Express, Git y GitHub.

El proyecto permite gestionar usuarios, rutinas de entrenamiento, ejercicios y el progreso de los usuarios.

## Tecnologías utilizadas

- Node.js
- Express
- Git
- GitHub
- Thunder Client

## Instalación

Clonar el repositorio y entrar a la carpeta del proyecto.

Instalar las dependencias:

npm install

Iniciar el servidor:

npm start

El servidor se ejecuta en:

http://localhost:8000

## Recursos de la API

### Usuarios

GET /api/v1/users

Obtiene todos los usuarios.

GET /api/v1/users/:id

Obtiene un usuario específico utilizando su ID.

POST /api/v1/users

Crea un nuevo usuario.

PUT /api/v1/users/:id

Actualiza completamente un usuario.

PATCH /api/v1/users/:id

Actualiza parcialmente un usuario.

DELETE /api/v1/users/:id

Elimina un usuario.

También se pueden realizar búsquedas mediante parámetros de consulta.

Ejemplo:

GET /api/v1/users?role=admin

GET /api/v1/users?search=Juan


### Workouts

GET /api/v1/workouts

Obtiene todas las rutinas de entrenamiento.

GET /api/v1/workouts/:id

Obtiene una rutina específica.

POST /api/v1/workouts

Crea una nueva rutina.

PUT /api/v1/workouts/:id

Actualiza completamente una rutina.

PATCH /api/v1/workouts/:id

Actualiza parcialmente una rutina.

DELETE /api/v1/workouts/:id

Elimina una rutina.

También se pueden utilizar parámetros de consulta para realizar búsquedas.


### Exercises

GET /api/v1/exercises

Obtiene todos los ejercicios.

GET /api/v1/exercises/:id

Obtiene un ejercicio específico.

POST /api/v1/exercises

Crea un nuevo ejercicio.

PUT /api/v1/exercises/:id

Actualiza completamente un ejercicio.

PATCH /api/v1/exercises/:id

Actualiza parcialmente un ejercicio.

DELETE /api/v1/exercises/:id

Elimina un ejercicio.

Se pueden utilizar parámetros de consulta para filtrar ejercicios.

Ejemplos:

GET /api/v1/exercises?muscleGroup=chest

GET /api/v1/exercises?equipment=dumbbell

GET /api/v1/exercises?limit=5


### Progress

GET /api/v1/progress

Obtiene los registros de progreso.

GET /api/v1/progress/:id

Obtiene un registro de progreso específico.

POST /api/v1/progress

Crea un nuevo registro de progreso.

PUT /api/v1/progress/:id

Actualiza completamente un registro de progreso.

PATCH /api/v1/progress/:id

Actualiza parcialmente un registro de progreso.

DELETE /api/v1/progress/:id

Elimina un registro de progreso.

También se pueden utilizar parámetros de consulta.

Ejemplos:

GET /api/v1/progress?userId=1

GET /api/v1/progress?workoutId=1


## Parámetros de la petición

### req.params

Se utilizan para recibir valores directamente desde la URL.

Ejemplo:

GET /api/v1/users/1

En este caso, el ID del usuario se recibe mediante req.params.


### req.query

Se utilizan para recibir parámetros de consulta.

Ejemplo:

GET /api/v1/users?role=admin

Los valores se reciben mediante req.query.


### req.body

Se utiliza para recibir información enviada en el cuerpo de una petición POST, PUT o PATCH.

Ejemplo:

{
  "name": "Juan",
  "email": "juan@email.com"
}


## Cabeceras HTTP

El proyecto incluye un endpoint para trabajar con cabeceras HTTP:

GET /api/headers

Este endpoint recibe las siguientes cabeceras:

Content-Type

Authorization

X-API-Key

La cabecera X-API-Key es obligatoria.

Ejemplo:

X-API-Key: 123456

Si no se envía la API Key, el servidor responde con:

401 Unauthorized

También se utiliza la cabecera de respuesta:

X-API-Version: 1.0


## Métodos HTTP utilizados

GET: consultar información.

POST: crear nuevos recursos.

PUT: actualizar completamente un recurso.

PATCH: actualizar parcialmente un recurso.

DELETE: eliminar un recurso.


## Códigos de estado HTTP

200 OK: petición realizada correctamente.

201 Created: recurso creado correctamente.

204 No Content: operación realizada correctamente sin contenido en la respuesta.

400 Bad Request: la información enviada no es válida.

401 Unauthorized: falta la autorización o API Key requerida.

404 Not Found: recurso no encontrado.


## Estructura del proyecto

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
│   │   ├── v1/
│   │   │   ├── index.js
│   │   │   ├── users.routes.js
│   │   │   ├── workouts.routes.js
│   │   │   └── exercises.routes.js
│   │   ├── index.js
│   │   └── progress.routes.js
│   │
│   └── app.js
│
├── package.json
├── package-lock.json
└── README.md


## Git y ramas

El proyecto utiliza Git para controlar las versiones del código.

Ramas utilizadas:

main: rama principal del proyecto.

develop: rama utilizada para integrar los diferentes desarrollos.

feat/users: desarrollo relacionado con usuarios.

feat/workouts: desarrollo relacionado con rutinas.

feat/exercises: desarrollo relacionado con ejercicios.

feat/progress: desarrollo relacionado con el progreso.


## Pruebas

Las peticiones de la API fueron realizadas utilizando Thunder Client.

Se probaron los principales endpoints mediante los métodos:

GET

POST

PUT

PATCH

DELETE

También se realizaron pruebas utilizando parámetros de consulta, parámetros de URL, cuerpo de las peticiones y cabeceras HTTP.


## Autor

Jeronimo Henao Sanchez

Proyecto desarrollado como actividad de formación en desarrollo de software.