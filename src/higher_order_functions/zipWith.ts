const zipWith = (fn:Function, arr1:Array<number>, arr2:Array<number>) =>
    Array.from({ length: Math.min(arr1.length, arr2.length) }, (_, i) => fn(arr1[i], arr2[i]))

console.log(zipWith(Math.max, [1, 2, 3, 4], [3, 1, 5, 2, 5, 2, 3]))

