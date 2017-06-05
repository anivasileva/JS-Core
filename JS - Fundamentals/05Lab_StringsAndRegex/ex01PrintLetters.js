function print(str){
    "use strict";
    for (let s in str) {
        console.log(`str[${s}] -> ${str[s]}`);
    }
}

print('SoftUni');