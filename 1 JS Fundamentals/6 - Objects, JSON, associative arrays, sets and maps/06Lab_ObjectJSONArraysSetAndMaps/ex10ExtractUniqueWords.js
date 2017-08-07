function unique(arr) {
    let unique=new Set();
    let text = arr.join('\n');
    let words=text.split(/\W+/).filter(w=>w!='')
        .map(e=>e.toLowerCase())
        .forEach(e=>unique.add(e));

    console.log([...unique].join(', '));
}

unique();