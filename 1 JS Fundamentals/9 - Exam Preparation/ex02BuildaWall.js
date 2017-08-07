function build(array) {
    let numbers = array.map(Number);
    let cubics = [];

    while (true) {
        let buildOn = false;
        let daily = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== 30) {
                numbers[i]++;
                daily+=195;
                buildOn=true;
            }
        }
        if(!buildOn){
            break;
        }else{
            cubics.push(daily);
        }
    }

    console.log(cubics.join(', '));
    let allcubics =cubics.reduce((a, b) => a + b);
    console.log(`${allcubics*1900} pesos`);
}

build([17]);