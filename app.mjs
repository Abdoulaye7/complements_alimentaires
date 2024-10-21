import {express} from 'express';
import { catalogueRouteur } from './routes/complementpour.mjs';

const app = express();

catalogueRouteur(app);

app.listen(3000,()=>{
    console.log('serveur web démaré sur le port 3000')
})