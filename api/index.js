const express = require("express");
const app = express();
const path = require("path");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../express")));

app.get("/express", (req, res) => res.sendFile(path.join(__dirname, "../express/index.html")));
app.get("/dom", (req, res) => res.sendFile(path.join(__dirname, "../public/dom/index.html")));
app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;