function extractText(string) {
    let result = [];
    let startIndex=string.indexOf('(');
    while (startIndex!==-1){
        let endIndex=string.indexOf(')',startIndex);
        if(endIndex==-1){
            break;
        }
        let snippet=string.substring(startIndex+1,endIndex);
        result.push(snippet);
        startIndex=string.indexOf('(',endIndex);
    }

    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');