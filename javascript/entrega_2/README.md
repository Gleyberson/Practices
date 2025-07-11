# Control de Gastos - Presupuestos Mensuales

Aplicación web para crear, editar y gestionar presupuestos mensuales, con autenticación básica y almacenamiento en el navegador usando **localStorage**.

## Características

- **Login simulado** (usuario demo: `name@example.com`, contraseña: `demodemo`)
- Crear presupuestos mensuales con nombre personalizado (ej: "Julio 2025")
- Agregar, editar y eliminar categorías de ingresos y gastos para cada presupuesto
- Visualización de totales de ingresos, gastos y ahorro mensual
- Listado de todos los presupuestos guardados, con opción de editar cada uno
- Persistencia de datos en el navegador (localStorage)
- Interfaz responsiva con Bootstrap 5 y Bootstrap Icons

## Estructura de carpetas

```
entrega_2/
│
├── assets/
│   └── dist/
│       ├── css/
│       │   ├── bootstrap.min.css
│       │   └── styles.css
│       └── js/
│           ├── main.js
│           ├── login.js
│           └── index.js
│
├── index.html
├── login.html
└── budget.html
```

## Uso

1. **Iniciar sesión**
   - Usuario: `name@example.com`
   - Contraseña: `demodemo`

2. **Crear un presupuesto**
   - Haz clic en el botón "+" en la página principal.
   - Ingresa el nombre del presupuesto (ejemplo: "Agosto 2025").
   - Agrega categorías de ingresos y gastos según lo necesites.
   - Haz clic en "Guardar Presupuesto".

3. **Ver y editar presupuestos**
   - En la página principal se listan todos los presupuestos guardados.
   - Haz clic en "Editar" para modificar un presupuesto existente.

4. **Cerrar sesión**
   - Borra el estado de sesión desde el navegador o desmarca "Recordar inicio de sesión" al ingresar.

## Tecnologías

- HTML5, CSS3, JavaScript (ES6)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [SweetAlert2](https://sweetalert2.github.io/) para mensajes y alertas

## Notas

- Todos los datos se almacenan en el navegador del usuario (localStorage).
- No requiere backend ni base de datos externa.
- El login es solo una simulación para fines prácticos.

---

**Desarrollado por Gleyberson R. &copy; 2025**