function printFunc(text) {
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';
    let arr = JSON.parse(text);
    for (let i = 0; i < arr.length; i++) {
        html += '  <tr>';
        let name= arr[i].name;
        let score=arr[i].score;
        html+=`<td>${htmlEscape(name)}</td><td>${score}</td></tr>\n`;
    }
    html+='</table>';
    console.log(html);

     function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

}

printFunc('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');