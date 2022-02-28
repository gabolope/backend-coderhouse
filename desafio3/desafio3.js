const showWords = (text, callback, time = 1000) => {
    return new Promise((resolve) => {
        let i = 0;
        let splitedText = text.split(" ");
        const timer = setInterval(() => {
            if (i < splitedText.length) {
                console.log(splitedText[i]);
                i++;
            } else {
                clearInterval(timer);
                callback()
            }
        }, time)
        setTimeout(() => {
            resolve(splitedText.length)
        }, time * splitedText.length)
    })
}

const endingFunction = () => console.log("-------Terminó la frase-------")

const runProgram = async () => {
    await showWords("Esto es una oración muy rápida", endingFunction, 50);
    await showWords("ahora viene otra oración más lenta", endingFunction, 500);
    await showWords("y por último esta que es lentisima", endingFunction, 1000)
}

runProgram()

