function toUpperCase(word) {
    let strUpper = word.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    function extractWords() { return strUpper.split(/\W+/); }

}