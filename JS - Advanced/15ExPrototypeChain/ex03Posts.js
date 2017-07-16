    // function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let string = `Post: ${this.title}`;
            string += '\n';
            string += `Content: ${this.content}`;
            return string;
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];

        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {


            let secondString = `Rating: ${this.likes - this.dislikes}`;

            if(this.comments.length!==0) {
                secondString += `\nComments:\n`;
                for (let com of this.comments) {
                    secondString += ` * ${com}\n`;
                }
            }
            return super.toString() + '\n' + secondString.trim();
        }

    }

    class BlogPost extends Post {

        constructor(title, content,views) {
            super(title, content);
            this.views=views;
        }
        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString()+`\nViews: ${this.views}`
        }

    }

    //     return {Post,SocialMediaPost,BlogPost};
    // }


    let test = new SocialMediaPost("TestTitle", "TestContent", 5, 10);

    test.addComment("1");
    test.addComment("2");
    test.addComment("3");


console.log(''+test);