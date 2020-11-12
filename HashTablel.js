class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let hashKey = this._hash(key)
    console.log('hashKey', hashKey)
    this.data[hashKey] = value
  }

  get(key) {
    let hashKey = this._hash(key)
    return this.data[hashKey]
  }
}

const myHashTable = new HashTable(50)
console.log('myHashTable', myHashTable)
myHashTable.set('grapes', 10000)
console.log('set grapes', myHashTable)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log('set apples', myHashTable)
console.log(myHashTable.get('apples'))
