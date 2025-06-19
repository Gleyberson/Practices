let categories = [
    { tipo: 'ingreso', nombre: 'Sueldo', monto: 0 },
    { tipo: 'ingreso', nombre: 'Trabajo extra', monto: 0 },
    { tipo: 'gasto', nombre: 'Alquiler', monto: 0 },
    { tipo: 'gasto', nombre: 'Comida', monto: 0 }
];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('rememberMe') === 'true') {
        sessionStorage.setItem('loggedIn', 'true');
    }
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        alert('Debes iniciar sesión para acceder a esta página.');
        location.href = 'login.html'; // Redirigir a la página de inicio de sesión
    }
    username = localStorage.getItem('username');
    document.getElementById('usernameDisplay').textContent = username || 'Usuario';
    console.log(categories.length);
    let tiposUnicos = [];
    for (let i = 0; i < categories.length; i++) {
        if (!tiposUnicos.includes(categories[i].tipo)) {
            console.log(categories[i].tipo);
            tiposUnicos.push(categories[i].tipo);
            renderTable(categories[i].tipo);
        }
    }   
});
function renderTable(tipo) {
    console.log('Renderizando tabla para tipo:', tipo);
    const tbody = document.querySelector('#tablecat' + tipo + ' tbody');
    tbody.innerHTML = '';

    console.log('Categorias:', categories);

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
}

function eliminarItem(tipo,index) {
    categories.splice(index, 1);
    renderTable(tipo);
}

function agregarItem(tipo, nombre) {
    console.log('Agregando item tipo:', tipo);
    console.log('Agregando item nombre:', nombre);
    let cat = categories.find(cat => cat.tipo === tipo && cat.nombre === nombre)
    console.log(cat);
    if (!nombre || nombre.trim() === '') {
        alert('El nombre no puede estar vacío.');
        return;
    }
    if (cat) {
        alert('Ya existe un elemento con este nombre en esta categoría.');
        return;
    } else {
        categories.push({ tipo, nombre, monto: 0 });
    }
    renderTable(tipo);
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

        console.log('Tipo:', tipo, 'Valor:', valor);

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
