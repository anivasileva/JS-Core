function solve(numArr) {
    let targetSize = numArr[0];
    let opStr = 'Cut';
    for (let i = 1; i < numArr.length; i++) { 
        let microns=numArr[i];
        console.log(`Processing chunk ${microns} microns`);
       microns=executeOp(microns,'Cut',cut);
        microns=executeOp(microns,'Lap',lap);
        microns=executeOp(microns,'Grind',grind);
        microns=executeOp(microns,'Etch',etch);

        if(microns+1===targetSize){
            microns=xRay(microns);
        }

        console.log(`Finished crystal ${microns} microns`);
    }

    function cut(crystal) {
        return crystal/4;
    }
    function lap(crystal) {
        return crystal=crystal-crystal*0.2;
    }
    function grind(crystal) {
        return crystal=crystal-20;
    }
    function etch(crystal) {
        return crystal=crystal-2;
    }
    function xRay(crystal) {
        console.log('X-ray x1');
        return crystal=crystal+1;
    }
    function transportAndWash(crystal) {
        console.log('Transporting and washing');
        return Math.floor(crystal);
    }
    function executeOp(microns,opStr,op) {
        let newSize=op(microns);
        let counter=0;
        while (newSize>=targetSize||Math.floor((targetSize-newSize)===1)){
            microns=newSize;
            newSize=op(microns);
            counter++;
        }
        if(counter>0){
            console.log(`${opStr} x${counter}`);
            microns=transportAndWash(microns);
        }
        return microns;
    }
}

