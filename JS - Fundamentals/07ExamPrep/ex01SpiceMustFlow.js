function spice(string) {
    let number = string.map(Number);
    let days = 0;
    let sum = 0;
    while (number >= 100) {
        let i = sum + number - 26;
        if(i>26) {
            sum += number - 26;
        }
        number -= 10;
        days++;
    }
if(sum>26) {
    sum -= 26;
}
    console.log(days);
    console.log(sum);
}

spice([450]);