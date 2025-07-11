document.addEventListener('DOMContentLoaded', function() {
    const lista = document.getElementById('presupuestos-lista');
    lista.innerHTML = '';
    const presupuestos = JSON.parse(localStorage.getItem('presupuestos')) || [];
    console.log('Presupuestos cargados:', presupuestos);
    let totales = [];
    presupuestos.forEach((p, i) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="card mb-3" style="min-height: 7rem;">
                <div class="card-body d-flex flex-column justify-content-between h-100">
                    <h5 class="card-title mb-4">${p.nombre}</h5>
                    <div class="d-flex justify-content-end align-items-end flex-grow-1">
                        <a href="budget.html?presupuesto=${encodeURIComponent(p.nombre)}" id="edit-budget-${i}" class="btn btn-outline-primary">
                            <i class="bi bi-pencil-square"></i> Editar
                        </a>
                    </div>
                </div>
            </div>
        `;
        lista.appendChild(col);
        console.log('categorias:', p.categorias);
        p.categorias.forEach(cat => {
            console.log(`Categoría: ${cat.nombre}, Tipo: ${cat.tipo}, Monto: ${cat.monto}`);
            totales[cat.tipo] = (totales[cat.tipo] || 0) + cat.monto;
        });
        totales['ahorro'] = (totales['ingreso'] || 0) - (totales['gasto'] || 0);
        console.log('Totales:', totales);
        document.getElementById('total-ingreso').textContent = totales.ingreso.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById('total-gasto').textContent = totales.gasto.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById('total-ahorro').textContent = totales.ahorro.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    });

    // Botón para crear presupuesto nuevo (limpio)
    document.getElementById('add-budget').addEventListener('click', function(e) {
        e.preventDefault();
        // Limpia los datos temporales de categorías
        localStorage.removeItem('categories');
        window.location.href = 'budget.html';
    });
});