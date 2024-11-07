// Función para obtener los parámetros de la URL
function obtenerParametro(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Función para mostrar la fecha y hora actual
  function mostrarFechaHora() {
    const fecha = new Date();
    document.getElementById("fecha").textContent = fecha.toLocaleDateString();
    document.getElementById("hora").textContent = fecha.toLocaleTimeString();
  }
  
  // Función para contar visitas
  function contarVisitas() {
    const seccion = obtenerParametro("seccion");
    let visitas = localStorage.getItem(`visitas_${seccion}`) || 0;
    visitas++;
    localStorage.setItem(`visitas_${seccion}`, visitas);
    document.getElementById("visitas").textContent = visitas;
  }
  
  // Función para registrar la ronda
  function registrarRonda() {
    const seccion = obtenerParametro("seccion");  // Obtener la zona (por ejemplo, Estacionamiento 2)
    const fechaHora = new Date();
    const mensajeRonda = document.getElementById("mensaje-ronda");
  
    // Actualizar el mensaje de ronda con la fecha, hora y nombre de la zona
    mensajeRonda.textContent = `Ronda realizada en ${seccion} a las ${fechaHora.toLocaleTimeString()} el ${fechaHora.toLocaleDateString()}`;
    mensajeRonda.style.display = "block";
  }
  
  // Función para inicializar la página
  function inicializarPagina() {
    const seccion = obtenerParametro("seccion");
    document.getElementById("zona-nombre").textContent = `Zona: ${seccion}`; // Muestra el nombre de la zona
    mostrarFechaHora();
    contarVisitas();
  }
  
  // Llamada a la función de inicialización
  window.onload = inicializarPagina;
  