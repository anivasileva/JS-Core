function solve(dataRows) {
    let flavorsObj = {};
    let bottlesObj = {};
    for (let dataRow of dataRows) {
        let [juiceName, quantity] = dataRow.split(' => ');
        quantity = Number(quantity);
        if (!flavorsObj.hasOwnProperty(juiceName)) {
            flavorsObj[juiceName] = quantity;
        } else {
            flavorsObj[juiceName] += quantity;
        }
         quantity = flavorsObj[juiceName];
        if (quantity >= 1000) {
            let bottlesCount = Math.floor(quantity / 1000);
            bottlesObj[juiceName] = bottlesCount;
        }
    }


    for (let name in bottlesObj) {
        console.log(`${name} => ${bottlesObj[name]}`);
    }
}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'

]);


