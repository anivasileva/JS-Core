function count(text, word) {
    let pat = '\\b' + word + '\\b';
    let count = 0;
    let regex = new RegExp(pat, 'ig');
    // let match=text.match(regex);  // vrushta masiv ot vdichki machove
    // console.log(match);
    while (match = regex.exec(text)) {   //  vrusta edno po edno matcha , indeksa,grupi ako ima ,celiq tekst
        count++;

    }
    console.log(count);
}


count('The waterfall was so high, that the child couldn’t see its peak.', 'the');