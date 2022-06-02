import React from 'react';
import Experience from './Experience';

function Experiences() {
    return (
        <div className="experiences mb-5 ">
             <h2 className="text-center ml-2 font-bold mt-5 bg-blue-500 text-white underline text-xl mb-5">Expériences professionnelles</h2>
             
             <Experience
                title="Developpeur FULLSTACK"
                entreprise="INCUBATEUR-INSY2S"
                lieu="LOMME"
                date="01/2022 - 03/2022"
                description_1="Création d'un projet e-commerce"
                description_2="Découverte et analyse du projet"
                description_3="Méthodes agiles, Maquettage,"
                description_4="Montée en compétences sur React et le NoSql"
                description_5="Utilisation de Tailwind, Mongo DB, Express..."
                description_6="Création du Front et back-end du mot de passe oublié avec envoie de mail"
                description_7="Création du mode de transport avec l'ajout du prix sur la commande en fonction de la livraison selectionnée"
                description_8="Création du FRONT-END du panel admin"
                description_9="Utilisation de GIT et GITLAB"
                description_10="Utilisation des outils de ticketing"
                description_11="Utilisation de Trello"

                />
             <Experience
                title="Developpeur web Symfony 5"
                entreprise="Thinkgaming.fr"
                lieu="Isbergues"
                date="02/2021 / 05/2021"
                description_1="Création du site e-commerce"
                description_2="Découverte et analyse du projet"
                description_3="Méthodes agiles, Maquettage,"
                description_4="Conception Mcd Mld, programmation php framework Symfony5"
                description_5="Utilisation de Bootstrape et de MySql"
                description_6="Utilisation de GIT et GITHUB"
                description_7="Utilisation de Bootstrape et de MySql"
                description_8="Utilisation de Trello"
                description_9="Création du front-end et du back-end du  compte client, avec le suivi de commande, mot de passe oublié, envoie de mail "
                description_10="Création front-end et back-end du panel admin, des statistiques de vente, crud produit, crud categorie, crud a-propos"
                />

            
        </div>
    )
}

export default Experiences
