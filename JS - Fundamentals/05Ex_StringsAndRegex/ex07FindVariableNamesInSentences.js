function find(text) {
    let regex=/_([a-zA-z0-9]+)/g;
    let result=[];
    let match=text.match(regex);
    let finalResult=[];

    if (match != null) {
        for (let obj1 of match) {
            result.push(obj1);
        }
    }

    for (let obj of match) {
        finalResult.push(obj.substring(1,obj.length))
    }

    console.log(finalResult.join(','));
}
find('The _id and _age variables are both integers.');