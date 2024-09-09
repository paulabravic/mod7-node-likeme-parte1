const { leerPost, escribirPost } = require("./funciones");
const cors = require("cors");
const express = require("express");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get("/posts", async (req, res) => {
    const obtenerPost = await leerPost();
    res.json(obtenerPost);
});

app.post("/posts",async(req, res) => {
    const {titulo, url, descripcion, likes} = req.body;
    await escribirPost(titulo, url, descripcion, likes)
    res.send("El post fue agregafo");
});

app.listen(port, () => console.log("servidor escuchado en puerto 3000"));