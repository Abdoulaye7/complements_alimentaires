
export function nomsComplementsPour(indication, prixMin, db, cb){
    
    db.collection('catalogue')
    .find({indication:indication,prix:{$lte:prixMin}})
    .toArray((err,complements) =>{
        if(err){
            cb(err)
        }else{
            cb(null,complements.map( c => c.nom));
        }

    });
}