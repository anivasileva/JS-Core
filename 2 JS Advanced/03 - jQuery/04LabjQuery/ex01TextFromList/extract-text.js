function extractText() {
    let result=[];
$('#items li').each((index, element)=>result.push(element.textContent)); //select element by id #items, interval li za da hvanem negovite children
    //mojem i da kajem  $('#items').find('li');
    //.text za da im hvanem teksta v li-tata

    $('#result').text(result.join(', ')); // kato napishesm .text(tyk slagame noviq tekst i toi promenq teksta na elementa koito e s id=result)
}
