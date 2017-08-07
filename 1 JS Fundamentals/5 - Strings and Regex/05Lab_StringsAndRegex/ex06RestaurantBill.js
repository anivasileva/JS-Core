function calc(array) {
    "use strict";
    let names = array.filter((e, i) => i % 2 == 0).join(', ');
    let sum = array.filter((e, i) => i % 2 == 1).map(Number).reduce((a,b)=>a+b);

    console.log(`You purchased ${names} for a total sum of ${sum}`);
}
calc(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);