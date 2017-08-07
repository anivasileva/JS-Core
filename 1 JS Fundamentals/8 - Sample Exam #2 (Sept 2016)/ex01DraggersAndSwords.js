function cacl(string) {
    let html = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n';
    let numbers = string.map(Number);
    for (let num of numbers) {
        if (num >= 11) {
            let aplicarion = '';
            let type = '';
            num = Math.floor(num);
            if (num % 10 == 1 || num % 10 == 6) {
                aplicarion = 'blade';
            } else if (num % 10 == 2 || num % 10 == 7) {
                aplicarion = 'quite a blade';
            } else if (num % 10 == 3 || num % 10 == 8) {
                aplicarion = 'pants-scraper';
            } else if (num % 10 == 4 || num % 10 == 9) {
                aplicarion = 'frog-butcher';
            } else if (num % 10 == 5 || num % 10 == 0) {
                aplicarion = '*rap-poker';
            }
            if (num > 40) { // moje da e bez ravno
                type = 'sword';
            } else {
                type = 'dagger';
            }
            html += `<tr><td>${num}</td><td>${type}</td><td>${aplicarion}</td></tr>\n`;
        }
    }
    html += '</tbody>\n</table>';
    console.log(html);

}

cacl([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3']);