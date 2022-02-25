export const operaciones = (num1, num2, operator) => {
    return new Promise((resolve) => {
        resolve(operator === "sumar"
            ? num1 + num2
            : operator === "restar"
                ? num1 - num2
                : operator === "multiplicar"
                    ? num1 * num2
                    : operator === "dividir"
                        ? num1 / num2
                        : "No se ingresó ningún operador válido.");
    });
};
