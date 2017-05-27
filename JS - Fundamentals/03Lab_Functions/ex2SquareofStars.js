function printRectangle(count=5) {

    function printStars(n=count){
        console.log('*'+' *'.repeat(n-1));

    }
    for(let i=1;i<=count;i++)
    printStars(count);
}
printRectangle(3);