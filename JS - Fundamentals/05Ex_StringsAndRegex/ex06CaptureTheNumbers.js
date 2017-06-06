function capture(text) {
    let regex = /[0-9]+/g;
    let result = [], match;
    for (let obj of text) {
        while (match = regex.exec(obj)) {
            result.push(match);
        }
    }

    console.log(result.join(' '));

}


function extractAllDigigs(array) {
    let regex = /\d+/g;

    let result = [];
    for (let obj of array) {
        let match = obj.match(regex);

        if (match != null) {
            for (let obj1 of match) {
                result.push(obj1);
            }
        }
    }

    console.log(result.join(' '));
}
capture(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);