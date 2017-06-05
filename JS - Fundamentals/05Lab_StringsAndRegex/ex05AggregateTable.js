function agregate(arr) {
let list=[];
let sum=0;
    for (let obj of arr) {
        let townData=obj.split('|');
        let townName=townData[1].trim();
        let income=Number(townData[2].trim());
        list.push(townName);
        sum+=income;
    }
    console.log(list.join(', ') + '\n' + sum);


}
agregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);