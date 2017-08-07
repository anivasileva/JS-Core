function messenger(message) {
    let html = '<article>\n';
    let regex = /^<message to="([A-Za-z ]+)" from="([A-Za-z ]+)"( [a-z]{1,}="[A-Za-z0-9 .]{1,}")*>([A-Za-z ,'?.\\n!\s]+)<\/message>$/gm;

    let match = regex.exec(message);

    if (match) {
        html += `  <div>From: <span class="sender">${match[2]}</span></div>\n`;
        html += `  <div>To: <span class="recipient">${match[1]}</span></div>\n`;
        html += '  <div>\n';
        html += `    <p>${match[4]}</p>\n`;
        html += '  </div>\n';
        html += '</article>';
        console.log(html);
    }
    else console.log('Invalid message format');
}

messenger('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');