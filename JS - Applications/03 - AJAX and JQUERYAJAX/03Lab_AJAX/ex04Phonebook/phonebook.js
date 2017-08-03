function attachEvents() {


    //alert('It works');
    const baseUrl = "https://phonebook-live-f5fdc.firebaseio.com/phonebook";

    const list = $('#phonebook');
    $('#btnCreate').on('click', create);
    $('#btnLoad').on('click', loadContacts);

    // let req = {
    //     url: baseUrl + ".json",
    //     success: displayContacts
    // };
    // $.ajax(req); //izpulni tozi request

    function displayContacts(data) {
        list.empty();
        for (let contact in data) {
            let html = $(`<li>${data[contact].name} - ${data[contact].phone}</li>`);
            html.append($(`<button>[Delete]</button>`).click(() => deleteContact(contact)));
            list.append(html);

        }
    }

    function deleteContact(contact) {
        let req = {
            url: `${baseUrl}/${contact}.json`,
            method: "DELETE",
            success: loadContacts,
            error: displayError
        };
        $.ajax(req);
    }

    function loadContacts() {
        list.empty();
        let req = {
            url: baseUrl + ".json",
            success: displayContacts
        };
        $.ajax(req);
    }

    function create() {
        let name = $('#person').val();
        let phone = $('#phone').val();

        let req = {
            url: "https://phonebook-live-f5fdc.firebaseio.com/phonebook.json",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify({
                name: name,
                phone: phone
            }),
            success: loadContacts,
            error: displayError
        };

        $.ajax(req);
    }

    function displayError(err) {
        phonebook.append($('<li>').text("Error"));
    }

}



// REALNO RESHENIE DAVASHTO 100


/*
 function attachEvents() {
 $('#btnLoad').click(loadContacts);
 $('#btnCreate').click(createContact);

 const baseUrl = "https://phonebook-nakov.firebaseio.com/phonebook";

 const phonebook = $('#phonebook');
 const person = $('#person');
 const phone = $('#phone');

 function loadContacts() {
 phonebook.empty();
 $.get(baseUrl + ".json")
 .then(displayContacts)
 .catch(displayError);
 }

 function displayContacts(contacts) {
 for (let key in contacts) {
 let person = contacts[key]['person'];
 let phone = contacts[key]['phone'];

 phonebook
 .append($('<li>').text(person + ': ' + phone + ' ')
 .append($('<button>').text('Delete').click(function () {
 deleteContact(key)
 })));
 }
 }

 function displayError(err) {
 phonebook.append($('<li>').text("Error"));
 }

 function createContact() {
 let newContactJSON = JSON.stringify({
 person: person.val(),
 phone: phone.val()
 });

 $.post(baseUrl + '.json', newContactJSON)
 .then(loadContacts)
 .catch(displayError);

 person.val('');
 phone.val('');
 }

 function deleteContact(key) {
 let request = {
 method: 'DELETE',
 url: baseUrl + '/' + key + '.json'
 };

 $.ajax(request)
 .then(loadContacts)
 .catch(displayError);
 }
 }
 */