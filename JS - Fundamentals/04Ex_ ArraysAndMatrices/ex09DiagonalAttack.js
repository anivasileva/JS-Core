function calc(array) {
    let firstSum = 0;
    let secondSum = 0;
    let curr = array.length - 1;
    let matrix = [];

    for (let arr of array) {
        matrix.push(arr.split(' ').map(Number));
    }

    for (let row = 0; row < matrix.length; row++) {
        firstSum += Number(matrix[row][row]);
        secondSum += Number(matrix[row][curr]);
        curr = curr - 1;
    }

    if (firstSum !== secondSum) {
        for (let m of matrix) {
            console.log(m.join(' '));
        }
    } else {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row == col) {
                    continue;
                }
                else if (row + col == matrix.length - 1) {
                    continue;
                } else {
                     matrix[row][col]=firstSum;
                }
            }
        }
        for (let m of matrix) {
            console.log(m.join(' '));
        }

    }

}

calc(['1 1 1',
    '1 1 1',
    '1 1 0']
);