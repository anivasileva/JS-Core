function func(arr) {
    let numbers = [];
    let operators = [];
    let sum = 0;
    let firstElement = 0;
    let secondElement = 0;
    let curr=[];
    for (let i = 0; i < arr.length; i++) {
        if (isNumber(arr[i])) {
            numbers.push(arr[i]);

        }
        if (!isNumber(arr[i])) {
            if (numbers.length >= 2) {
                secondElement = numbers.pop();
                firstElement = numbers.pop();
            }else{
                console.log('Error: not enough operands!');
                return;
            }

            let sum = 0;
            operators.push(arr[i]);
            if (arr[i] == '+') {
                sum += firstElement + secondElement;
                operators.pop(arr[i]);

            } else if (arr[i] == '-') {
                sum += firstElement - secondElement;
                operators.pop(arr[i]);

            } else if (arr[i] == '*') {
                sum += firstElement * secondElement;
                operators.pop(arr[i]);

            } else if (arr[i] == '/') {
                sum += firstElement / secondElement;
                operators.pop(arr[i]);

            }
            numbers.push(sum);
        }
    }



    if (numbers.length != 1) {
        console.log('Error: too many operands!');
    }
    else
        console.log(numbers.join(''));

    function isNumber(n) {
        return /\d+/g.test(n);
    }
}


func([7,
    33,
    8,
    '-']);