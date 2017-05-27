function calc([p,i,n,t]){
    let newi=i/100;
let newn=12/n;
    let f=p*((1+(newi/newn))**(newn*t));
    console.log(f.toFixed(2));
}

calc([100000, 5, 12, 25]);