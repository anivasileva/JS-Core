function printFigure(n){
   let length;
   if(n%2===0){
       length=n-1;
   }else length=n;

   let count=(2*n-4)/2;
   let middle=Math.ceil(length/2);

    for (let i = 1; i <= length; i++) {
        if(i===1 || i===middle || i===length){
            console.log(`+${'-'.repeat(count)}+${'-'.repeat(count)}+`)
        }else{
            console.log(`|${' '.repeat(count)}|${' '.repeat(count)}|`)
        }
    }
}

printFigure(5);