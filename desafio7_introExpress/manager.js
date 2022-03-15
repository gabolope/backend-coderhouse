const fs = require("fs"); 

// Creo la clase Archivo, que debe recibir el nombre del archivo con el que va a trabajar.
class Archivo{
    constructor(name) {
        this.name = name;
    }
    // Función leer debe mostrar el listado de productos. Debe chequear que exista el producto. 
    leer = async(file) => {
        try {
            if (fs.existsSync(file)) {
                const products = await fs.promises.readFile(file, "utf-8");
                console.log("Producst file contains: ",products)
            } else {
                console.log("Products file is empty: ",[])
            }
        } catch (err) {
            console.log("Oops, an error ocurred: ", err)
        }
    };
    // Función guardar chequea si el archivo existe, si existe agrega los objetos al archivo, si no existe lo crea. Agrega un id al
    guardar = async(file, newProduct) => {
        try {
            if (fs.existsSync(file)) { 
                const data = await fs.promises.readFile(file, "utf-8");
                const products = JSON.parse(data);
                newProduct.id = products.length + 1;
                products.push(newProduct);
                await fs.promises.writeFile(file, JSON.stringify(products, null, "\t"));
                console.log("File updated successfully.")
            } else {
                newProduct.id = 1; 
                await fs.promises.writeFile(file, JSON.stringify(newProduct, null, "\t"));
                console.log("File created successfully.")
            }  
        } catch (err) {
            console.log("Oops, an error ocurred: ", err)
        }
    };
    borrar = async(file) => {
        try{
            if (fs.existsSync(file)) {
                await fs.promises.unlink(file);
                console.log(`File "${file}" successfully erased.`)
            } else {
                console.log("File not found.")
            }        
        } catch (err) {
            console.log("Oops, an error ocurred: ", err)
        }
    }
}

// Creo una variable que va a manejar el archivo con el método constructor.
const file1 = new Archivo();

// EJECUTAR LOS MÉTODOS PARA AGREGAR PRODUCTOS.

const fileActions = async() => {
    await file1.guardar("productos.txt", [])
    await file1.guardar("productos.txt", {
        title: "Goma",
        price: 100,
        thumbnail: "goma.png"
    })
    await file1.guardar("productos.txt", {
        title: "Lápiz",
        price: 50,
        thumbnail: "lapiz.png"
    })
    await file1.leer("productos.txt")
    await file1.borrar("productos.txt")
}

fileActions() 