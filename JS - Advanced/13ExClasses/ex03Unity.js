class Rat{
    constructor(name){
        this.name=name;
        this.rats=[];
    }

    unite(otherRat){
        if(otherRat instanceof Rat)
        this.rats.push(otherRat);
    }

    getRats(){
        return this.rats;
    }

    toString(){
      let string=this.name;
      string+='\n';
        for (let rat of this.rats) {
            string+='##'+rat.name + '\n';
        }
        return string;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
