const operacion = async (num1: number, num2: number, operator: string) => {
    let operators = await import("./operaciones.js");
    let result = operators.operaciones(num1, num2, operator)
    console.log(result)
}

operacion(10, 15, "sumar")
operacion(10, 15, "restar")
operacion(10, 15, "multiplicar")
operacion(10, 15, "dividir")
operacion(10, 15, "perro")

