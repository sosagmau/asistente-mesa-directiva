const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos (o crearla si no existe)
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos SQLite.');
  }
});

// Crear la tabla de usuarios
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user'
    )
  `, (err) => {
    if (err) {
      console.error('Error al crear la tabla de usuarios:', err.message);
    } else {
      console.log('Tabla de usuarios creada o ya existente.');
    }
  });
});

module.exports = db;