const fibs = (n) => {
    let res = [];

    if(n == 1){
        res.push(n-1);
        return res;
    }
    else if(n == 2){
        res.push(n - 2, n - 1);
        return res;
    }

    let first  = 0;
    let second  = 1;
    res.push(first, second);

    for(let i = 0; i < n - 2; i++){
        let newnumber  = first + second;
        res.push(newnumber);
        first = second;
        second = newnumber;
    }

    return res;
}
    
const  fibsRec = (n) => {
    if(n === 1) return [0];
    if(n === 2) return [0, 1];

    const prev = fibsRec(n-1);

    const next = prev[prev.length-1] + prev[prev.length-2];

    prev.push(next);
    
    return prev;
}

console.log(fibsRec(5));

