function solveEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = -b / (2 * a);
    let x1 = (-b + Math.sqrt(d))/ (2 * a);
    let x2 = (-b - Math.sqrt(d))/ (2 * a);

    if(d > 0){
        if(x1 < x2){
            console.log(x1);
            console.log(x2);
        }
        else {
            console.log(x2);
            console.log(x1);
        }
    }
    else if (d == 0) {
        console.log(x);
    }
    else {
        console.log("No");
    }
}
solveEquation(5, 2, 1);
solveEquation(6, 11, -35);
solveEquation(1, -12, 36);