"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const operacion = (num1, num2, operator) => __awaiter(void 0, void 0, void 0, function* () {
    let operators = yield import("./operaciones.js");
    let result = operators.operaciones(num1, num2, operator);
    console.log(result);
});
operacion(10, 15, "sumar");
operacion(10, 15, "restar");
operacion(10, 15, "multiplicar");
operacion(10, 15, "dividir");
operacion(10, 15, "perro");
