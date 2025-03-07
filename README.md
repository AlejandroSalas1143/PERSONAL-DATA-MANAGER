# Gestión de Datos Personales

## Descripción del Proyecto
La aplicación **Gestión de Datos Personales** permite a los usuarios gestionar registros personales de manera eficiente a través de un sistema que soporta operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Cada transacción se registra en un log para garantizar la trazabilidad de los cambios realizados en los datos.

## Funcionalidades
- **CRUD Completo**: Permite crear, leer, actualizar y eliminar registros.
- **Registro de Transacciones**: Cada acción se registra en un log, proporcionando un historial de las operaciones realizadas.
- **Consultas Efectivas**: Capacidad para consultar registros mediante un documento específico y realizar búsquedas en el log por tipo de transacción y fecha.

## Estructura de la Aplicación
La aplicación se ha desarrollado utilizando una arquitectura de microservicios, donde cada opción del menú se ejecuta en un contenedor independiente. La base de datos también se encuentra en un contenedor separado, lo que facilita el mantenimiento y la escalabilidad de la aplicación.

### Componentes Principales
- **Microservicios**:
  - Servicio de creación y actualización de registros.
  - Servicio de eliminación de registros.
  - Servicio de consulta de registros.
  - Servicio de gestión de logs.

## Tecnologías Utilizadas
- **Node.js**: Para la implementación de los microservicios.
- **MongoDB**: Base de datos NoSQL para almacenamiento de datos.
- **Docker**: Para la creación y gestión de contenedores.
- **Mongoose**: Para la interacción con la base de datos MongoDB.
- **Express**: Framework para la construcción de la API.

## Instalación y Ejecución
1. **Clona el repositorio**:
   ```bash
   git clone <URL del repositorio>
   cd <nombre del repositorio>

## Construye y ejecuta los contenedores
  ```bash
  docker-compose up --build
