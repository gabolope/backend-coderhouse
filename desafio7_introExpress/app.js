import express from "express";
import moment from "moment";
import fs from "fs";

// Inicializo express:
const app = express();

// Declaro el puerto:
const PORT = 8080;

// Declaro el servidor:
const server = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

// Utilizo el manager de archivos del desafío pasado, pero aquí sólo va a leer:
class Archivo{
    constructor(name) {
        this.name = name;
    }
    leer = async(file) => {
        try {
            if (fs.existsSync(file)) {
                const data = await fs.promises.readFile(file, "utf-8");
                const products = JSON.parse(data)
                console.log(`There are ${products.length} product/s on the list.`)
                return products
            } else {
                console.log("Products file is empty: ",[])
            }
        } catch (err) {
            console.log("Oops, an error ocurred: ", err)
        }
    };
}
const file1 = new Archivo();

let products = await file1.leer("productos.txt");
let productsString = JSON.stringify(products);

// Cero los endpoints:

// Endpoint que muestra todos los productos:
app.get("/items", async(req, res) => {
    res.send(`
    <h1>Listado de productos</h1>
    <hr>
    <div>${productsString}</div>
    <hr>
    <div>La cantidad de productos es de ${products.length}</div>
    `)
})

// Endpoint que muestra un producto al azar:
app.get("/items-random", (req, res) => {
    let randomNumber = Math.floor(Math.random() * (products.length));
    let randomProduct = JSON.stringify(products.slice(randomNumber, 1));
    console.log(randomProduct)
     res.send(`
    <h1> Felicitaciones </h1>
    <h2> Te tocó el producto: </h2> 
    <h3> ${randomProduct}</h3>
    `)
})

// Endpoint que muestra la cantidad de veces visitado el sitio: 
let counter = 0;
app.get("/visitas", (req, res) => {
    res.send(`Has visitado el sitio ${++counter} veces.`)
})