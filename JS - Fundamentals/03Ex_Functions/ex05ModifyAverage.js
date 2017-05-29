function modifyNum(input) {
    let number=input;

    while (checkAverage(number) <= 5) {
        number+= '9';
    }
    return number;

    function checkAverage(num) {
        let number=num.toString();
        let result=0;
        for (let i = 0; i < number.length; i++) {
            result+=Number(number[i]);
        }

         return result/number.length;
    }

}

console.log(modifyNum(101));