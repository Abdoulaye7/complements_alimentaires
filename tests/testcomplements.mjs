
import { complementsPremiersPrixPour,siropSontPremierPrix,nomsComplementsPour } from "../fonctions/complements.mjs";
const complements = [
    { nom: 'Complement A', indications: ['indication1', 'indication2'], prix: 4, type: 'sirop' },
    { nom: 'Complement B', indications: ['indication2', 'indication3'], prix: 6, type: 'comprimé' },
    { nom: 'Complement C', indications: ['indication1'], prix: 5, type: 'sirop' },
    { nom: 'Complement D', indications: ['indication4'], prix: 3, type: 'sirop' }
];



const resultat1 = complementsPremiersPrixPour(complements,'indication2',5);

console.log('complementsPremiersPrixPour:', JSON.stringify(resultat1, null, 2));
const resultat2 = siropSontPremierPrix(complements);
console.log('siropSontPremierPrix:', resultat2);
const resultat3 = nomsComplementsPour(complements, 'indication2');
console.log('nomsComplementsPour:', resultat3);