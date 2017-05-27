function calcPoint(input) {
    let x = input[0];
    let y = input[1];
    let xmin = input[2];
    let xmax = input[3];
    let ymin = input[4];
    let ymax = input[5];

    if ((x >= xmin && x <= xmax) && (y >= ymin && y <= ymax)) {
        console.log("inside");
    } else
        console.log("outside");
}

calcPoint([8,-1,2,12,-3,3]);