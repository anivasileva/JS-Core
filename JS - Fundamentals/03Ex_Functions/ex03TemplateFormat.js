function printFormat(input){
    let string='<?xml version="1.0" encoding="UTF-8"?>\n';
    string+='<quiz>\n';

    for (let i = 0; i < input.length; i+=2) {
        let question = input[i];
        let answer = input[i + 1];
        string+='  <question>\n';
        string+='    '+question+'\n';
        string+='  </question>\n';
        string+='  <answer>\n';
        string+='    '+answer+'\n';
        string+='  </answer>\n';
    }
    string+='</quiz>';
  console.log(string);
}

printFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);