const express = require("express");
const { port } = require("./config/env");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.get("/api/headers", (req, res) => {
  const contentType = req.get("Content-Type");
  const authorization = req.get("Authorization");
  const apiKey = req.get("X-API-Key");

  if (!apiKey) {
    return res.status(401).json({
      error: "API Key requerida en cabecera X-API-Key"
    });
  }

  res.set("X-API-Version", "1.0");

  res.status(200).json({
    message: "Cabeceras recibidas correctamente",
    contentType: contentType || "No especificado",
    authorization: authorization || "No especificado",
    apiKey
  });
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});