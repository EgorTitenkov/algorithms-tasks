function sequenceSum(begin:number,end:number,step:number){
    if (begin === end || begin+step > end){
        return begin
    }else{
        const result:number = begin + sequenceSum(begin+step,end,step)
        return result
    }
}
console.log(sequenceSum(1,7,3))