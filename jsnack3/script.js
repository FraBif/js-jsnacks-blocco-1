const emptyBox = []
const userNumber = prompt("Inserisci un numero")


if (userNumber % 2 !== 0) {
    emptyBox.push(userNumber)
    console.log(emptyBox)
    console.log("Hai riempito la scatola")
} else {
    console.log(emptyBox)
    console.log("La scatola è vuota")
}