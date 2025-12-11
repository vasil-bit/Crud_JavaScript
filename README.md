CRUD en JavaScript Puro (LocalStorage)

Este proyecto implementa un CRUD completo utilizando JavaScript puro, HTML y CSS, sin frameworks. Está construido con un enfoque modular, validaciones personalizadas y almacenamiento persistente mediante LocalStorage.

El objetivo del proyecto es practicar una arquitectura clara y separada, con código organizado y reutilizable, simulando un pequeño sistema de gestión de usuarios.

Crear, leer, actualizar y eliminar usuarios.

Persistencia local mediante LocalStorage.

Validaciones independientes para nombre, correo y número telefónico.

Interfaz minimalista con diseño responsivo.

Ventana modal para actualización de datos (overlay).

Código dividido en módulos:

index.js (lógica principal e interfaz)

crudFunc.js (funciones del CRUD)

validaciones.js (validaciones reutilizables)

index.css (estilos)

Botón para limpiar LocalStorage y reiniciar los datos.

Código 100% JavaScript, sin librerías externas.

Estructura del Proyecto
/
├── index.html
├── index.css
├── index.js
├── crudFunc.js
└── validaciones.js

Flujo de Funcionamiento

El usuario ingresa nombre, correo y número.

Las validaciones verifican:

Solo texto y sin dígitos para el nombre.

Formato correcto del correo electrónico.

Número de teléfono con 10 dígitos.

Si los datos son válidos, el usuario se guarda en LocalStorage.

Los usuarios almacenados se muestran automáticamente en pantalla.

Cada registro tiene:

Botón de eliminación.

Botón de actualización.

El botón de actualización abre una ventana modal con los datos precargados.

Al confirmar, los valores se validan nuevamente y se actualizan.

Tecnologías Utilizadas

HTML5

CSS3

JavaScript ES6 (módulos)

LocalStorage para persistencia

DOM API nativa

Cómo Ejecutarlo

Descargue el proyecto o clone el repositorio.

Abra index.html en su navegador.

La aplicación funciona completamente de manera local, no requiere servidor.

Validaciones Implementadas

Nombre: no vacío, sin números.

Correo: cumple con expresión regular estándar.

Número: 10 dígitos exactos.

Las validaciones están separadas para permitir reutilización en distintos módulos (registro y actualización).

Objetivo Educativo

Este proyecto fue desarrollado para practicar:

Modularización en JavaScript.

Manipulación del DOM sin frameworks.

Gestión de estados mediante LocalStorage.

Buenas prácticas de separación de responsabilidades.

Validaciones limpias y reutilizables.

Posibles Mejoras Futuras

Eliminar location.reload() para actualizar la interfaz dinámicamente.

Añadir mensajes o componentes visuales en lugar de alertas.

Añadir paginación o filtros.

Implementar un sistema de búsqueda.

Migrar a IndexedDB para un almacenamiento más robusto.

Crear una versión con Fetch + backend o API simulada.