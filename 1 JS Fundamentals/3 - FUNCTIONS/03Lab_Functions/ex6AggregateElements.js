function agregate(arr) {
    let sum=0;
    let secondSum=0;
    let sumsum='';
    for (let i = 0; i < arr.length; i++) {
            sum+=arr[i];
            secondSum+=1/arr[i];
            sumsum+=arr[i];
    }


    console.log(sum);
    console.log(secondSum);
    console.log(sumsum);
}

agregate([2, 4, 8, 16]);