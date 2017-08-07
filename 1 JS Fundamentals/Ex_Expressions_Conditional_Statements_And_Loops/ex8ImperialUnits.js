function convert(inches) {
let feet=Number.parseInt(inches/12);
let inch=inches%12;
console.log(`${feet}'-${inch}"`);
}

convert(11);