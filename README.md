# 🏛️ TurismoSF — SICAT (Sistema de Información Categórica de Turismo)

![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-21-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=flat-square&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Git](https://img.shields.io/badge/Git-VCS-F05032?style=flat-square&logo=git&logoColor=white)

> Plataforma web para la gestión, parametrización y consulta centralizada de categorías y recursos turísticos de la provincia de Santa Fe.

---

## 📋 Tabla de Contenidos

1. Acerca del Proyecto
2. Arquitectura del Sistema
3. Requisitos Previos
4. Guía de Instalación y Ejecución
5. Estructura del Repositorio
6. API Endpoints y Pruebas
7. Guía de Contribución y Flujo de Trabajo
8. Autores

---

## Acerca del Proyecto

**TurismoSF** aborda la necesidad de digitalizar y administrar de forma ordenada los catálogos y clasificaciones turísticas de la provincia. La aplicación permite:

- **Administración de Categorías:** Alta, modificación, baja y búsqueda parametrizada de categorías turísticas.
- **Integración y Persistencia:** Manejo automatizado del esquema relacional en PostgreSQL.
- **Consumo Dinámico:** Frontend reactivo construido en Angular para operar los datos de la API REST.

---

## 🏗️ Arquitectura del Sistema

El proyecto sigue una arquitectura desacoplada basada en contenedores:

```text
               ┌────────────────────────┐
               │    Cliente / Web       │
               │   Angular (Port 4200)  │
               └───────────┬────────────┘
                           │  HTTP / REST
                           ▼
               ┌────────────────────────┐
               │  Backend (Spring Boot) │
               │      (Port 8080)       │
               └───────────┬────────────┘
                           │  JDBC
                           ▼
               ┌────────────────────────┐
               │   PostgreSQL 16 DB     │
               │      (Port 5432)       │
               └────────────────────────┘
```

---

## 🛠️ Requisitos Previos

Solo necesitás tener instalado:

Docker Desktop (incluye Docker Compose)
Windows/Mac: https://www.docker.com/products/docker-desktop/
Linux: instalar docker y el plugin docker-compose-plugin según tu distro.

---

## 🚀 Guía de Instalación y Ejecución

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/RamassafraGH/TurismoSF.git
   cd sicat-sf
   ```

2. Levantá todo el sistema con un solo comando:

   ```bash
   docker compose up -d --build
   ```

   La primera vez puede tardar unos minutos (descarga imágenes base y compila el backend y el frontend).

3. Verificá que los tres servicios estén corriendo:

   ```bash
   docker compose ps
   ```

   Deberías ver `sicat_db`, `sicat_backend` y `sicat_frontend`, todos con estado `Up`.

4. Abrí la aplicación en el navegador:
   ```
   http://localhost:4200
   ```

## Puertos utilizados

| Servicio | Puerto en tu PC | Descripción                                                         |
| -------- | --------------- | ------------------------------------------------------------------- |
| Frontend | 4200            | Aplicación Angular (Nginx)                                          |
| Backend  | 8080            | API REST (Spring Boot)                                              |
| Database | 5432            | PostgreSQL (accesible con DBeaver/pgAdmin si querés inspeccionarla) |

Si alguno de estos puertos ya está ocupado en tu PC por otra aplicación, el `docker compose up` va a fallar con un error de "puerto en uso". Avisá al grupo para cambiar el mapeo en `docker-compose.yml`.

> 💡 _Para ejecutar los contenedores en segundo plano y liberar la terminal, añade `-d`:_
> `docker compose up --build -d`

---

## 📂 Estructura del Repositorio

```text
TurismoSF/
├── backend/                  # Proyecto Spring Boot (Java 21)
│   ├── src/                  # Código fuente (Controllers, Services, Models)
│   ├── .mvn/                 # Wrapper de Maven
│   ├── Dockerfile            # Configuración para la imagen Docker del Backend
│   └── pom.xml               # Dependencias de Maven
├── db/                       # Scripts SQL y persistencia
│   └── init/                 # Scripts .sql de creación de tablas e inserts iniciales
├── frontend/                 # Proyecto Angular
│   ├── src/                  # Componentes, servicios y assets
│   └── package.json          # Dependencias de Node.js
├── docker-compose.yml        # Orquestador multi-contenedor
└── README.md                 # Documentación del proyecto

```

---

## 🧪 API Endpoints y Pruebas

Para probar las rutas de la API backend sin necesidad del frontend, puedes utilizar el archivo de pruebas HTTP incluido o importar la colección en herramientas como Postman.

### Endpoints principales de Categorías (`/api/categorias`):

| Método   | Endpoint               | Descripción                       |
| -------- | ---------------------- | --------------------------------- |
| `GET`    | `/api/categorias`      | Lista todas las categorías        |
| `GET`    | `/api/categorias/{id}` | Busca una categoría por ID        |
| `POST`   | `/api/categorias`      | Crea una nueva categoría          |
| `PUT`    | `/api/categorias/{id}` | Actualiza una categoría existente |
| `DELETE` | `/api/categorias/{id}` | Elimina una categoría             |

---

## 🤝 Guía de Contribución y Flujo de Trabajo

Para mantener el código ordenado entre todos los integrantes del equipo:

1. **Crear una rama para la tarea:**

```bash
git checkout -b feature/nombre-de-la-tarea

```

2. **Realizar commits claros:**

```bash
git commit -m "feat: agregar validación en creación de categorías"

```

3. **Subir los cambios y abrir Pull Request (PR):**

```bash
git push origin feature/nombre-de-la-tarea

```

---

## ✒️ Autores

- [RamassafraGH](https://www.google.com/search?q=https://github.com/RamassafraGH)
- _Equipo de Desarrollo - Proyecto TurismoSF_
