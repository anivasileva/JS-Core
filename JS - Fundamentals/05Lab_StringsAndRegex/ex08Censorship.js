function censor(text, words) {
    for (let curr of words) {
        let replaced = '-'.repeat(curr.length);
        while (text.indexOf(curr) > -1) {
            text = text.replace(curr, replaced);
        }
    }

    return text;
}

console.log(censor('roses are red, violets are blue', [', violets are', 'red']));