const mergeSort = (data) => {
    function merge(left, right){
        let ans = [];
        while(left.length >= 1 && right.length >= 1){
            if(left[0] > right[0]) {
                ans.push(right[0]);
                right.shift();
            }
            else{
                ans.push(left[0]);
                left.shift();
            }
        }

        while(left.length !== 0){
            ans.push(left[0]);
            left.shift();
        }

        while(right.length !== 0){
            ans.push(right[0]);
            right.shift();
        }

        return ans;
    }


    if(data.length === 1){
        return data;
    }

    let mid = Math.round(data.length / 2);

    let rightside = data.slice(mid);
    let leftside = data.splice(0, mid);

    let sortedleft = mergeSort(leftside);
    let sortedright = mergeSort(rightside);
    return merge(sortedleft, sortedright);
}

// console.log(mergeSort([2, 4, 5, 6, 7, 8]));

let test = [3, 5, 1, 4, 7, 8, 4];
console.log(mergeSort(test));