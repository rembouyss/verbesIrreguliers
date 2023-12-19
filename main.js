
// On regarde ce qui a été choisi lors du clic sur le bouton
let btnOK = document.getElementById("btnValiderChoix")

btnOK.addEventListener("click", () => {
    let listeRadio = document.querySelectorAll("#choix input")
    let i=0
    while (!listeRadio[i].checked) i++
    reponses = choisirReponses(listeRadio[i].value)
    determinerConsigne(listeRadio[i].value)
    lancerJeu()
})

// détermine si on va demander des infinitifs, prétérits ou paticipe passés
function choisirReponses(choix) {
    if (choix === "0") return infinitif
    if (choix === "1") return preterit
    return partPasse
}

// gère ce qui est écrit, la consigne
function determinerConsigne(choix) {
    let possibilites = ["'infinitif","e prétérit","e participe passé"];
    let consigne = document.getElementById("consigne");
    consigne.innerText = `Donne l${possibilites[choix]} des verbes suivants en anglais`;
}

function lancerJeu() {
    let score = 0
    let cpt = 0
    let question = document.getElementById("question")
    let index = getRnd(0,verbes.length-1)
    question.innerText = verbes[index]

    let btnValiderReponse = document.getElementById("btnValiderReponse")

    btnValiderReponse.addEventListener("click", () => {
        cpt++;

        let reponse = document.querySelector("#zoneSaisie input");
        if (reponse.value === reponses[index]) score++;
        reponse.value = ""
        
        let scoreLabel = document.getElementById("scoreLabel");
        console.log(scoreLabel)
        scoreLabel.innerText = `Score : ${score} / ${cpt}`;

        index = getRnd(0,verbes.length-1);
        question.innerText = verbes[index];
    })
    
    
}