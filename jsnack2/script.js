const invitati = ["Pippo" , "Pluto" , "Paperino" , "ElTranco" , "Ludopaleo" , "Ludopa" , "Bilvio Serlusconi"]
const userName = prompt("Inserisci il tuo nome per verificare se sei invitato") 

let isNamePresent = false

for( let i = 0; i < invitati.length; i++) {

if (invitati[i] === userName) {
    isNamePresent = true
}
}


if (isNamePresent) {
    console.log("Congratulazioni! Sei invitato alla festa e puoi entrare")
} else {
    console.log("Spiacenti, il tuo nome non è in lista...riprova il prossimo anno")
}