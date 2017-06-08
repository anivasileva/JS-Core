function townPop(arr) {
    let towns=new Map();
    for (let a of arr) {
        let[name,population]=a.split(' <-> ');
        if(!towns.has(name)){
            towns.set(name,0);
        }
        towns.set(name,towns.get(name)+Number(population));
    }

    [...towns].forEach(([town,pop])=>console.log(`${town} : ${pop}`));
}