function print(arr) {
    let delimer = arr[arr.length - 1];
    arr.pop;
    let result = '';

    for (let i = 0; i < arr.length-1; i++) {
        if (i == 0) {
            result += arr[i];
        } else result += delimer + arr[i];
    }
console.log(result);
}

print(['One','Two','Three','Four','Five','-']);