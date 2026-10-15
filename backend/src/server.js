// Este archivo es el punto de arranque del backend

// Importamos la instancia de la aplicación Express ya configurada.
// app.js debe encargarse de middlewares, rutas y confuiguraciones general
import app from "./app.js";

// Importamos dotenv para cargar variables de entorno desde el archivo .env
import dotenv from "dotenv";

// Ejecutamos la carga de variables de entorno

// Esto debe hacerse antes de usar process.env
dotenv.config();

// Definimos el puerto del servidor
// Se prioriza el valor definido en el entorno de (producción)
// y se usa 4000 como valor por defecto en desarollo
const PORT = process.env.PORT || 4000;

// Iniciamos el servidor HTTP usando la app de Express
// Listen levanta el servidor y queda a la espera de peticiones
app.listen(PORT, () => {
    // Log informativo indicando que el servidor está corriendo 
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
