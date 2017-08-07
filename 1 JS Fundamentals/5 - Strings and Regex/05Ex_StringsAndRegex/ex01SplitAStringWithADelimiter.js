function split(text,delimer) {
    let splittedElements=text.split(delimer);

    for (let element of splittedElements) {
        console.log(element);
    }
}

split('One-Two-Three-Four-Five','-');