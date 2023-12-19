
// On regarde ce qui a été choisi lors du clic sur le bouton
let btnOK = document.getElementById("btnOK")

btnOK.addEventListener("click", () => {
    let listeRadio = document.querySelectorAll("#choix input")
    let i=0
    while (!listeRadio[i].checked) i++
    reponses = choisirReponses(listeRadio[i].value)
    lancerJeu()
})

// détermine si on va demander des infinitifs, Prétérits ou paticipe passés
function choisirReponses(choix) {
    if (choix === "0") return infinitif
    if (choix === "1") return preterit
    return partPasse
}

function lancerJeu() {

}