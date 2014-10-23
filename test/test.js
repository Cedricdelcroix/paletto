'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
};
PalettoTestCase.prototype.test1 = function () {
    var eng = new Engine();
     assert(eng.mafonction() == true);
};