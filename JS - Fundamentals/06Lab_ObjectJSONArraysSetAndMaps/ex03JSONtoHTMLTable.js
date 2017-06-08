function jsonToHtml(array) {
    let arr = JSON.parse(array);
    let headers = Object.keys(arr[0]);

    let html = '<table>\n';
    html += '  <tr>';
    for (let head of headers) {
        html += `<th>${head}</th>`;
    }
    let regex = /[0-9]+/;
    html += '</tr>\n';

    for (let a of arr) {
        html += '  <tr>';
        for (let head of headers) {
            html += '<td>';
            if (regex.test(a[head]) === false) {
                html += `${htmlEscape(a[head])}`;
            }
            else html += `${a[head]}`;

            html += '</td>';
        }
        html+='</tr>\n';
    }

    html += '</table>\n';
     console.log(html);

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}


jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
