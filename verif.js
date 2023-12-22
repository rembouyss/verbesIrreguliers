function verifNom(nom) {
    if (nom.value.length < 3) {
        changeClass(nom,1)
        throw new Error(`Le nom ${nom.value} est trop court`)
    }
    else changeClass(nom,0)
}
function verfiMail(mail) {
    let regexpmail = new RegExp("^[\\w-._]+@[\\w-_]+\\.[\\w]+$")
    if(!regexpmail.test(mail.value)) {
        changeClass(mail,1)
        throw new Error(`${mail.value} n'est pas une adresse vailde`)
    }
    changeClass(mail,0)
}
function verifNbQuestions(nb) {
    let regexpquestions = new RegExp("^[1-9][\\d]*$")
    if(!regexpquestions.test(nb.value)) {
        changeClass(nb,1)
        throw new Error(`Le nombre de questions doit être un nombre entier entre 1 et ${verbes.length}`)
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
        verfiMail(mail)

        let nbQuestions = document.getElementById("nbQuestions")
        verifNbQuestions(nbQuestions)

        btnValiderForm.disabled = true

        lancerJeu(nbQuestions.value)
    }
    catch(erreur) {
        let erreurFormulaire = document.getElementById("erreurFormulaire")
        erreurFormulaire.innerText = erreur
    }
}