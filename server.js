import express from "express";

const app = express();

// Servir archivos estáticos de /public
app.use(express.static("public"));

// Ejemplo de ruta backend
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde Express en Vercel 🚀" });
});

// Exportar la app para que Vercel la use
export default app;
