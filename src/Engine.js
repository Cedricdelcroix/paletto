'use strict';

var Paletto = function () {

// private attributes and methods
var pligne;
    var whoplay = 1;
    var player1 = new  Array(36);
    var player2 = new  Array(36);

// public methods
    this.initplateau = function(){

        pligne = new Array(6);
        for(var ligne=0; ligne < pligne.length; ligne++){
            pligne[ligne] = new Array(6);
        }

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
    };
    this.getplateau = function(ligne,colonne){
        for(var iligne = 0; iligne < 6 ; iligne++){
            for ( var icolonne = 0; icolonne < 6 ; icolonne++){
                return pligne[ligne][colonne];
            }
        }
    };
    this.setplateau = function(ligne,colonne,val){
                pligne[ligne][colonne] = val;
        return this.getplateau(ligne,colonne);
    };
    this.getjuxtapoleft = function(irow,icolumn){
        if(icolumn>0){
            var caseleft = this.getplateau(irow,icolumn-1);
            if(this.getplateau(irow,icolumn)!= caseleft){
                return true;
            }else{
                return false;
            }
        }else{
            return true
        }
    };
    this.getjuxtaporight = function(irow,icolumn){
        if(icolumn<5){
            var caseright = this.getplateau(irow,icolumn+1);
            if(this.getplateau(irow,icolumn)!= caseright){
                return true;
            }else{
                return false;
            }
        }else{
            return true
        }
    };
    this.getjuxtapodown = function(irow,icolumn){
        if(irow>0){
            var casedown = this.getplateau(irow-1,icolumn);
            if(this.getplateau(irow,icolumn)!= casedown){
                return true;
            }else{
                return false;
            }
        }else{
            return true
        }
    };
    this.getjuxtapoup = function(irow,icolumn){
        if(irow<5){
            var caseup = this.getplateau(irow+1,icolumn);
            if(this.getplateau(irow,icolumn)!= caseup){
                return true;
            }else{
                return false;
            }
        }else{
            return true
        }
    };
    this.getjuxtapo = function(){
        for(var iligne = 0; iligne < 6 ; iligne++){
            for ( var icolonne = 0; icolonne < 6 ; icolonne++) {
            if(this.getjuxtapoleft(iligne,icolonne)== true && this.getjuxtaporight(iligne,icolonne)==true && this.getjuxtapodown(iligne,icolonne)==true && this.getjuxtapoup(iligne,icolonne)==true){
                return true;
            }else{
                return false;
            }
            }
        }
    };
    this.checkcoin = function(couleur){
        if(this.getplateau(0,0) == couleur || this.getplateau(0,5) == couleur || this.getplateau(5,0) == couleur || this.getplateau(5,5) == couleur ){
            return true;
        }else{
            return false;
        }
    };
    this.nextturn = function(){
        if(whoplay ==1){
            whoplay =2;
        }else{
            whoplay =1;
        }
    };
    this.removecase =function(ligne,colonne){
      if(whoplay ==1){
          player1.push(this.getplateau(ligne,colonne));
      }else{
          player2.push(this.getplateau(ligne,colonne));
      }
      this.setplateau(ligne,colonne,"empty");
    }
    this.getplayercountbillebycolor =function(player, couleur){
        var count = 0;
        if(player == 1){
            for(var i=0;i < player1.length;i++){
                if(player1[i]==couleur){
                    count++;
                }
            }
        }else{
            for(var i=0;i < player2.length;i++){
                if(player2[i]==couleur){
                    count++;
                }
            }
        }
        return count;
    }
    this.countnbbille =function(){
        var count =0;
        for(var iligne = 0; iligne < 6 ; iligne++){
            for ( var icolonne = 0; icolonne < 6 ; icolonne++) {
                if(this.getplateau(iligne,icolonne)!= "empty"){
                    count ++;
                }
            }
         }
        return count;
    }

    this.canremove =function(ligne,colonne){
        if(ligne>0 && ligne<6 && colonne>0 && colonne<6){
            if((this.countneightboor(ligne+1,colonne)+this.countneightboor(ligne-1,colonne)+this.countneightboor(ligne,colonne+1)+this.countneightboor(ligne,colonne-1))>=2){
                return true
            }else{
                return false
            }
        }else{
            if(ligne<6 && colonne>=0 &&colonne<6){
                if((this.countneightboor(ligne-1,colonne)+this.countneightboor(ligne,colonne+1)+this.countneightboor(ligne,colonne-1))>=2){
                    return true
                }else{
                    return false
                }
            }
            if(ligne>=0 && colonne>=0 &&colonne<6){
                if((this.countneightboor(ligne+1,colonne)+this.countneightboor(ligne,colonne+1)+this.countneightboor(ligne,colonne-1))>=2){
                    return true
                }else{
                    return false
                }
            }
            if(ligne<=0 && ligne>6 && colonne>6){
                if((this.countneightboor(ligne-1,colonne)+this.countneightboor(ligne,colonne)+this.countneightboor(ligne,colonne-1))>=2){
                    return true
                }else{
                    return false
                }
            }
            if(ligne<=0 && ligne>6 && colonne<=0){
                if((this.countneightboor(ligne-1,colonne)+this.countneightboor(ligne+1,colonne)+this.countneightboor(ligne,colonne+1))>=2){
                    return true
                }else{
                    return false
                }
            }
        }
    }
    this.countneightboor =function(ligne,colonne){
        var count=0;
        if(this.getplateau(ligne,colonne)!="vide"){
            count ++;
        }
        return count;
    }
};
