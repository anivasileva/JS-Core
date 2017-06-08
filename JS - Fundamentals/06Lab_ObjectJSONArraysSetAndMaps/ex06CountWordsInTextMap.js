function countWords(input) {
    let result = new Map();
    let text = input.join('\n').toLowerCase();
    let words = text.split(/\W+/).filter(w => w != '');
    let count = 1;
    for (let word of words) {
        if (result.has(word)) {
            count=result.get(word)+1;
            result.set(word,count);
        }else
            result.set(word,1);

    }
    let arrOfRes= Array.from(result.keys()).sort();
    arrOfRes.forEach(w=>
        console.log(`'${w}' -> ${result.get(w)} times`));

}
countWords(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);