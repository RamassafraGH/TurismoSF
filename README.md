````markdown
<div align="center">

# 🏛️ TurismoSF — SICAT

### _Sistema de Información Categórica de Turismo de la Provincia de Santa Fe_

[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java 21](https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Angular 19](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Plataforma web integral para la gestión, parametrización y consulta centralizada de categorías y recursos turísticos.

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
- [Requisitos Previos](#-requisitos-previos)
- [Guía de Instalación y Ejecución](#-guía-de-instalación-y-ejecución)
- [Puertos del Sistema](#-puertos-utilizados)
- [Estructura del Repositorio](#-estructura-del-repositorio)
- [API Endpoints y Pruebas](#-api-endpoints-y-pruebas)
- [Flujo de Trabajo y Contribución](#-guía-de-contribución-y-flujo-de-trabajo)
- [Autores](#%EF%B8%8F-autores)

---

## ℹ️ Acerca del Proyecto

**TurismoSF** aborda la necesidad de digitalizar y administrar de forma ordenada los catálogos y clasificaciones turísticas de la provincia de Santa Fe. La aplicación permite:

- 🗂️ **Administración de Categorías:** Alta, modificación, baja y búsqueda parametrizada de categorías turísticas.
- 💾 **Integración y Persistencia:** Manejo automatizado del esquema relacional en PostgreSQL.
- ⚡ **Consumo Dinámico:** Frontend reactivo construido en Angular para operar los datos de la API REST.

---

## 🏗️ Arquitectura del Sistema

El proyecto sigue una arquitectura modular y desacoplada completamente orquestada mediante contenedores:

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
````

---

## 🛠️ Requisitos Previos

Para ejecutar la aplicación completa solo necesitás tener instalado **Docker Desktop**:

- 🐋 **Windows / Mac:** Descargar e instalar [Docker Desktop](https://www.docker.com/products/docker-desktop/).
- 🐧 **Linux:** Instalar `docker` y el plugin `docker-compose-plugin` según tu distribución.

---

## 🚀 Guía de Instalación y Ejecución

Sigue estos simples pasos para poner en marcha el proyecto localmente:

### 1. Clonar el repositorio

```bash
git clone [https://github.com/RamassafraGH/TurismoSF.git](https://github.com/RamassafraGH/TurismoSF.git)
cd TurismoSF

```

### 2. Levantar todo el sistema

Ejecutá el siguiente comando en la raíz del proyecto para construir y levantar todos los contenedores en segundo plano:

```bash
docker compose up -d --build

```

> ⏳ _La primera vez puede demorar un par de minutos mientras se descargan las imágenes base y se compilan tanto el backend como el frontend._

### 3. Verificar el estado de los servicios

```bash
docker compose ps

```

Deberías ver los tres contenedores (`sicat_db`, `sicat_backend` y `sicat_frontend`) con estado **`Up`**.

### 4. Acceder a la aplicación

Abre tu navegador e ingresa a: **`http://localhost:4200`**

---

## 🌐 Puertos Utilizados

| Servicio     | Puerto Local | Tecnología      | Descripción                     |
| ------------ | ------------ | --------------- | ------------------------------- |
| **Frontend** | `4200`       | Angular / Nginx | Interfaz web de usuario         |
| **Backend**  | `8080`       | Spring Boot     | API RESTful y lógica de negocio |
| **Database** | `5432`       | PostgreSQL      | Base de datos relacional        |

> [!WARNING]
> Si alguno de estos puertos ya está en uso en tu PC por otra aplicación, `docker compose up` fallará con un error de conflicto de puertos. Avisa al grupo para ajustar el mapeo en `docker-compose.yml`.

---

## 📂 Estructura del Repositorio

```text
TurismoSF/
├── 📁 backend/                  # Proyecto Spring Boot (Java 21)
│   ├── 📁 src/                  # Controllers, Services, Repositories, Models
│   ├── 📁 .mvn/                 # Wrapper de Maven
│   ├── 📄 Dockerfile            # Configuración Docker para el Backend
│   └── 📄 pom.xml               # Gestor de dependencias Maven
├── 📁 db/                       # Scripts SQL y persistencia
│   └── 📁 init/                 # DDL/DML de creación de tablas e inserts iniciales
├── 📁 frontend/                 # Aplicación web en Angular 19
│   ├── 📁 src/                  # Componentes, servicios, guardias y assets
│   └── 📄 package.json          # Dependencias y scripts de Node
├── 📄 docker-compose.yml        # Orquestación de contenedores Docker
└── 📄 README.md                 # Documentación del proyecto

```

---

## 🧪 API Endpoints y Pruebas

Para probar las rutas de la API backend sin necesidad del frontend, puedes utilizar el archivo de pruebas HTTP incluido en el proyecto o importarlas en Postman / Insomnia.

### Endpoints principales de Categorías (`/api/categorias`):

| Método | Endpoint               | Descripción                                |
| ------ | ---------------------- | ------------------------------------------ |
| GET    | `/api/categorias`      | Obtener el listado de todas las categorías |
| GET    | `/api/categorias/{id}` | Buscar una categoría específica por su ID  |
| POST   | `/api/categorias`      | Crear una nueva categoría                  |
| PUT    | `/api/categorias/{id}` | Actualizar una categoría existente         |
| DELETE | `/api/categorias/{id}` | Eliminar una categoría                     |

---

## 🤝 Guía de Contribución y Flujo de Trabajo

Para mantener el historial limpio y ordenado entre todos los integrantes del equipo:

1. **Crear una rama para la tarea:**

```bash
git checkout -b feature/nombre-de-la-tarea

```

2. **Realizar commits con mensajes claros:**

```bash
git commit -m "feat: agregar validación en creación de categorías"

```

3. **Subir la rama y abrir un Pull Request (PR):**

```bash
git push origin feature/nombre-de-la-tarea

```

---

## ✒️ Autores

- **Ramiro Saffra** — [RamassafraGH](https://github.com/RamassafraGH)
- _Equipo de Desarrollo — Proyecto TurismoSF_

```

```
