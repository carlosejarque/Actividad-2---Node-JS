# 📚 API REST de Gestión de Libros

Proyecto de API RESTful construida con **Node.js** y **Express** para la gestión de libros, autenticación JWT, validación de datos y logging de solicitudes. Incluye protección de rutas, gestión segura de variables de entorno y ejemplos claros de uso.

---

## 🚀 Características

- CRUD completo de libros
- Autenticación de usuarios con JWT
- Validación de datos con Joi
- Registro de solicitudes HTTP con Morgan
- Manejo de errores centralizado
- Configuración de variables de entorno con dotenv

---

## ⚙️ Instalación

1. **Clona el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DE_LA_CARPETA>
Instala las dependencias:

bash
Copiar
Editar
npm install
Crea el archivo .env en la raíz del proyecto:

env
Copiar
Editar
PORT=3000
JWT_SECRET=tu_secreto_super_seguro
▶️ Ejecución
Para iniciar el servidor, ejecuta:

bash
Copiar
Editar
npm start
o

bash
Copiar
Editar
node app.js
El servidor arrancará en el puerto definido en .env (por defecto 3000).

📂 Estructura del Proyecto
bash
Copiar
Editar
/controllers
/routes
/services
/data
/schemas.js
/middlewares.js
/app.js
/.env
/README.md
🔒 Configuración de variables de entorno
Crea un archivo .env en la raíz con este contenido:

ini
Copiar
Editar
PORT=3000
JWT_SECRET=tu_secreto_super_seguro
PORT: Puerto en el que se ejecuta el servidor.

JWT_SECRET: Secreto para firmar y verificar los tokens JWT.

🔑 Autenticación
Login
Endpoint: POST /login

Body:

json
Copiar
Editar
{
  "username": "admin",
  "password": "admin123"
}
Respuesta exitosa:

json
Copiar
Editar
{
  "token": "<jwt_token>"
}
Utiliza este token en el header Authorization como:

makefile
Copiar
Editar
Authorization: Bearer <jwt_token>
📚 Endpoints principales
Libros
Método	Endpoint	Protegido	Descripción
GET	/books	No	Lista todos los libros
GET	/books/:id	No	Obtiene un libro por su ID
POST	/books	Sí	Crea un nuevo libro
PUT	/books/:id	Sí	Actualiza un libro existente
DELETE	/books/:id	Sí	Elimina un libro

Ejemplo de body para POST y PUT
json
Copiar
Editar
{
  "title": "Ejemplo de libro",
  "author": "Autor",
  "description": "Descripción opcional",
  "publishDate": "2024-06-20"
}
🛡️ Protección de rutas
Las rutas de creación, actualización y eliminación de libros requieren un token JWT válido.

Incluye el token recibido tras hacer login en el header:

makefile
Copiar
Editar
Authorization: Bearer <jwt_token>
🧪 Validación de datos
El campo title debe tener al menos 3 caracteres.

El campo author es obligatorio.

El campo description es opcional.

El campo publishDate debe ser una fecha válida en formato YYYY-MM-DD.

Si los datos no cumplen las validaciones, la API responde con error 400 y detalle del problema.
