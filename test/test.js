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
    plateau.removecase();
    assert(plateau.getplateau(5,0)== "empty");
    assert(plateau.getplayercountbillebycolor(1,"jaune"));
    assert(plateau.countnbbille()== 35);
};
