document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por contactarnos.");
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const recientes = [];
    const form = document.getElementById("form-registro");
    const listaRecientes = document.getElementById("lista-recientes");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = form.nombre.value;
      const precio = form.precio.value;
  
      recientes.unshift({ nombre, precio });
      if (recientes.length > 5) recientes.pop(); // Limita a 5 elementos
  
      listaRecientes.innerHTML = recientes
        .map(p => `<li>${p.nombre} - S/ ${p.precio}</li>`)
        .join("");
  
      alert("Emprendimiento registrado correctamente.");
      form.reset();
    });
  });
  
  
  const contenedorProductos = document.querySelector('.productos');
  
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('producto-card');
    
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
      <h3>${producto.nombre}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="precio">${producto.precio}</p>
      <button class="btn-agregar">Más Información</button>
    `;
    
    contenedorProductos.appendChild(card);
  });
  
  const servicios = [
    {
      nombre: 'Instalación de Plomería',
      descripcion: 'Servicios profesionales de instalación y reparación de sistemas de plomería.',
      imagen: 'servicio1.jpg',
    },
    {
      nombre: 'Asesoría en Construcción',
      descripcion: 'Asesoría experta en proyectos de construcción y renovación de espacios.',
      imagen: 'servicio2.jpg',
    },
    // Añadir más servicios
  ];
  
  const contenedorServicios = document.querySelector('.servicios');
  
  servicios.forEach(servicio => {
    const card = document.createElement('div');
    card.classList.add('servicio-card');
    
    card.innerHTML = `
      <img src="${servicio.imagen}" alt="${servicio.nombre}" class="servicio-img">
      <h3>${servicio.nombre}</h3>
      <p class="descripcion">${servicio.descripcion}</p>
      <button class="btn-agregar">Más Información</button>
    `;
    
    contenedorServicios.appendChild(card);
  });

/////////////

  
  