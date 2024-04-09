const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.get("/express", (req, res) => {res.render("view", { data: data });}); 
app.get("/dom", (req, res) => res.sendFile(path.join(__dirname, "../public/dom/index.html")));
app.get("/cliente_servidor", (req, res) => res.sendFile(path.join(__dirname, "../public/cliente_servidor/index.html")));
app.get("/cliente_servidor/data", (req, res) => res.json(data))

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;