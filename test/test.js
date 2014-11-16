'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
};
PalettoTestCase.prototype.testjuxtapo = function () {
    var plateau = new Paletto();
    plateau.initplateau();
    assert(plateau.getjuxtapo() == true)
};
PalettoTestCase.prototype.testchoseplayer1 = function () {
    var plateau = new Paletto();
    plateau.initplateau();
    var choseplayer1 = "jaune"
    assert(plateau.checkcoin(choseplayer1)==true);
};
PalettoTestCase.prototype.testStory3 = function () {
    var plateau = new Paletto();
    plateau.initplateau();
    plateau.removecase(5,0);
    assert(plateau.getplateau(5,0)== "empty");
    assert(plateau.getplayercountbillebycolor(1,"jaune")==1);
    assert(plateau.countnbbille()== 35);
};
PalettoTestCase.prototype.testStory4 = function () {
    var plateau = new Paletto();
    plateau.initplateau();
    plateau.removecase(5,0);
    plateau.nextturn();
    plateau.removecase(0,0);
    plateau.removecase(5,5);
    assert(plateau.getplayercountbillebycolor(2,"noir")==2);
};
//PalettoTestCase.prototype.testStory5 = function(){
//    var plateau = new Paletto();
//    plateau.initplateau();
//    assert(plateau.canremove(0,0) ==true);
//};
PalettoTestCase.prototype.testStory6= function(){
    var plateau = new Paletto();
    plateau.initplateau();
    plateau.removecase(0,0);
    plateau.removecase(5,5);
    //joueur 2
    plateau.nextturn();
    plateau.removecase(0,1);
    plateau.removecase(5,4);
    plateau.removecase(5,4);
    //joueur 1
    plateau.nextturn();
    plateau.removecase(1,0);
    plateau.removecase(5,0);
    //joueur 2
    plateau.nextturn();
    plateau.removecase(2,0);
    //joueur 1
    plateau.nextturn()
    plateau.removecase(4,0);
    plateau.removecase(3,5);
    plateau.removecase(0,5);
    plateau.removecase(0,2);
    //joueur 2
    plateau.nextturn();
    plateau.removecase(0,4);
    plateau.removecase(2,5);
    plateau.removecase(5,3);
    plateau.removecase(3,0);
    //joueur 1
    plateau.nextturn();
    plateau.removecase(2,2);
    plateau.removecase(1,5);
    plateau.removecase(3,1);
    //joueur 2
    plateau.nextturn()
    plateau.removecase(2,1);
    plateau.removecase(1,4);
    plateau.removecase(4,4);
    //joueur 1
    plateau.nextturn()
    plateau.removecase(3,1);
    plateau.removecase(5,2);
    plateau.removecase(4,3);
    plateau.removecase(2,4);
    assert(plateau.checkwin(1,"noir")==1);

}
//PalettoTestCase.prototype.testStory7= function(){
//    var plateau = new Paletto();
//    plateau.initplateau();
//    plateau.removecase(0,0);
//    plateau.removecase(5,5);
//    //joueur 2
//    plateau.nextturn();
//    plateau.removecase(1,0);
//    plateau.removecase(5,0);
//    //joueur 1
//    plateau.nextturn();
//    plateau.removecase(4,0);
//    plateau.removecase(5,5);
//    //joueur 2
//    plateau.nextturn();
//    plateau.removecase(2,0);
//    //joueur 1
//    plateau.nextturn()
//    plateau.removecase(4,0);
//    plateau.removecase(3,5);
//    plateau.removecase(0,5);
//    plateau.removecase(0,2);
//    //joueur 2
//    plateau.nextturn();
//    plateau.removecase(0,4);
//    plateau.removecase(2,5);
//    plateau.removecase(5,3);
//    plateau.removecase(3,0);
//    //joueur 1
//    plateau.nextturn();
//    plateau.removecase(2,2);
//    plateau.removecase(1,5);
//    plateau.removecase(3,1);
//    //joueur 2
//    plateau.nextturn()
//    plateau.removecase(2,1);
//    plateau.removecase(1,4);
//    plateau.removecase(4,4);
//    //joueur 1
//    plateau.nextturn()
//    plateau.removecase(3,1);
//    plateau.removecase(5,2);
//    plateau.removecase(4,3);
//    plateau.removecase(2,4);
//    assert(plateau.checkwin(1,"noir")==1);
//
//}