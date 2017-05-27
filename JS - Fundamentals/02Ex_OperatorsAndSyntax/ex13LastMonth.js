function calcDay(array){
   let [day,month,year]=array;
    let date=new Date(year,month-1,0);
    return date.getDate();
}

console.log(calcDay([17, 3, 2002]));