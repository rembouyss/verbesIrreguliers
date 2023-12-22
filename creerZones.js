function creerZoneChoix() {
    let codeZoneChoix =`
        <fieldset id="choix">
            <legend>Que veux-tu travailler ?</legend> 
            <div>
                <input type="radio" name="choix" id="infinitif" value="0" checked/>
                <label for="infinitif">Infinitif</label>
            </div>
            <div>
                <input type="radio" name="choix" id="preterit" value="1"/>
                <label for="preterit">Prétérit</label>
            </div>
            <div>
                <input type="radio" name="choix" id="partPasse" value="2"/>
                <label for="partPasse">Participe passé</label>
            </div>
            <div>
                <input type="radio" name="choix" id="mix" value="3"/>
                <label for="mix">Mélange</label>
            </div>
            <div>
                <input type="radio" name="choix" id="voir" value="4"/>
                <label for="voir">Juste voir les verbes</label>
            </div>
            <div>
                <label for="nbQuestions">Nombre de questions</label>
                <input type="range" id="nbQuestions" min="1"/>
            </div>
            <input type="submit" id="btnChoix" value="OK">
        </fieldset>
    `
    zoneAction.innerHTML = codeZoneChoix
    document.body.appendChild(zoneAction)
    let btnChoix = document.getElementById("btnChoix")
    btnChoix.addEventListener("click", () => {
        // On regarde ce qui a été choisi lors du clic sur le bouton
        let listeRadio = document.querySelectorAll("#choix input")
        let i=0
        while (!listeRadio[i].checked) i++
        choix = parseInt(listeRadio[i].value)

        lancerJeu(document.getElementById("nbQuestions").value)
    })
}

function creerZoneJeu() {

    let codeZoneJeu = `
        <button id="btnMenu">Menu</button>
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
    
    zoneAction.innerHTML = codeZoneJeu
    document.body.appendChild(zoneAction)

    document.getElementById("btnMenu").addEventListener("click", () => {
        creerZoneChoix()
    })
}