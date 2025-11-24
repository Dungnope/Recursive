const fibs = (x) => {
    if(x == 1) return [0];
    if(x == 2) return [0, 1];

    let res = [];
    res.push(0, 1);
    for(let i = 0; i < x-2; i++){
        let prev = res[i];
        let next = res[i+1];
        res.push(prev + next);
    }

    return res;
}


const fibsRec = (x) => {
    if(x == 1) return [0];
    if(x == 2) return [0, 1];

    let bottom = fibsRec(x - 1);

    let upper_bottom = bottom[bottom.length - 1] + bottom[bottom.length - 2];

    bottom.push(upper_bottom);

    return bottom;

}
console.log(fibs(4));

console.log(fibsRec(4));