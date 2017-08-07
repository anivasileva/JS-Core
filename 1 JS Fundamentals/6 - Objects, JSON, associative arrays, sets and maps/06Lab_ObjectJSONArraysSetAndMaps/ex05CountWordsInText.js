function countWords(input) {
    let text = input.join('\n');
    let words=text.split(/\W+/).filter(w=>w!='');
    let wordsCount={};
    for (let word of words) {
        wordsCount[word]?wordsCount[word]++:wordsCount[word]=1;
    }

    console.log(JSON.stringify(wordsCount));
}