// vaudra 1,2,3 en fonction de si on choisit l'infinitif, le prétérit, le part passé
let choix = 0

// On regarde ce qui a été choisi lors du clic sur le bouton
let btnValiderChoix = document.getElementById("btnValiderChoix")
btnValiderChoix.addEventListener("click", () => {
    let listeRadio = document.querySelectorAll("#choix input")
    let i=0
    while (!listeRadio[i].checked) i++
    choix = parseInt(listeRadio[i].value)
    determinerConsigne(choix)
    lancerJeu()
})

// gère ce qui est écrit, la consigne
function determinerConsigne(n) {
    let possibilites = ["'infinitif","e prétérit","e participe passé"];
    let consigne = document.getElementById("consigne");
    consigne.innerText = `Donne l${possibilites[n-1]} de :`;
}



function lancerJeu() {

    // quand un verbe de verbesJeu sera demandé, on le supprimera ensuite
    let verbesJeu = [...verbes]

    let possibilites = ["'infinitif","e prétérit","e participe passé"]

    let score = 0
    let cptQuestions = 0
    let question = document.getElementById("question")
    let scoreLabel = document.getElementById("scoreLabel");
    let index = getRnd(0,verbesJeu.length-1)
    question.innerText = verbesJeu[index][0]

    let correction = document.getElementById("correction")

    let btnValiderReponse = document.getElementById("btnValiderReponse")

    btnValiderReponse.addEventListener("click", () => {
        cptQuestions++;

        
        if (cptQuestions < verbes.length) {
            let reponse = document.getElementById("reponse");
            // on regarde si la réponse est bonne
            if (reponse.value === verbesJeu[index][choix]) {
                score++
                correction.innerText = "Bravo !"
            }
            else correction.innerText = `Non, l${possibilites[choix-1]} de ${verbesJeu[index][0]} est : ${verbesJeu[index][choix]}`

            reponse.value = ""

            // on enlève de la liste le verbe demandé
            verbesJeu.splice(index,1)

            // MàJ du score
            scoreLabel.innerText = `Score : ${score} / ${cptQuestions}`;

            index = getRnd(0,verbesJeu.length-1);
            question.innerText = verbesJeu[index][0];
        }
        else {
            let consigne = document.getElementById("consigne");
            consigne.innerText = "LE JEU EST FINI";
            question.innerText = ""
        }
    })
    
}
