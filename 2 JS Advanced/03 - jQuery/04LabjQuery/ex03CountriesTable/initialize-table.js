function initializeTable() {
//Attach event listeners to Create
    $('#createLink').click(addCountry);


    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();
    //Read input and call create
    function addCountry() {
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        createCountry(name, capital);
        fixLinks();
    }

    //Create table row
    function createCountry(name, capital) {
        $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(delete1)))
            .appendTo($('#countriesTable'));
    }

    function fixLinks() {
        //show all links in the table
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide(); //Mahame na posledniq element Down kopcheto
        $('tr:eq(2) a:contains(Up)').hide(); //eq(2) защото на 0 е headera, na 1 e Create
    }

    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixLinks();
    }

    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixLinks();
    }

    function delete1() {
        $(this).parent().parent().remove();
        fixLinks();
    }

}
