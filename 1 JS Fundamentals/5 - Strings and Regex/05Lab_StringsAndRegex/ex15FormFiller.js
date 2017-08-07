function replace(name, email, number, arr) {
    let regexName = /<![a-zA-Z]+!>/g;
    let regexemail = /<@[a-zA-Z]+@>/g;
    let regexNumber = /<\+[a-zA-Z]+\+>/g;
    for (let a of arr) {
        a = a.replace(regexName, name);
        a = a.replace(regexemail, email);
        a = a.replace(regexNumber, number);
        console.log(a);
    }
}

replace('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);