function sort(arr) {
        arr.sort((a,b) => {
            if (a.length > b.length) {
                return 1;
            } else if (b.length > a.length) {
                return -1;
            } else {
                return b > a ? -1 : 1;
            }
        });

        console.log(arr.join('\n'));

}