class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
function func(arr, command) {
    let all = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split('|');
        let ticket = new Ticket(tokens[0], Number(tokens[1]), tokens[2]);
        all.push(ticket);
    }

   let newArr= all.sort(function (a,b) {
        if(command==='price'){
            return a[command]-b[command];
       }else{
            return a[command].localeCompare(b[command]);
        }
    });
    return newArr;
}
