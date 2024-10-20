
async function nomsComplementsPour(indication, prixMin, db){
    const complements = await db.collection('catalogue')
                               .find({indication:indication,prix:{$lte:prixMin}})
                               .toArray();
     return complements.map(c => c.nom);
    
}
export {nomsComplementsPour};