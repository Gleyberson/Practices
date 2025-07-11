let categories = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('rememberMe') === 'true') {
        sessionStorage.setItem('loggedIn', 'true');
    }
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        Swal.fire({
            title: 'Debes iniciar sesión para acceder a esta página.',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        });
        location.href = 'login.html'; // Redirigir a la página de inicio de sesión
    }
    username = localStorage.getItem('username');
    document.getElementById('usernameDisplay').textContent = username || 'Usuario';

    // Cargar presupuesto si se está editando
    const params = new URLSearchParams(window.location.search);
    const nombrePresupuesto = params.get('presupuesto');
    if (nombrePresupuesto) {
        document.getElementById('nombrePresupuesto').value = nombrePresupuesto;
        const presupuestos = JSON.parse(localStorage.getItem('presupuestos')) || [];
        const presupuesto = presupuestos.find(p => p.nombre === nombrePresupuesto);
        if (presupuesto) {
            categories = JSON.parse(JSON.stringify(presupuesto.categorias));
        } else {
            categories = [];
        }
    } else {
        // Nuevo presupuesto: categorías por defecto
        categories = [
            { tipo: 'ingreso', nombre: 'Sueldo', monto: 0 },
            { tipo: 'ingreso', nombre: 'Trabajo extra', monto: 0 },
            { tipo: 'gasto', nombre: 'Alquiler', monto: 0 },
            { tipo: 'gasto', nombre: 'Comida', monto: 0 }
        ];
    }

    // Renderizar tablas
    renderTable('ingreso');
    renderTable('gasto');
    calcularTotales();
});

function renderTable(tipo) {
    // console.log('Renderizando tabla para tipo:', tipo);
    const tbody = document.querySelector('#tablecat' + tipo + ' tbody');
    tbody.innerHTML = '';

    // console.log('Categorias:', categories);

    categories.forEach((cat, index) => {
        if (cat.tipo !== tipo) return;  // salta si no coincide el tipo

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${cat.nombre}</th>
            <td>
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="bi bi-currency-dollar"></i>
                    </span>
                    <input type="number" name="inputMonto" class="form-control monto-input" data-tipo="${cat.tipo}" value="${cat.monto}" onchange="updateMonto(${index}, this.value)">
                </div>
            </td>
            <td><button class="btn btn-danger" onclick="eliminarItem('${cat.tipo}', ${index})">Eliminar</button></td>
        `;

        tbody.appendChild(tr);
    });
    document.querySelectorAll('.monto-input').forEach(input => {
        input.addEventListener('keyup', calcularTotales);
    });
}
function updateMonto(index, value) {
    categories[index].monto = parseFloat(value) || 0;
    saveCategories();
}

function eliminarItem(tipo,index) {
    categories.splice(index, 1);
    saveCategories();
    renderTable(tipo);
}

function agregarItem(tipo, nombre) {
    // console.log('Agregando item tipo:', tipo);
    // console.log('Agregando item nombre:', nombre);
    let catExists = categories.some(c => c.tipo === tipo && c.nombre.trim().toLowerCase() === nombre.trim().toLowerCase());
    // console.log(cat);
    if (!nombre || nombre.trim() === '') {
        Swal.fire({
            title: 'Error',
            text: 'El nombre no puede estar vacío.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return;
    }    
    if (catExists) {
        Swal.fire({
            title: 'Error',
            text: 'Ya existe un elemento con este nombre en esta categoría.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return;
    } else {
        categories.push({ tipo, nombre, monto: 0 });
        saveCategories();
    }
    renderTable(tipo);
}

function saveCategories() {
    localStorage.setItem('categories', JSON.stringify(categories));
}

function calcularTotales (){
    let total = {
        ingreso: 0,
        gasto: 0
    };
    let inputs = document.querySelectorAll('.monto-input');

    inputs.forEach(input => {
        let tipo = input.dataset.tipo;
        let valor = parseFloat(input.value) || 0;

        // console.log('Tipo:', tipo, 'Valor:', valor);

        if (total.hasOwnProperty(tipo)) {
            total[tipo] += valor;
        } else {
            total[tipo] = valor;
        }
    });
    let ahorro = total.ingreso - total.gasto;
    // Mostrar resultados
    document.getElementById('total-ingreso').textContent = total.ingreso.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    document.getElementById('total-gasto').textContent = total.gasto.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
        document.getElementById('total-ahorro').textContent = ahorro.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function guardarPresupuesto() {
    const nombre = document.getElementById('nombrePresupuesto').value.trim();
    if (!nombre) {
        Swal.fire({
            title: "Error",
            text: "Por favor ingresa un nombre para el presupuesto.",
            icon: "question",
            confirmButtonText: "Aceptar"
        });
        return;
    }
    let presupuestos = JSON.parse(localStorage.getItem('presupuestos')) || [];
    const idx = presupuestos.findIndex(p => p.nombre === nombre);
    const data = {
        nombre,
        categorias: JSON.parse(JSON.stringify(categories))
    };
    if (idx >= 0) {
        presupuestos[idx] = data;
    } else {
        presupuestos.push(data);
    }
    localStorage.setItem('presupuestos', JSON.stringify(presupuestos));
    Swal.fire({
        title: "¡Presupuesto guardado!",
        icon: "success",
        confirmButtonText: "Aceptar"
    });
}
