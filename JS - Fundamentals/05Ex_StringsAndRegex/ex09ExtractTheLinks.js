function extraxt(array) {
    let regex=/www\.[a-zA-Z0-9-]+\.[a-z]+(\.[a-z]+)*/g;
    let result=[];
    for (let arr of array) {
        let match=arr.match(regex);

        if(match!=null) {
            console.log(match.join('\n'));
        }
    }
}
extraxt(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]);
