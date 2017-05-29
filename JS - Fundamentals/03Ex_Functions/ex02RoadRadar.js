function calcLimit(arr) {
    let speed = arr[0];
    let road = arr[1];

    if (road === 'motorway') {
        overSpeed(130);
    }
    if (road === 'interstate') {
        overSpeed(90);
    }
    if (road === 'city') {
        overSpeed(50);
    }
    if (road === 'residential') {
        overSpeed(20);
    }

    function overSpeed(o) {
        let overspped = speed - o;
        if (overspped >= 1 && overspped <= 20) {
            console.log('speeding');
        } else if (overspped>=21&&overspped <= 40) {
            console.log('excessive speeding');
        } else if (overspped >= 40) {
            console.log('reckless driving');
        }
    }
}

calcLimit([40, 'city']);
