let mathEnforcer = require('./mathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe("mathEnfircer",function () {
    it("should return correct result ",function () {
       expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.addFive('lq')).to.equal(undefined);
    });

    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.subtractTen('lq')).to.equal(undefined);
    });

    it("should return correct result ",function () {
        expect(mathEnforcer.addFive(-5)).to.equal(0);
    });

    it("should return correct result ",function () {
        expect(mathEnforcer.addFive(3.5)).to.be.closeTo(8.5,0.01);
    });

    it("should return correct result ",function () {
        expect(mathEnforcer.addFive(-3.5)).to.be.closeTo(1.5,0.01);
    });

    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.subtractTen(21)).to.equal(11);
    });


    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.subtractTen(-11)).to.equal(-21);
    });


    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.subtractTen(0.5)).to.be.closeTo(-9.5,0.01);
    });

    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.subtractTen(-0.5)).to.be.closeTo(-10.5,0.01);
    });

    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.sum('lq',0)).to.equal(undefined);
    });

    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.sum(0,'li')).to.equal(undefined);
    });

    it("should return incorrect result with non number parameter",function () {
        expect(mathEnforcer.sum('li','li')).to.equal(undefined);
    });

    it("should return correct sum",function () {
        expect(mathEnforcer.sum(1,2)).to.equal(3);
    });

    it("should return correct sum",function () {
        expect(mathEnforcer.sum(1,2)).to.equal(3);
    });

    it("should return correct sum",function () {
        expect(mathEnforcer.sum(-1,-2)).to.equal(-3);
    });

    it("should return correct sum",function () {
        expect(mathEnforcer.sum(0.1,2)).to.be.closeTo(2.1,0.01);
    });

    it("should return correct sum",function () {
        expect(mathEnforcer.sum(0.1,0.2)).to.be.closeTo(0.3,0.01);
    });

    it("should return correct sum",function () {
        expect(mathEnforcer.sum(-0.1,-2)).to.be.closeTo(-2.1,0.01);
    });

});