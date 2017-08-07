function cook(arr) {
    let num = arr[0];
    for (let i = 1; i <= arr.length; i++) {

        let command = arr[i];
        console.log(com(command));
    }

    function com(comand) {
        switch (comand) {
            case 'chop':
                return num=num / 2;
                break;
            case 'dice':
                return num=Math.sqrt(num);
                break;
            case 'spice':
                return num=num + 1;
                break;
            case 'bake':
                return num= num * 3;
                break;
            case 'fillet':
                return num=num - 0.2*num;
                break;
        }
    }
}
cook([32, 'chop', 'chop', 'chop', 'chop', 'chop']);