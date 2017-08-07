function sumAndPrint(arr){
    let obj={};
    for (let i = 0; i < arr.length; i+=2) {
            let name=arr[i];
            let value=Number(arr[i+1]);
            if(!obj.hasOwnProperty(name)){
                obj[name]=0;
            }
                obj[name]+=value;
    }
console.log(JSON.stringify(obj));
}

sumAndPrint(['Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4'
]);