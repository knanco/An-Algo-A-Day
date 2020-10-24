class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  deleteAtIndex(index) {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

// const myArray = new MyArray()
// myArray.push('black')
// myArray.push('pink')
// myArray.push('yellow')
// myArray.push('green')
// myArray.push('purple')
// myArray.pop()
// myArray.deleteAtIndex(2)
// console.log(myArray)
