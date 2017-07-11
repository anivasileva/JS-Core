class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx=a.x-b.y;
        const dy=a.y-b.y;
        return Math.sqrt(dx*dx+dy*dy);
    }
}

