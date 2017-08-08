function attachEvents() {
    //attach event listeners
    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);

    //Application constants
    const baseUrl = "https://baas.kinvey.com/appdata/kid_rJvDLmPwb/";
    const username = 'pesho';
    const password = "p";

    //DOM elements
    const list = $('#posts');
    const postTitle = $('#post-title');
    const postBody = $('#post-body');
    const postComments = $('#post-comments');

    function request(endpoint) {
        return $.ajax({
            url: baseUrl + endpoint,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        });
    }

    function loadPosts() {
        request('posts')
            .then(fillSelect)
            .catch(handleError);

        function fillSelect(data) {
            list.empty();
            for (let post of data) {
                $('<option>').text(post.title).val(post._id).appendTo(list);
            }
        }
    }

    function viewPost() {
        let postId = $('#posts').find('option:selected').val();
       let postP = request('posts' + '/' + postId);
       let commentsP =    request(`comments/?query={"postId":"${postId}"}`);
       Promise.all([postP,commentsP])
            .then(displayPostAndComments)
            .catch(handleError);

        function displayPostAndComments([data, comments]) {
            postComments.empty();

            postTitle.text(data.title);
            postBody.text(data.body);

            for (comment of comments) {
                postComments.append($('<li>').text(comment.text));
            }
        }
    }
    function handleError(reason) {
        let errorDiv = $("<div>").text("Error: " + reason.status + ' (' + reason.statusText + ')');
        $(document.body).prepend(errorDiv);//prepend --> da ti dobavq tekst vednaga v nachaloto na body
    }

}



/*
Zarejda po bavno no raboti po sushtiq nachin

function attachEvents() {
    //attach event listeners
    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);

    //Application constants
    const baseUrl = "https://baas.kinvey.com/appdata/kid_rJvDLmPwb/";
    const username = 'pesho';
    const password = "p";

    //DOM elements
    const list = $('#posts');
    const postTitle = $('#post-title');
    const postBody = $('#post-body');
    const postComments = $('#post-comments');

    function request(endpoint) {
        return $.ajax({
            url: baseUrl + endpoint,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        });
    }

    function loadPosts() {
        request('posts')
            .then(fillSelect)
            .catch(handleError);

        function fillSelect(data) {
            list.empty();
            for (let post of data) {
                $('<option>').text(post.title).val(post._id).appendTo(list);
            }
        }
    }

    function viewPost() {
        let postId = $('#posts').find('option:selected').val();
        request('posts' + '/' + postId)
            .then(requestComments)
            .then(displayPostAndComments)
            .catch(handleError);

        function requestComments(data) {
            return new Promise(function (resolve, reject) {
                request(`comments/?query={"postId":"${postId}"}`)
                    .then((response) => resolve([data, response]));
            });

        }

        function displayPostAndComments([data, comments]) {
            postComments.empty();

            postTitle.text(data.title);
            postBody.text(data.body);

            for (comment of comments) {
                postComments.append($('<li>').text(comment.text));
            }
        }
    }
    function handleError(reason) {
        let errorDiv = $("<div>").text("Error: " + reason.status + ' (' + reason.statusText + ')');
        $(document.body).prepend(errorDiv);// da ti dobavq tekst vednaga v nachaloto na body
    }

}


 */
