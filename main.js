// vaudra 1,2,3,4,5 en fonction de ce qu'on choisit
let choix = 0
let zoneAction = document.getElementById("zoneAction")

// gère ce qui est écrit, la consigne
function determinerConsigne(n) {
    if (n<3) {
        let possibilites = ["'infinitif","e prétérit","e participe passé"];
        let consigne = document.getElementById("consigne");
        consigne.innerText = `Donne l${possibilites[n]} de :`;
    }
}

function lancerJeu(nbQuestions) {
  
    creerZoneJeu()
    
    determinerConsigne(choix)

    // quand un verbe de verbesJeu sera demandé, on le supprimera ensuite
    let verbesJeu = [...verbes]

    let possibilites = ["'infinitif","e prétérit","e participe passé"]

    let score = 0
    
    let question = document.getElementById("question")
    let scoreLabel = document.getElementById("scoreLabel");
    let index = getRnd(0,verbesJeu.length-1)
    question.innerText = verbesJeu[index][0]

    let correction = document.getElementById("correction")

    let btnValiderReponse = document.getElementById("btnValiderReponse")

    btnValiderReponse.addEventListener("click", () => {
        cptQuestions++;
        let reponse = document.getElementById("reponse");
        // on regarde si la réponse est bonne
        if (reponse.value === verbesJeu[index][choix]) {
            score++
            correction.innerText = "Bravo !"
        }
        else correction.innerText = `Non, l${possibilites[choix-1]} de ${verbesJeu[index][0]} est : ${verbesJeu[index][choix]}
                                     Tu as écrit ${reponse.value}`

        reponse.value = ""

        // on enlève de la liste le verbe demandé
        verbesJeu.splice(index,1)

        // MàJ du score
        scoreLabel.innerText = `Score : ${score} / ${cptQuestions}`;

        if (cptQuestions < nbQuestions) {
            index = getRnd(0,verbesJeu.length-1);
            question.innerText = verbesJeu[index][0];
        }
        else {
            let consigne = document.getElementById("consigne");
            consigne.innerText = "LE JEU EST FINI";
            question.innerText = ""
            btnValiderReponse.disabled = true
        }
    })
}

creerZoneChoix()