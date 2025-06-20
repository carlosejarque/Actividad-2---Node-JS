
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
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Crea el archivo `.env` en la raíz del proyecto:**

   ```
   PORT=3000
   JWT_SECRET=tu_secreto_super_seguro
   ```

---

## ▶️ Ejecución

Para iniciar el servidor, ejecuta:

```bash
npm start
```
o
```bash
node app.js
```

El servidor arrancará en el puerto definido en `.env` (por defecto 3000).

---

## 📂 Estructura del Proyecto

```
/controllers
/routes
/services
/data
/schemas.js
/middlewares.js
/app.js
/.env
/README.md
```

---

## 🔒 Configuración de variables de entorno

Crea un archivo `.env` en la raíz con este contenido:

```
PORT=3000
JWT_SECRET=tu_secreto_super_seguro
```

- **PORT:** Puerto en el que se ejecuta el servidor.
- **JWT_SECRET:** Secreto para firmar y verificar los tokens JWT.

---

## 🔑 Autenticación

### **Login**

- **Endpoint:** `POST /login`
- **Body:**
  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```
- **Respuesta exitosa:**
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

Utiliza este token en el header `Authorization` como:

```
Authorization: Bearer <jwt_token>
```

---

## 📚 Endpoints principales

| Método | Endpoint         | Protegido | Descripción                              |
|--------|------------------|-----------|------------------------------------------|
| GET    | /books           | No        | Lista todos los libros                   |
| GET    | /books/:id       | No        | Obtiene un libro por su ID               |
| POST   | /books           | Sí        | Crea un nuevo libro                      |
| PUT    | /books/:id       | Sí        | Actualiza un libro existente             |
| DELETE | /books/:id       | Sí        | Elimina un libro                         |

### **Ejemplo de body para POST y PUT**

```json
{
  "title": "Ejemplo de libro",
  "author": "Autor",
  "description": "Descripción opcional",
  "publishDate": "2024-06-20"
}
```

---

## 🛡️ Protección de rutas

- Las rutas de creación, actualización y eliminación de libros requieren un **token JWT** válido.
- Incluye el token recibido tras hacer login en el header:

```
Authorization: Bearer <jwt_token>
```

---

## 🧪 Validación de datos

- El campo `title` debe tener al menos 3 caracteres.
- El campo `author` es obligatorio.
- El campo `description` es opcional.
- El campo `publishDate` debe ser una fecha válida en formato `YYYY-MM-DD`.

Si los datos no cumplen las validaciones, la API responde con error 400 y detalle del problema.

---

## 📝 Notas

- **No subas el archivo `.env`** a ningún repositorio público.
- Puedes modificar y ampliar los endpoints o la estructura según tus necesidades.
- La base de datos es un archivo JSON para facilitar la persistencia en proyectos pequeños.

---

## 💡 Ejemplo rápido de uso con `curl`

### 1. Login

```bash
curl -X POST http://localhost:3000/login   -H "Content-Type: application/json"   -d '{"username":"admin","password":"admin123"}'
```

### 2. Crear un libro

```bash
curl -X POST http://localhost:3000/books   -H "Content-Type: application/json"   -H "Authorization: Bearer <jwt_token>"   -d '{"title":"Nuevo libro","author":"Carlos","description":"Demo","publishDate":"2024-06-20"}'
```

---

## 📑 Licencia

Este proyecto es para fines educativos y de práctica de desarrollo backend con Node.js y Express.

---
