function solve(input) {
    let regex = /\w+/g;
    let result = input.match(regex);

    console.log(result.join('|'));
}