# TP-GPS

## À propos
Ce TP est une application permettant de calculer un itinéraire entre deux villes et d'afficher la météo de la ville de départ et d'arrivée. 

## Table des matières

- 🪧 [À propos](#à-propos)
- 📦 [Prérequis](#prérequis)
- 🚀 [Installation](#installation)
- 🛠️ [Utilisation](#utilisation)
- 🏗️ [Développé par](#développé-par)
- 📚 [Langages, Frameworks et API](#langages-,-frameworks-et-API)


## Prérequis

Afin de pouvoir exécuter l'application sur votre poste, vous devez d'aborder installer les dépendances suivantes :

-NodeJs18
  
## Installation

Pour installer le projet en local, selectionner le dossier dans lequel vous souhaitez installer le projet et lancez la commande suivante : 
git clone https://github.com/Vonkuro/TP-GPS.git

En premier lieu, il faut installer les paquets node dans le dossier "tp-gps-react"

Dans ce dossier, lancer la commande : 

- npm update

Puis rentrer dans le dossier "node-express" et lancer la commande : 

- npm update


Lancement du service :
Premièrement, ouvrez un terminal dans le dossier "node-express" et lancez la commande :

- npm start

Puis, dans un second terminal, ouvrez le dossier "tp-gps-react" et lancez la commande :

- npm start

L'url par défaut du service est : 

- http://localhost:3000/

## Utilisation

Pour utiliser cette application, il suffit à l'utilisateur de choisir une adresse de départ et une adresse d'arrivée. Une fois les adresses tapées dans les
champs prévus à cet effet, il suffit de valider en cliquant sur le bouton "envoyer".
L'itinéraire et la météo des villes correspondantes s'afficheront en plus des indications liées au trajet.

## Développé par

Gaëtan Tiberghien

Kevin Makhloufi

## Langages, Frameworks et API

Javascript

React

SQLite 3

Bootstrap 5

npm-autocomplete

Axios

API Carte : Leaflet, https://www.openstreetmap.org/copyright

API Météo : https://public.opendatasoft.com/api



