class MyNode {
   data: number
   next: MyNode

   constructor(data: number, next: MyNode = null) {
      this.data = data
      this.next = next
   }
}

function stringify(list: MyNode) {
   const result: string = list === null ? 'null' : `${list.data} -> ${stringify(list.next)}`
   return result
}

console.log(stringify(new MyNode(1, new MyNode(2, new MyNode(3, null)))))
