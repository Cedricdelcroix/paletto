'use strict';

var Paletto = function () {

// private attributes and methods
var pligne = new Array(6);
    for(var ligne=0; ligne < pligne.length; ligne++){
        pligne[ligne] = new Array(6);
    }
// public methods
    this.initplateau = function(){
        pligne[0][0] = "noir";
        pligne[1][0] = "jaune";
        pligne[2][0] = "bleu";
        pligne[3][0] = "rouge";
        pligne[4][0] = "blanc";
        pligne[5][0] = "jaune";
        pligne[0][1] = "vert";
        pligne[1][1] = "blanc";
        pligne[2][1] = "jaune";
        pligne[3][1] = "noir";
        pligne[4][1] = "vert";
        pligne[5][1] = "bleu";
        pligne[0][2] = "blanc";
        pligne[1][2] = "vert";
        pligne[2][2] = "bleu";
        pligne[3][2] = "rouge";
        pligne[4][2] = "jaune";
        pligne[5][2] = "noir";
        pligne[0][3] = "bleu";
        pligne[1][3] = "rouge";
        pligne[2][3] = "blanc";
        pligne[3][3] = "vert";
        pligne[4][3] = "noir";
        pligne[5][3] = "rouge";
        pligne[0][4] = "rouge";
        pligne[1][4] = "jaune";
        pligne[2][4] = "noir";
        pligne[3][4] = "bleu";
        pligne[4][4] = "jaune";
        pligne[5][4] = "vert";
        pligne[0][5] = "blanc";
        pligne[1][5] = "bleu";
        pligne[2][5] = "rouge";
        pligne[3][5] = "blanc";
        pligne[4][5] = "vert";
        pligne[5][5] = "noir";
    }
    this.getplateau = function(ligne,colonne){
        for(var iligne = 0; iligne < ligne.length ; iligne++){
            for ( var icolonne = 0; icolonne < colonne.length ; icolonne++){
                return ligne[iligne][icolonne];
            }
        }
    }
};
