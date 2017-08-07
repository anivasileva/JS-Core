function repeat(text, check) {
    "use strict";

    if (text.indexOf(check) == -1) {
        return false;
    } else return true;
}

console.log(repeat('The quick brown fox…', 'The quick brown fox…'));