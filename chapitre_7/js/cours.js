/*function MonObjet(){
    
}*/

/*var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

//var monObj = new MonObjet();

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);*/

var perso ={
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,    
    decrire: function(){
        var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force et " + this.xp + " point d'experience";
        return description;
    }
};

/*var perso2 ={
    nom: "Clacius",
    sante: 130,
    force: 30,
    xp: 0,
    decrire: function(){
        var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force et " + this.xp + " point d'experience";
        return description;
    }
}

console.log(perso.decrire());

//Aurora est blessé par une fleche
perso.sante = perso.sante - 20;

//Aurora trouve un bracelet de force
perso.force = perso.force + 10;

//Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());
var perso2 = Object.create(perso);
perso2.force = perso2.force + 100;
console.log(perso2.force);*/

var Personnage = {
    init: function (nom, sante, force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    },
    
    decrire: function(){
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + 
            " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.init("Aurora, 150, 25");

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());