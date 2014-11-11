'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
};
PalettoTestCase.prototype.testjuxtapo = function () {
    var plateau = new Paletto();
    plateau.initplateau();
    assert(plateau.getjuxtapo() == true)
};