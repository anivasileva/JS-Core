function pyramid(base, h) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let pyramidHeight = 0;
    let finalPyramidHeight = 0;

        for (let i = base; i >= 1; i -= 2) {
            pyramidHeight++;
            finalPyramidHeight += h;
            let currentStone = ((i - 2) * (i - 2)) * h;
            if (i == 1 || i == 2) {
                gold = i * h * i;
                break;
            }
            else if (pyramidHeight % 5 == 0) {
                stone += ((i - 2) * (i - 2)) * h;
                lapis += (i * i * h) - currentStone;
            }
            else {
                stone += ((i - 2) * (i - 2)) * h;
                marble += ((i * i * h) - currentStone);
            }
        }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalPyramidHeight)}`);
}


pyramid(23, 0.5);

