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


const filtroCategoria = document.getElementById("filtro-categoria");

filtroCategoria.addEventListener("change", () => {
  const categoria = filtroCategoria.value;
  document.querySelectorAll(".producto").forEach(producto => {
    const cat = producto.getAttribute("data-categoria");
    if (categoria === "todos" || cat === categoria) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});


// Mostrar detalle al seleccionar producto
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const producto = boton.closest(".producto");
    document.getElementById("detalle-producto").style.display = "block";
    document.getElementById("det-nombre").textContent = producto.getAttribute("data-nombre");
    document.getElementById("det-descripcion").textContent = producto.querySelector("p").textContent;
  });
});

/////////////

const nuevoProducto = {
  nombre: nombreInput.value,
  precio: parseFloat(precioInput.value),
  categoria: categoriaSelect.value, // ← aquí
  empresa: empresaInput.value,
  descripcion: descripcionInput.value,
  contacto: contactoInput.value,
  imagen: imagenInput.value
};


div.className = "producto";
div.setAttribute("data-nombre", producto.nombre);
div.setAttribute("data-precio", producto.precio);
div.setAttribute("data-categoria", producto.categoria); // ← importante

  
  