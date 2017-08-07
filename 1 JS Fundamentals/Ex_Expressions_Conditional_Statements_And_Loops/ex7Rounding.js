function rounding([num,tofix]){


   let denominator=10**tofix;
   console.log(Math.round(num*denominator)/denominator);

}

rounding([10.5, 3]);