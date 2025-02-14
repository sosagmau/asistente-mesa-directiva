// Cambiar entre secciones
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Remover la clase 'active' de todos los enlaces
      document.querySelectorAll('.sidebar nav ul li a').forEach(a => a.classList.remove('active'));
  
      // Agregar la clase 'active' al enlace seleccionado
      this.classList.add('active');
  
      // Ocultar todas las secciones
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
  
      // Mostrar la sección correspondiente
      const sectionId = this.getAttribute('data-section');
      document.getElementById(sectionId).classList.add('active');
    });
  });
  
  // Redirigir al hacer clic en los widgets
  document.querySelectorAll('.widget').forEach(widget => {
    widget.addEventListener('click', function () {
      const sectionId = this.getAttribute('data-section');
      document.querySelector(`.sidebar nav ul li a[data-section="${sectionId}"]`).click();
    });
  });
  
  // Notificaciones
  document.querySelector('.notification-icon').addEventListener('click', function () {
    document.querySelector('.sidebar nav ul li a[data-section="notifications"]').click();
  });
  
  // Cerrar sesión
  document.getElementById('logout-btn').addEventListener('click', function () {
    alert('Sesión cerrada');
    window.location.href = 'file:///C:/Users/Maurice/ProyectoAV/asistente-mesa-directiva/public/index.html'; // Redirigir a la página de inicio de sesión
  });