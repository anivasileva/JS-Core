let lookupChar = require('./lookupChar').lookupChar;
let expect = require('chai').expect;

describe("lookUpChar", function () {
    it("with a non string first param, should return undentified", function () {
        expect(lookupChar(13, 0)).to.equal(undefined);
    });

    it("with a non number second param, should return undentified", function () {
        expect(lookupChar('pesho','vasko')).to.equal(undefined);
    });

    it("with a floating point second param, should return undentified", function () {
        expect(lookupChar(13, 0.23)).to.equal(undefined);
    });

    it("with a floating point second param, should return undentified", function () {
        expect(lookupChar("pesho", 0.23)).to.equal(undefined);
    });

    it("with incorect first param, should return Incorect index", function () {
        expect(lookupChar('gosho', 13)).to.equal('Incorrect index');
    });

    it("with incorect first param, should return Incorect index", function () {
        expect(lookupChar('gosho', 5)).to.equal('Incorrect index');
    });

    it("with negative second parameter, should return Incorect index", function () {
        expect(lookupChar('gosho', -1)).to.equal('Incorrect index');
    });

    it("should return correct values with correct parameters",function () {
        expect(lookupChar("pesho",0)).to.equal('p');
    });

    it("should return correct values with correct parameters",function () {
        expect(lookupChar("pesho",3)).to.equal('h');
    });


});