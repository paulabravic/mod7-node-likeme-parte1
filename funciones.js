const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123456",
    database: "likeme",
    allowExitOnIdle: true,
});

const leerPost = async () => {
    const { rows } = await pool.query("SELECT * FROM posts;");
    return rows;
}

const escribirPost = async (titulo, url, descripcion, likes) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1,$2,$3,$4)";
    const values = [titulo, url, descripcion, likes];
    await pool.query(consulta, values);
    console.log("Post agregado");
}

module.exports = { leerPost, escribirPost };
