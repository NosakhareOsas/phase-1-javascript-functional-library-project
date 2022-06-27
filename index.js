const arrayChecker = (collection) => {
    let array = []
    if (Array.isArray(collection)){
        array = [...collection]
    }else{
        array = Object.values(collection)
    }
    return array
}

const myEach = (collection, callback) => {
    let array = arrayChecker(collection)
    
    for (let item of array){
        callback(item)
    }
    return collection
}

const myMap = (collection, callback) => {
    let array = arrayChecker(collection)
    const newArray = []
    for (let item of array){
        newArray.push(callback(item))
    }
    return newArray
}

const myReduce = (collection, callback, acc) => {
    let array = arrayChecker(collection)
    if ( acc === undefined){
        acc = array[0]
        array.shift()
        for (let item of array){
            acc = callback(acc, item) 
        }
    }else{
        for (let item of array){
            acc = callback(acc, item) 
        }
    } 
    return acc
}

const myFind = (collection, predicate) => {
    let array = arrayChecker(collection)
    for (let item of array){
        if (predicate(item)){
            return item
        }
    }
}

const myFilter = (collection, predicate) => {
    let array = arrayChecker(collection)
    let newArray = []
    for (let item of array){
        if (predicate(item)){
            newArray.push(item)
        }
    }
    return newArray
}

const mySize = (collection) => {
    let array = arrayChecker(collection)
    return array.length
}
const myFirst = (collection,n=1) => {
    let array = arrayChecker(collection)
    if (n<2){
        return array[0]
    }else{
        let newArray = array.slice(0,n)
        return newArray
    }
}

const myLast = (collection,n=1) => {
    let array = arrayChecker(collection)
    if (n<2){
        return array[mySize(array)-1]
    }else{
        let newArray = array.slice(mySize(array)-n,)
        return newArray
    }
}

const myKeys = (collection) => {
    return Object.keys(collection)
}

const myValues = (collection) => {
    return Object.values(collection)
}




