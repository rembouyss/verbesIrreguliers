
// On regarde ce qui a été choisi lors du clic sur le bouton
let btnOK = document.getElementById("btnOK")
let choix = "0"
btnOK.addEventListener("click", () => {
    let listeRadio = document.querySelectorAll("#choix input")
    let i=0
    while (!listeRadio[i].checked) i++
    choix=listeRadio[i].value
})

