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
PalettoTestCase.prototype.testStory5 = function(){
    var plateau = new Paletto();
    plateau.initplateau();
    assert(plateau.canremove(0,0) ==true);
};
