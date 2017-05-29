function valChecker([x1,y1,x2,y2]) {
    let d = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    if (d === Math.ceil(d)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    d = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    if (d === Math.ceil(d)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    if (d === Math.ceil(d)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
valChecker([2, 1, 1, 1]);