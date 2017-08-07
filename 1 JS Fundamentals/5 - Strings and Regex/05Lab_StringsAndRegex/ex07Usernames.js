function usernames(arr){
    "use strict";

    let result=arr.map(s=>s.split('@'));
    console.log(result.map(([user, domain]) => user + '.' + domain.split('.').map(s => s[0]).join('')).join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);