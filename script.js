document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por contactarnos.");
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

  
  