// vaudra 1,2,3 en fonction de si on choisit l'infinitif, le prétérit, le part passé
let choix = 0

// gère ce qui est écrit, la consigne
function determinerConsigne(n) {
    let possibilites = ["'infinitif","e prétérit","e participe passé"];
    let consigne = document.getElementById("consigne");
    consigne.innerText = `Donne l${possibilites[n-1]} de :`;
}

function creerZoneJeu() {
    let zoneJeu = document.createElement("div")

    let codeZoneJeu = `
        <label id="checkResult"></label>
        <label id="consigne"></label>
        <div id="question"></div>
        <div id ="zoneSaisie">
            <input type="text" id="reponse"/>
            <button id="btnValiderReponse">OK</button>
        </div>
        <label id="correction"></label><br/>
        <label id="scoreLabel"></label>
    `
    
    zoneJeu.innerHTML = codeZoneJeu

    let body = document.querySelector("body")
    body.appendChild(zoneJeu)

    let checktest = document.getElementById("checktest").checked
    let checkResult = document.getElementById("checkResult")
    if (checktest) checkResult.innerText = "Tu as refusé de cocher la case"
    else           checkResult.innerText = "Tu n'as pas refusé de cocher la case"
}

function lancerJeu() {
  
    creerZoneJeu()
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
            else correction.innerText = `Non, l${possibilites[choix-1]} de ${verbesJeu[index][0]} est : ${verbesJeu[index][choix]}
                                         Tu as écrit ${reponse.value}`

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
    if (nom.value.length < 3) {
        changeClass(nom,1)
        throw new Error(`Le nom ${nom.value} est trop court`)
    }
    else changeClass(nom,0)
    
}
function verfiMail(mail){
    let regexpmail = new RegExp("[a-zA-z0-9-._]+@[a-zA-z0-9-_]+\\.[a-z]+")
    if(!regexpmail.test(mail.value)) {
        changeClass(mail,1)
        throw new Error(`${mail.value} n'est pas une adresse vailde`)
    }
    changeClass(mail,0)
}
function verifNbQuestions(nb) {
    let regexpquestions = new RegExp("^[\\d]+$")
    if(!regexpquestions.test(nb.value)) {
        changeClass(nb,1)
        throw new Error(`Le nombre de questions doit être un nombre entier positif`)
    }
    else if (parseInt(nb.value) > verbes.length) {
        changeClass(nb,1)
        throw new Error(`Le nombre de questions ne doit pas dépasser ${verbes.length}`)
    }
    else changeClass(nb,0)
}

function changeClass(input,check) {
    if (check) input.classList.add('error')
    else       input.classList.remove('error')
}

function verifFormEtLancerJeu() {
    try {
        let nom = document.getElementById("nomJoueur")
        verifNom(nom)

        let mail = document.getElementById("mailJoueur")
//        verfiMail(mail)

        let nbQuestions = document.getElementById("nbQuestions")
//        verifNbQuestions(nbQuestions)

        lancerJeu()
    }
    catch(erreur) {
        let erreurFormulaire = document.getElementById("erreurFormulaire")
        erreurFormulaire.innerText = erreur
    }
}


let btnValiderForm = document.getElementById("btnValiderForm")
btnValiderForm.addEventListener("click", () => {

    // On regarde ce qui a été choisi lors du clic sur le bouton
    let listeRadio = document.querySelectorAll("#choix input")
    let i=0
    while (!listeRadio[i].checked) i++
    choix = parseInt(listeRadio[i].value)

    // on vérifie sir les info du formulaire sont bien rentrées
    verifFormEtLancerJeu()
   
})