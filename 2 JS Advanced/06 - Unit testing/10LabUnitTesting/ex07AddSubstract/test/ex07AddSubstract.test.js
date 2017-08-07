let createCalculator=require('../ex07AddSubtract').createCalculator;
let expect = require('chai').expect;

describe("Calculator maker",function () {
    let calc;
    beforeEach(function () {
        calc=createCalculator();
    });

    it("should return an object",function () {
        expect(typeof calc).to.equal('object');
    });

    it("should have 0 value when created",function () {
        expect(calc.get()).to.equal(0);
    });


    it("should add ",function () {
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.equal(8);
    });

    it("should subtract ",function () {
        calc.add(-3);
        calc.add(-5);
        expect(calc.get()).to.equal(-8);
    });

    it("should work with fractions",function () {
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01,0.001);
    });

    it("should work with negative nubers",function () {
        calc.add(-4);
        calc.subtract(-3);
        expect(calc.get()).to.equal(-1);
    });

    it("should not add NaNs",function () {
        calc.add('pesho');

        expect(calc.get()).to.be.NaN;
    });

    it("should not subtract NaNs",function () {
        calc.subtract('pesho');
        expect(calc.get()).to.be.NaN;
    })

    it("should work with numbers as strings",function () {
        calc.add('7');
        expect(calc.get()).to.equal(7);
    })


});
