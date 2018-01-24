
    getDistance = function(x1, y1, x2, y2){
    let xs = x2 - x1;
    let ys = y2 - y1;

    xs*= xs;
    ys*= ys;

    return Math.sqrt( xs + ys);
    console.log(getDistance)
}
console.log(getDistance(3,5,2,4))