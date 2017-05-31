function findBiggestElement(arr) {
    let biggestElement=Number.NEGATIVE_INFINITY;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col <arr[row].length; col++) {

            if(arr[row][col]>biggestElement){
                biggestElement=arr[row][col];

            }
        }
    }

    console.log(biggestElement);
}

findBiggestElement([[20, 50, 10], [8, 33, 145]]);

