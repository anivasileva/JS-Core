function solve() {
    class Balloon {

        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;

        }
    }

    class PartyBalloon extends Balloon{

        constructor(color, gasWeight,ribbonColor,ribbonLegth) {
            super(color, gasWeight);
            this._ribbon={color:ribbonColor, length:ribbonLegth};
        }

        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{


        constructor(color, gasWeight, ribbonColor, ribbonLegth, text) {
            super(color, gasWeight, ribbonColor, ribbonLegth);
            this._text=text;
        }

        get text(){
            return this._text;
        }

    }

    return{
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon:BirthdayBalloon
    }
}

let test = new BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday!!!");
console.log(test);