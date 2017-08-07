function reduceEl(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let t = k; t > 0; t--) {
            if (i - t >= 0) {
                sum += arr[i - t];
            }
        }
        arr[i] = sum;
    }
    console.log(arr.join(' '));
}


reduceEl(8, 2);