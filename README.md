# My Express App

Este es un backend creado con Express.js y PostgreSQL para la gestión de libros y préstamos.

## Contenido

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Rutas Disponibles](#rutas-disponibles)
- [Variables de Entorno](#variables-de-entorno)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/my-express-app.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd my-express-app
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
    ```env

    DB_NAME=nombre_de_tu_base_de_datos
    PORT=4000
    SECRET_KEY=tu_secreto_jwt
    ```

2. Configura tu base de datos PostgreSQL y crea las tablas necesarias. Puedes usar Sequelize para sincronizar las tablas ejecutando:
    ```bash
    npm run seed
    ```

## Ejecución

Para iniciar el servidor, ejecuta:
```bash
npm start




Rutas Disponibles
Autenticación
POST /api/auth/register: Registra un nuevo usuario.
POST /api/auth/login: Inicia sesión en la aplicación.
POST /api/auth/verify-token: Verifica la validez de un token JWT.
Usuarios
GET /api/users: Obtiene todos los usuarios.
POST /api/users: Crea un nuevo usuario.
GET /api/users/:id: Obtiene un usuario por su ID.
PUT /api/users/:id: Actualiza un usuario por su ID.
DELETE /api/users/:id: Elimina un usuario por su ID.
GET /api/users-with-loans: Obtiene todos los usuarios junto con sus préstamos.
GET /api/users/paginate: Obtiene usuarios con paginación.
GET /api/users/:id/loans: Obtiene los préstamos de un usuario específico.
GET /api/search-users: Busca usuarios.
Libros
GET /api/books: Obtiene todos los libros.
POST /api/books: Crea un nuevo libro.
Préstamos
GET /api/loans: Obtiene todos los préstamos.
POST /api/loans: Crea un nuevo préstamo.
DELETE /api/loans: Elimina un préstamo.
Variables de Entorno
Asegúrate de configurar las siguientes variables de entorno en tu archivo .env:

DB_HOST: Host de la base de datos.
DB_USER: Usuario de la base de datos.
DB_PASS: Contraseña de la base de datos.
DB_NAME: Nombre de la base de datos.
PORT: Puerto en el que correrá el servidor.
SECRET_KEY: Secreto para la firma de tokens JWT.
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript.
Express.js: Framework para aplicaciones web.
PostgreSQL: Sistema de gestión de bases de datos relacional.
Sequelize: ORM para Node.js.
jsonwebtoken: Implementación de JWT para la autenticación.
Contribución
Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Haz commit de tus cambios (git commit -am 'Añadir nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.