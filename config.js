let textVerbes = []
console.log(listeVerbes[70])
console.log(listeVerbes[70])

// for (let i in listeVerbes) textVerbes.push(i.toString())
console.log(textVerbes)


// retourne un entier aléatoire entre min et max
function getRnd(min,max) {
    let alea = Math.random()    // un nombre décimal entre 0 et 1
    alea *= max-min+1           // entre 0 et max-min+1
    alea += min                 // entre min et max+1
    alea = Math.floor(alea)     // entier entre min et max
    return alea
}

// retourne un élément aléatoire d'une liste
function getRndList(liste) {
    return liste[getRnd(0,liste.length-1)]
}