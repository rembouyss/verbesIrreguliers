// vaudra 1,2,3 en fonction de si on choisit l'infinitif, le prétérit, le part passé
let choix = 0

// gère ce qui est écrit, la consigne
function determinerConsigne(n) {
    let possibilites = ["'infinitif","e prétérit","e participe passé"];
    let consigne = document.getElementById("consigne");
    consigne.innerText = `Donne l${possibilites[n-1]} de :`;
}

function lancerJeu() {
    determinerConsigne(choix)

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

function verifNom(nom){
    if (nom.length < 3) throw new Error(`Le nom ${nom} est trop court`)
}
function verfiMail(mail){
    let regexpmail = new RegExp("[a-zA-z0-9-._]+@[a-zA-z0-9-_]+\\.[a-z]+")
    if(!regexpmail.test(mail)) throw new Error(`${mail} n'est pas une adresse vailde`)
}
function verifNbQuestions(nb) {
    let regexpquestions = new RegExp("^[\\d]+$")
    if(!regexpquestions.test(nb)) throw new Error(`Le nombre de questions doit être un nombre entier positif`)
    else if (parseInt(nb) > verbes.length) throw new Error(`Le nombre de questions ne doit pas dépasser ${verbes.length}`)
}

function verifFormEtLancerJeu() {
    try {
        let nom = document.getElementById("nomJoueur").value
        verifNom(nom)

        let mail = document.getElementById("mailJoueur").value
        verfiMail(mail)

        let nbQuestions = document.getElementById("nbQuestions").value
        verifNbQuestions(nbQuestions)

        lancerJeu()
    }
    catch(erreur) {
        console.log(erreur)
    }
}


let btnValiderChoix = document.getElementById("btnValiderChoix")
btnValiderChoix.addEventListener("click", () => {
    // On regarde ce qui a été choisi lors du clic sur le bouton
    let listeRadio = document.querySelectorAll("#choix input")
    let i=0
    while (!listeRadio[i].checked) i++
    choix = parseInt(listeRadio[i].value)

    // on vérifie sir les info du formulaire sont bien rentrées
    verifFormEtLancerJeu()
   
})