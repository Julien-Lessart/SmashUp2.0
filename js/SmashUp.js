/*
    Générateur de decks SmashUp pour x joueurs
    Site Web
    Julien LESSART
    Version 1.0
    16/03/20
*/


// Déclarations des variables et constante
let nbFactions = 0; // Nb de factions dans le jeu
let nbJoueurs = $("#nbJoueurs").data("value"); // Pour le nombre de joueurs
let arrayFactions = []; // Tableau contenant les factions
let verif = false; // Pour verifier si des decks ont déjà était charger 


$(document).ready(function() { // Pour charger le Jquery au chargement de la page


    $("#btnGen").on("click", function() {
        // Quand on clique sur le bouton
        // Aucun prm
        // Aucun valeur de retour

        // Pour recharger la page
        if (verif === false) {
            nbDeJoueurs();
            Melanger();
            verif = true;
        } else {
            location.reload();
        }

    });
});


function nbDeJoueurs() {
    // On cree le nombre de joueurs et le tableau de factions
    // Aucun prm
    // Aucune valeur de retour

    // Pour le nombre de joueur
    nbJoueurs = parseInt($("#nbJoueurs").val());

    // Pour stocker les informations des cases
    arrayFactions.push({ img: "imgAliens", selec: 0, nom: "Aliens" });
    arrayFactions.push({ img: "imgDinosaurs", selec: 0, nom: "Dinosaures" });
    arrayFactions.push({ img: "imgNinjas", selec: 0, nom: "Ninjas" });
    arrayFactions.push({ img: "imgPirates", selec: 0, nom: "Pirates" });
    arrayFactions.push({ img: "imgRobots", selec: 0, nom: "Robots" });
    arrayFactions.push({ img: "imgTricksters", selec: 0, nom: "Petit Peuple" });
    arrayFactions.push({ img: "imgWizards", selec: 0, nom: "Magiciens" });
    arrayFactions.push({ img: "imgZombies", selec: 0, nom: "Zombies" });
    arrayFactions.push({ img: "imgBearCavalry", selec: 0, nom: "Cavalerie ours" });
    arrayFactions.push({ img: "imgGhost", selec: 0, nom: "Fantômes" });
    arrayFactions.push({ img: "imgKillerPlants", selec: 0, nom: "Plantes carnivores" });
    arrayFactions.push({ img: "imgSteampunks", selec: 0, nom: "Steampunks" });
    arrayFactions.push({ img: "imgElderThings", selec: 0, nom: "Grands Anciens" });
    arrayFactions.push({ img: "imgInnsmouth", selec: 0, nom: "Innsmouth" });
    arrayFactions.push({ img: "imgMinionsOfCthulhu", selec: 0, nom: "Serviteurs de Cthulhu" });
    arrayFactions.push({ img: "imgMiskatonicUniversity", selec: 0, nom: "Université Miskatonic" });
    arrayFactions.push({ img: "imgCyborgApes", selec: 0, nom: "Singes cyborgs" });
    arrayFactions.push({ img: "imgShapeshifters", selec: 0, nom: "Métamorphes" });
    arrayFactions.push({ img: "imgSuperSpies", selec: 0, nom: "Super espions" });
    arrayFactions.push({ img: "imgTimeTravelers", selec: 0, nom: "Voyageurs du temps" });
    arrayFactions.push({ img: "imgGiantAnts", selec: 0, nom: "Fourmis géantes" });
    arrayFactions.push({ img: "imgMadScientists", selec: 0, nom: "Scientifiques fous" });
    arrayFactions.push({ img: "imgVampires", selec: 0, nom: "Vampires" });
    arrayFactions.push({ img: "imgWerewolves", selec: 0, nom: "Loup-garous" });
    arrayFactions.push({ img: "imgFairies", selec: 0, nom: "Fées" });
    arrayFactions.push({ img: "imgKittyCats", selec: 0, nom: "Chatons mignons" });
    arrayFactions.push({ img: "imgMythicHorses", selec: 0, nom: "Chevaux mythiques" });
    arrayFactions.push({ img: "imgPrincesses", selec: 0, nom: "Princesses" });
    arrayFactions.push({ img: "imgClerics", selec: 0, nom: "Prêtres" });
    arrayFactions.push({ img: "imgDwarves", selec: 0, nom: "Nains" });
    arrayFactions.push({ img: "imgElves", selec: 0, nom: "Elfes" });
    arrayFactions.push({ img: "imgHalflings", selec: 0, nom: "Halfelins" });
    arrayFactions.push({ img: "imgMages", selec: 0, nom: "Magiciens" });
    arrayFactions.push({ img: "imgOrcs", selec: 0, nom: "Orques" });
    arrayFactions.push({ img: "imgThieves", selec: 0, nom: "Voleurs" });
    arrayFactions.push({ img: "imgWarriors", selec: 0, nom: "Guerriers" });
    arrayFactions.push({ img: "imgDragons", selec: 0, nom: "Dragons" });
    arrayFactions.push({ img: "imgMythicGreeks", selec: 0, nom: "Mythologies Grecques" });
    arrayFactions.push({ img: "imgSharks", selec: 0, nom: "Requins" });
    arrayFactions.push({ img: "imgSuperheroes", selec: 0, nom: "Super-Héros" });
    arrayFactions.push({ img: "imgTornados", selec: 0, nom: "Tornades" });
    arrayFactions.push({ img: "imgAstroknights", selec: 0, nom: "Chevaliers des Etoiles" });
    arrayFactions.push({ img: "imgChangerbots", selec: 0, nom: "Changeformers" });
    arrayFactions.push({ img: "imgIgnobles", selec: 0, nom: "Squatteurs de Trône" });
    arrayFactions.push({ img: "imgStarRoamers", selec: 0, nom: "Voyageurs de l'espace" });
    arrayFactions.push({ img: "imgExplorers", selec: 0, nom: "Explorateurs" });
    arrayFactions.push({ img: "imgGrannies", selec: 0, nom: "Grand mères" });
    arrayFactions.push({ img: "imgRockStars", selec: 0, nom: "Grouppies" });
    arrayFactions.push({ img: "imgTeddyBears", selec: 0, nom: "Nounours" });
    arrayFactions.push({ img: "imgIttyCritters", selec: 0, nom: "Itty Critters" });
    arrayFactions.push({ img: "imgKaiju", selec: 0, nom: "Kaiju" });
    arrayFactions.push({ img: "imgMagicalGirls", selec: 0, nom: "Magical Girls" });
    arrayFactions.push({ img: "imgMegaTroopers", selec: 0, nom: "Mega Troopers" });
    /*arrayFactions.push({ img: "imgSheep", selec: 0, nom: "Sheep" });
    arrayFactions.push({ img: "imgDiscoDancers", selec: 0, nom: "Disco Dancers" });
    arrayFactions.push({ img: "imgStarKungFuFighters", selec: 0, nom: "Star Kung Fu Fighters" });
    arrayFactions.push({ img: "imgTruckers", selec: 0, nom: "Truckers" });
    arrayFactions.push({ img: "imgVigilantes", selec: 0, nom: "Vigilantes" });
    arrayFactions.push({ img: "imgGeeks", selec: 0, nom: "Geeks" });
    arrayFactions.push({ img: "imgSmashUpAllStars", selec: 0, nom: "Smash Up All Stars" });
    arrayFactions.push({ img: "imgAncientEgyptians", selec: 0, nom: "Ancient Egyptians" });
    arrayFactions.push({ img: "imgCowboys", selec: 0, nom: "Cowboys" });
    arrayFactions.push({ img: "imgSamurai", selec: 0, nom: "Samurai" });
    arrayFactions.push({ img: "imgVikings", selec: 0, nom: "Vikings" });
    arrayFactions.push({ img: "imgLuchadors", selec: 0, nom: "Luchadors" });
    arrayFactions.push({ img: "imgMounties", selec: 0, nom: "Mounties" });
    arrayFactions.push({ img: "imgMusketeers", selec: 0, nom: "Musketeers" });
    arrayFactions.push({ img: "imgSumoWrestlerskers", selec: 0, nom: "Sumo Wrestlerskers" });
    arrayFactions.push({ img: "imgPenguins", selec: 0, nom: "Penguins" });
    arrayFactions.push({ img: "imgAnansiTales", selec: 0, nom: "Anansi Tales" });
    arrayFactions.push({ img: "imgAncientIncas", selec: 0, nom: "Ancient Incas" });
    arrayFactions.push({ img: "imgGrimmsFairyTales", selec: 0, nom: "Grimms’ Fairy Tales" });
    arrayFactions.push({ img: "imgPolynesianVoyagers", selec: 0, nom: "Polynesian Voyagers" });
    arrayFactions.push({ img: "imgRussianFairyTales", selec: 0, nom: "Russian Fairy Tales" });*/
}

