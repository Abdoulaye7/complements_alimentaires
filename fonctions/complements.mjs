
function complementsPremiersPrixPour(complements, indication, prix){
    return complements.filter(c => c.indications.indexOf(indication) !== -1 && c.prix < prix);
}

function siropSontPremierPrix(complements){
    return complements.filter( c => c.type === 'sirop').every(c => c.prix <= 5);
}

function nomsComplementsPour(complements, indication){
    return complements.filter(c => c.indications.indexOf(indication) !== -1 ).map(c => c.nom);
}

function imprimerNomsComplementsIterateur(it){
    for(const c of it){
        console.log(c.nom);
    }
}

function imprimerNomsComplementsIterable(it){
    for(const c of it){
        console.log(c.nom);
    }

}
export {complementsPremiersPrixPour,siropSontPremierPrix,nomsComplementsPour,imprimerNomsComplementsIterable,imprimerNomsComplementsIterateur}