function reverseArr(arr){
   let chars=arr.join('');
   let reverseChars=Array.from(chars).reverse().join('');
   console.log(reverseChars);
}
reverseArr(['I', 'am', 'student']);