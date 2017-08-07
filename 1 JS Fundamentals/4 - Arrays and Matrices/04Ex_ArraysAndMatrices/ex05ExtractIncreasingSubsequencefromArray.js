function extract(arr) {
    let firstElement = arr.shift();
    let newArr = [firstElement];
    for (let i = 0; i < arr.length; i++) {
        let check = newArr.pop();
        newArr.push(check);
        if (firstElement < arr[i] && check <= arr[i]) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join('\n'));
}

extract([1]);