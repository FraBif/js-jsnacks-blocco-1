const emptyBox = []

let n = 6
for (let i = 0; i < n; i++) { 
  userNumbers = prompt("inserisci un numero")
  if (userNumbers % 2 !== 0) {
    emptyBox.push(userNumbers)
    console.log(emptyBox)
    console.log("Hai riempito la scatola")
} else {
    console.log(emptyBox)
    console.log("La scatola è vuota")
}
}


