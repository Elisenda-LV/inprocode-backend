# Inprocode: API Rest - Node js.

API Rest desarrollada con Node.js, Express y Sequelize para conectarse a una base de datos de MariaDB.

## Instalación

Para instalar este proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local: https://github.com/Elisenda-LV/inprocode-backend.git
2. Instala las dependencias utilizando `npm install`.
3. Descarga el archivo: inprocode.sql.
4. El servidor estará disponible en http://localhost:3003 por defecto.

## Uso

Para ejecutar el proyecto, utiliza el siguiente comando:

```
npm start

```

## Endpoints de la API:

### Leagues

GET /leagues: Obtiene todas las ligas.
GET /leagues/:id: Obtiene las ligas por ID.
POST /leagues: Crea una nueva liga.
PUT /leagues/:id: Realiza un update de una liga existente.
DELETE /leagues/:id: Elimina una liga.

Nota: Reemplaza :id con el ID de la liga correspondiente.


### Calendar

GET /calendars: Obtiene todos los eventos.
GET /calendars/:id: Obtiene los eventos por ID.
POST /calendars: Crea un nuevo evento.
PUT /calendars/:id: Modifica un evento existente.
DELETE /calendars/:id: Elimina un evento.

Nota: Reemplaza :id con el ID del evento correspondiente.


### Map

GET /maps: Obtiene todos los estadios.
GET /maps/:id: Obtiene estadios por ID.

Nota: Reemplaza :id con el ID de la liga correspondiente.


### Graphic

GET /graphics: Obtiene todos los datos para mostrar en el gráfico.


## Contribución

Si deseas colaborar en este proyecto o informar sobre problemas, no dudes en crear un "issue" o enviar un "pull request."

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más información.