function attachEvents() {
    $("#refresh").click(refreshFunc);
    $("#submit").click(submitFunc);

    function refreshFunc() {
        let request = {
            url: "https://messenger-2a84a.firebaseio.com/messenger/.json",
            method: "GET",
            success: displayFunc
        };
        $.ajax(request);
    }

    /*
     "-KWi2_-QHxL1yov93j5i": {
     "author": "Pesho",
     "content": "hi guys",
     "timestamp": 1479315195400
     }
     */
    function displayFunc(messages) {
        let output = $("#messages");
        let messageStr = "";
        for (let key in messages) {
            messageStr += `${messages[key]["author"]}: ${messages[key]["content"]}\n`;
        }
        output.text(messageStr);
    }

    function submitFunc() {
        let newMessage = {
            "author": $("#author").val(),
            "content": $("#content").val(),
            "timestamp": Date.now()
        };

        let request = {
            url: "https://messenger-2a84a.firebaseio.com/messenger/.json",
            method: "POST",
            data: JSON.stringify(newMessage),
            success: refreshFunc
        };

        $.ajax(request);
    }

}
