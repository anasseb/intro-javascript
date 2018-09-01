/*function direBonjour(prenom, nom){
    var message = "Bonjour " + prenom + " " + nom + "!";
    return message;
}

var prenom = prompt("Entrer votre prénom :");
var nom = prompt("Entrer votre nom");
var nomPrenom = console.log(direBonjour(prenom, nom));
//console.log(direBonjour()[0]);
//console.log(direBonjour().charAt(2));

for (var i = 0; i < direBonjour(prenom, nom).length; i++){
    console.log(direBonjour(prenom, nom)[i]);
}*/

//Exercice 1

//var mot = prompt("Saisir un mot :");

//Exercice 2
function compterNbVoyelles(mot){
    var nbVoyelle = 0;
    var nbConsonne = 0;
    for(var i=0; i < mot.length; i++){
        var lettre = mot[i].toLowerCase();

        switch (lettre){
            case 'a':
            nbVoyelle++;
            break;
            case 'e':
            nbVoyelle++;
            break;
            case 'i':
            nbVoyelle++;
            break;
            case 'o':
            nbVoyelle++;
            break;
            case 'u':
            nbVoyelle++;
            break;
            case 'w':
            nbVoyelle++;
            break;
            case 'y':
            nbVoyelle;
            break;
            case 'h':
            nbVoyelle++;
            break;
            case ' ':
            break;
            default:
            nbConsonne++;
        }
    }
    var message = nbVoyelle + " voyelle(s)" + " et " + nbConsonne + " consonnes(s)"
    return message;
}

function inverser(mot){
    var nbLettre = mot.length;
    var motInverser = "";
    
    for (var i = nbLettre-1; i >= 0; i--){
        motInverser = motInverser + mot[i];
    }
    return motInverser;
}



var mot = prompt("Saisir un mot :");

console.log("Le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("Il s'écrit en majuscule " + mot.toUpperCase());
console.log("Il contient " + compterNbVoyelles(mot));
console.log("Il s'écrit à l'envers " + inverser(mot));
