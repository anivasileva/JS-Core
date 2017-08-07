function replacer(args) {
    let regex = /([^=&?]+)=([^=&?]+)/g;
    let whitespaceRegex = /(\+|%20)+/g;


    for (let lineIndex in args) {
        let currentLine = args[lineIndex];
        let lineObject = {};
        let match = regex.exec(currentLine);
        //ako nameri match vrushta masiv , na 0 poziciq ima celiq match, kato imame grypi i na vseki indeks vrushta grypata na koqto e matchnata kogato ne nameri nishto vrushta null

        while (match) { //ako nameri nqkakuv masiv
            let key = match[1].replace(whitespaceRegex, ' ').trim();
            let value = match[2].replace(whitespaceRegex, ' ').trim();

            if (!lineObject[key]) {
                lineObject[key] = [];
            }
            lineObject[key].push(value);
            match = regex.exec(currentLine);
        }

        let output = '';
        for (let obj in lineObject) {
            output += obj + '=[' + lineObject[obj].join(', ') + ']';
        }
        console.log(output);
    }
}

replacer(['login=student&password=student'])