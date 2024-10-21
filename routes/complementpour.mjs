

import express from 'express';



function recupererPrixMinimum(req,res,next){
    if(req.query.prixMin && typeof req.query.prixMin === 'string'){
        res.locals.prixMin = req.query.prixMin;
    }else{
        res.status(400).send('Mauvaise requête');
    }
    next();
}
function recupererIndication(req,res,next){
    if(req.query.indication && typeof req.query.indication === 'string'){
        res.locals.indication = req.query.indication;
    }else{
        res.status(400).send('Mauvaise requête');
    }
    next();

}

function recupererIndicationChemin(req,res,next){
    if(req.param.indication && typeof req.param.indication === 'string'){
         res.locals.indication = req.param.indication;
    }else{
        res.status(400).send('Mauvaise requête');
    }
    next();

}

async function renvoyerComplements(req,res){
   try{
        const complements = await req.app.locals.db.collection("catalogue")
    .find({indication: res.locals.indication, prix: { $lte: res.locals.prixMin }})
    .toArray();
    res.json(complements);


   }catch(err){
    res.status(500).send();
   }
} 
const catalogueRouteur = express.Router(); 

catalogueRouteur.get('/complements/indication/:indication',recupererIndicationChemin,
    recupererPrixMinimum, renvoyerComplements);

 catalogueRouteur.get('/complements',
        recupererIndication, recupererPrixMinimum, renvoyerComplements);

    export {catalogueRouteur}