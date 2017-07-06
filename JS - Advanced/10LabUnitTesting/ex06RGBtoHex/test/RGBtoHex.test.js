let rgbToHexColor=require('../RGBtoHex').rgbToHexColor;
let expect = require('chai').expect;


describe("RGB to hexColor",function () {
    it("should return #FF9EAA for (255, 158, 170)",function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });

    it("should pad values with zeroes",function () {
        expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E');
    });

    it("should work at lower limit",function () {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it("should pad values with zeroes",function () {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it("should return undefined for negative values",function () {
        expect(rgbToHexColor(-1,-1,-1)).to.equal(undefined);
    });

    it("should return undefined for vallues grater than 255",function () {
        expect(rgbToHexColor(256,256,256)).to.equal(undefined);
    });

    it("should return undefined for vallues grater than 255",function () {
        expect(rgbToHexColor(15,15,256)).to.equal(undefined);
    });


    it("should return undefined for fractions",function () {
        expect(rgbToHexColor(3.14,2.71,5)).to.equal(undefined);
    });

    it("should return undefined for fractions",function () {
        expect(rgbToHexColor('pesho',[],{name: 'gosho'})).to.equal(undefined);
    });
});