function capitalize(arr) {

    let newThing = arr.toLowerCase().split(' ');
    let result = [];
    for (let thing of newThing) {
            result.push(thing[0].toUpperCase()+thing.substring(1,thing.length));
    }

    console.log(result.join(' '));
}

capitalize('Capitalize these words');