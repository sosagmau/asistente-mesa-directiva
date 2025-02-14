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

// Manejar el envío del formulario de Registro
document.getElementById('register-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const name = document.querySelector('#register-form input[type="text"]').value;
  const email = document.querySelector('#register-form input[type="email"]').value;
  const password = document.querySelector('#register-form input[type="password"]').value;

  try {
    // Enviar la solicitud de registro al backend
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message); // Registro exitoso
      showLogin(); // Cambiar al formulario de inicio de sesión
    } else {
      alert(data.message); // Mostrar mensaje de error
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
  }
});

// Manejar el envío del formulario de Inicio de Sesión
document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const email = document.querySelector('#login-form input[type="email"]').value;
  const password = document.querySelector('#login-form input[type="password"]').value;

  try {
    // Enviar la solicitud de inicio de sesión al backend
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message); // Inicio de sesión exitoso
      // Redirigir al usuario o realizar otras acciones
      window.location.href = 'public/dashboard.html'; // Cambia '/dashboard' por la ruta deseada
    } else {
      alert(data.message); // Mostrar mensaje de error
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
  }
});
