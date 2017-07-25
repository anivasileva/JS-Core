let Sumator = require('./sumator').Sumator;
let expect = require('chai').expect;

describe("Summator testing", function () {
    let mySummator;

    beforeEach(function () {
        mySummator = new Sumator();
    });


    describe("Sumator exists", function () {
        it("add exists", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        });

        it("constructor exists", function () {
            expect(Sumator.prototype.hasOwnProperty('constructor')).to.equal(true);
        });

        it("sumNums exists", function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        });

        it("removeByFilter exists", function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        });

        it("toString exists", function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
        });

    });

    describe("add check",function () {
        it("with no elements", function () {
            expect(mySummator.toString()).to.equal('(empty)');
        });

        it("with one element", function () {
            mySummator.add(1);
            expect(mySummator.toString()).to.equal('1');
        });

        it("with more elements", function () {
            mySummator.add(1);
            mySummator.add(2);
            mySummator.add(3);
            expect(mySummator.toString()).to.equal('1, 2, 3');
        });

        it("with more elements and a string", function () {
            mySummator.add(1);
            mySummator.add(2);
            mySummator.add(3);
            mySummator.add('str');
            expect(mySummator.toString()).to.equal('1, 2, 3, str');
        });

        it("with string", function () {
            mySummator.add('str');
            expect(mySummator.toString()).to.equal('str');
        });

        it("with strings", function () {
            mySummator.add('str');
            mySummator.add('ani');
            expect(mySummator.toString()).to.equal('str, ani');
        });
    });

    describe("sumNums check",function () {
        it("with no item", function () {
            expect(mySummator.sumNums().toString()).to.equal("0");
        });

        it("with one item", function () {
            mySummator.add(1);
            expect(mySummator.sumNums().toString()).to.equal("1");
        });

        it("with more items", function () {
            mySummator.add(1);
            mySummator.add(2);
            mySummator.add(3);
            expect(mySummator.sumNums().toString()).to.equal("6");
        });

        it("with more items and string", function () {
            mySummator.add(1);
            mySummator.add(2);
            mySummator.add(3);
            mySummator.add('annie');
            expect(mySummator.sumNums().toString()).to.equal("6");
        });

        it("with one item and string", function () {
            mySummator.add(1);
            mySummator.add('annie');
            expect(mySummator.sumNums().toString()).to.equal("1");
        });

        it("with string", function () {
            mySummator.add('annie');
            expect(mySummator.sumNums().toString()).to.equal("0");
        });

        it("with more than one string", function () {
            mySummator.add('annie');
            mySummator.add('a');
            expect(mySummator.sumNums().toString()).to.equal("0");
        });
    });

    describe("removeByFilter check",function () {
        it("correct filter", function () {
            mySummator.add(1);
            mySummator.add(2);
            mySummator.add(3);
            mySummator.add(4);
            mySummator.add(5);
            mySummator.removeByFilter(x => x % 2 === 0);
            expect(mySummator.toString()).to.equal("1, 3, 5");
        });

    });

    describe("Summator testing", function () {
        let mySummator;

        beforeEach(function () {
            mySummator = new Sumator();
        });


        describe("Sumator exists", function () {
            it("add exists", function () {
                expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
            });

            it("constructor exists", function () {
                expect(Sumator.prototype.hasOwnProperty('constructor')).to.equal(true);
            });

            it("sumNums exists", function () {
                expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
            });

            it("removeByFilter exists", function () {
                expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
            });

            it("toString exists", function () {
                expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
            });

        });

        describe("add check",function () {
            it("with no elements", function () {
                expect(mySummator.toString()).to.equal('(empty)');
            });

            it("with one element", function () {
                mySummator.add(1);
                expect(mySummator.toString()).to.equal('1');
            });

            it("with more elements", function () {
                mySummator.add(1);
                mySummator.add(2);
                mySummator.add(3);
                expect(mySummator.toString()).to.equal('1, 2, 3');
            });

            it("with more elements and a string", function () {
                mySummator.add(1);
                mySummator.add(2);
                mySummator.add(3);
                mySummator.add('str');
                expect(mySummator.toString()).to.equal('1, 2, 3, str');
            });

            it("with string", function () {
                mySummator.add('str');
                expect(mySummator.toString()).to.equal('str');
            });

            it("with strings", function () {
                mySummator.add('str');
                mySummator.add('ani');
                expect(mySummator.toString()).to.equal('str, ani');
            });
        });

        describe("sumNums check",function () {
            it("with no item", function () {
                expect(mySummator.sumNums().toString()).to.equal("0");
            });

            it("with one item", function () {
                mySummator.add(1);
                expect(mySummator.sumNums().toString()).to.equal("1");
            });

            it("with more items", function () {
                mySummator.add(1);
                mySummator.add(2);
                mySummator.add(3);
                expect(mySummator.sumNums().toString()).to.equal("6");
            });

            it("with more items and string", function () {
                mySummator.add(1);
                mySummator.add(2);
                mySummator.add(3);
                mySummator.add('annie');
                expect(mySummator.sumNums().toString()).to.equal("6");
            });

            it("with one item and string", function () {
                mySummator.add(1);
                mySummator.add('annie');
                expect(mySummator.sumNums().toString()).to.equal("1");
            });

            it("with string", function () {
                mySummator.add('annie');
                expect(mySummator.sumNums().toString()).to.equal("0");
            });

            it("with more than one string", function () {
                mySummator.add('annie');
                mySummator.add('a');
                expect(mySummator.sumNums().toString()).to.equal("0");
            });
        });

        describe("removeByFilter check",function () {
            it("correct filter", function () {
                mySummator.add(1);
                mySummator.add(2);
                mySummator.add(3);
                mySummator.add(4);
                mySummator.add(5);
                mySummator.removeByFilter(x => x % 2 === 0);
                expect(mySummator.toString()).to.equal("1, 3, 5");
            });

        });

    });
});