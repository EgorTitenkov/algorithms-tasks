function sequenceSum(begin,end,step){
    if (begin === end){
        return begin
    }else{
        return begin + sequenceSum(begin+step,end,step)
    }

}

console.log(sequenceSum(2,2,2))