function Melanger() {
    // Permet de  choisir un nombre random et de créer son deck avec
    // Aucun prm
    // Aucune valeur de retour

    nbFactions = arrayFactions.length;
    let random = getRandomInt(nbFactions);
    for (let i = 1; i <= nbJoueurs; i++) {
        creerTableau(i);
        while (arrayFactions[random].selec !== 0) {
            random = getRandomInt(nbFactions);
        }
        if (arrayFactions[random].selec === 0) {
            arrayFactions[random].selec = 1;
            $("#NomFactions" + i.toString() + "1").html(arrayFactions[random].nom);
            $("#ImgFactions" + i.toString() + "1").addClass(arrayFactions[random].img);
        }
        random = getRandomInt(nbFactions);
        while (arrayFactions[random].selec !== 0) {
            random = getRandomInt(nbFactions);
        }
        if (arrayFactions[random].selec === 0) {
            arrayFactions[random].selec = 1;
            $("#NomFactions" + i.toString() + "2").html(arrayFactions[random].nom);
            $("#ImgFactions" + i.toString() + "2").addClass(arrayFactions[random].img);
        }

    }
}

function creerTableau(prmI) {
    // Permet de creer les tableaux pour les decks
    // Un prm : prmI valeur de i dans Melanger
    // Aucune valeur de retour

    $("#conteneur").append('<table id = "TableauJ' + prmI + '" ></table>'); // Pour ajouter un tableau par joueur

    //$("#TableauJ" + prmI).append("<tr> <td>" + nomFactions1 + "</td> <td>" + nomFactions2 + "</td> </tr>");
    $("#TableauJ" + prmI).append('<tr> <td id = "NomFactions' + prmI + '1" ></td> <td id = "NomFactions' + prmI + '2"></td> </tr>');
    $("#TableauJ" + prmI).append('<tr> <td id = "ImgFactions' + prmI + '1" ></td> <td id = "ImgFactions' + prmI + '2"></td> </tr>');
}

function getRandomInt(max) {
    // Renvoie un entier random entre 0 et le prm - 1
    // Un prm : max entier a randomizer
    // Une valeur de retour : La partie entière de random * la partie entière du prm
    return Math.floor(Math.random() * Math.floor(max));
}