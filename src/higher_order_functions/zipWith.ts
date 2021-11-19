const zipWith = (fn:Function, arr1:Array<number>, arr2:Array<number>) =>
    arr1.slice(0, arr2.length).map((val, idx) => fn(val, arr2[idx]));

console.log(zipWith(Math.max, [1, 2, 3, 4], [3, 1, 5, 2, 5, 2, 3]))

