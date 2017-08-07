function func(arr) {
    let text='';
    for (let a of arr) {
    process(a);
    }

    function process(command) {
        (function executeCommand(command) {

            let commandArg=command.split(' ');
            let commandType = commandArg[0];
            let word=commandArg[1];
            if(commandType==='append'){
                text+=word;
            }else if(commandType==='removeStart'){
                text = text.substring(Number(word));
            }else if(commandType==='removeEnd'){
                text= text.substring(0, text.length-Number(word));
            }else {
                console.log(text);
            }
        })(command);
    }
}

func(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);