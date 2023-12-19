const verbes = [
    ['lire','read','read','read'],
    ['mettre','put','put','put'],
    ['penser','think','thought','thought'],
    ['partir','leave','left','left'],
    ['écrire','write','wrote','written'],
    ['dormir','sleep','slept','slept'],
    ['courir','run','ran','run']
 //   ['','','',''],
    ]

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