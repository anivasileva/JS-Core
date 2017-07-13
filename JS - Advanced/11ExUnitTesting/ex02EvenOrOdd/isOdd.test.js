let isOddOrEven = require('./isOdd').isOddOrEven;
let expect = require('chai').expect;

describe("isOddOrEven", function () {
    it("should return undefinde with a number parameter", function () {
        expect(isOddOrEven(13)).to.equal(undefined);
    });

    it("should return undefined with an object parameter", function () {
        expect(isOddOrEven({name:'pesho'})).to.equal(undefined);
    });

    it("should return correct result with an even string length",function () {
        expect(isOddOrEven("roar")).to.equal('even');
    });

    it("should return correct with an odd string length",function () {
        expect(isOddOrEven("pesho")).to.equal('odd');
    })

});