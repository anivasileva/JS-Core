function calc(a, b, op) {
    if (op == '+') {
        return a + b;
    }

    if (op == '-') {
        return a - b;
    }

    if (op == '/') {
        return a / b;
    }

    if (op == '*') {
        return a * b;
    }
}

console.log(calc(2, 4, '+'));