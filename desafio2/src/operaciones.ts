export const operaciones = (num1: number, num2: number, operator: string) => {
    return new Promise((resolve) => {
        resolve(
            operator === "sumar"
            ? num1 + num2
            : operator === "restar"
            ? num1 - num2
            : operator === "multiplicar"
            ? num1 * num2
            : operator === "dividir"
            ? num1 / num2 
            : "No se ingresó ningún operador válido."
        )
    })
}