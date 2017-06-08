function townsToJSON(array) {
    array.shift();
    let towns=[];

    for (let arr of array) {
        let tokens = arr.split('|').filter(e => e != '').map(e => e.trim());

        let town = {
            Town: tokens[0],
            Latitude: Number(tokens[1]),
            Longitude: Number(tokens[2])
        };
        towns.push(town);
    }
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);