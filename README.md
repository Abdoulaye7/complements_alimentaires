# compléments alimentaires
Compléments Alimentaires
Description

Ce projet est une application web pour la gestion des compléments alimentaires. Elle permet de rechercher, ajouter, mettre à jour et supprimer des compléments alimentaires. L'application utilise Node.js pour le backend, Express.js comme framework web, et MongoDB pour la base de données.
Prérequis

Avant de commencer, assurez-vous d'avoir les logiciels suivants installés sur votre machine :

    Node.js (version 12.x ou supérieure)
    MongoDB (version 4.x ou supérieure)
    Git (facultatif, pour cloner le dépôt)

Installation
1. Cloner le dépôt

Si vous utilisez Git, clonez le dépôt en utilisant la commande suivante :

bash

git clone https://github.com/Abdoulaye7/complements_alimentaires.git

Sinon, vous pouvez télécharger le code source en tant que fichier ZIP depuis GitHub et l'extraire sur votre machine.
2. Installer les dépendances

Naviguez dans le répertoire du projet et installez les dépendances en utilisant npm :

bash

cd complements-alimentaires
npm install

3. Configurer la base de données

Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine. Par défaut, l'application se connecte à une base de données MongoDB locale. Vous pouvez modifier l'URI de connexion dans votre code si nécessaire.
4. Démarrer l'application

Pour démarrer le serveur Express.js, exécutez la commande suivante :

bash

npm start

Par défaut, le serveur démarre sur le port 3000. Vous pouvez accéder à l'application en ouvrant votre navigateur et en naviguant vers http://localhost:3000.
Structure du Projet

    
        
        routes/ : Définition des routes de l'application
        indications.mjs : Module pour accéder aux compléments alimentaires par indication et prix
        indicationsP.mjs : Module pour accéder aux compléments alimentaires en utilisant des promesses
   
    app.mjs : Point d'entrée principal de l'application
    package.json : Fichier de configuration npm

Utilisation
Endpoints

L'application expose plusieurs endpoints pour interagir avec les compléments alimentaires :

    GET /catalogue/complements?prixMin=prix&indication=indication : Récupère les compléments alimentaires pour une indication donnée et un prix minimum
    GET /catalogue/complements/indication/indication?prixMin=prix : Récupère les compléments alimentaires pour une indication donnée dans le chemin de l'URL et un prix minimum

Exemples de Requête

Récupérer des compléments alimentaires par indication et prix minimum :

bash

curl "http://localhost:3000/catalogue/complements?prixMin=10&indication=energie"

Récupérer des compléments alimentaires par indication dans le chemin de l'URL et prix minimum :

bash

curl "http://localhost:3000/catalogue/complements/indication/energie?prixMin=10"


