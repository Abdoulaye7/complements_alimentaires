import {mongodb }from 'mongodb';
import { nomsComplementsPour } from '../src/indications.mjs';
const { MongoClient } = mongodb;
const client = new MongoClient(uri);

function afficherNomsComplementsPour(indication, prixMin) {
    const client = new MongoClient('mongodb://localhost:3800/magasin');
    client.connect((err,db)=>{
        if(err){
            console.log(err);
            db.close();
        }else{
            nomsComplementsPour(indication,prixMin,db,(err,noms)=>{
                if(err){
                    console.log(err);
                    db.close();
                }else{
                    console.log(JSON.stringify(noms));
                }

            });
        }

    });
}