
import {mongodb }from 'mongodb';
import { nomsComplementsPour } from '../src/indicationsP.mjs';
const { MongoClient } = mongodb;
const client = new MongoClient(uri);

async function afficherNomsComplementsPour(indication, prixMin){
    try{
        const client = await new MongoClient('mongodb://localhost:3800/magasin');
        const db = await client.connect();
        const noms = nomsComplementsPour(indication,prixMin,db);
        console.log(JSON.stringify(noms));
        db.close();
    

    }catch(err){
        console.log(err);
        db.close();
    }
}