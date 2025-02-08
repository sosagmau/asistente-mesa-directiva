// Mostrar el formulario de Inicio de Sesión
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
  }
  
  // Mostrar el formulario de Registro
  function showRegister() {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
  }
  
  // Manejar el envío del formulario de Inicio de Sesión
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Inicio de sesión exitoso');
  });
  
  // Manejar el envío del formulario de Registro
  document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registro exitoso');
  });