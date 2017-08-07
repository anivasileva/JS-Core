function isPrime(n) {
    let prime = true;
    let max=Math.ceil(Math.sqrt(n));

    for (let d = 2; d <= max; d++) {
        if(n==d)continue;
        if (n % d == 0) {
            prime = false;
            break;
        }
    }
    return prime && (n > 1);
}
