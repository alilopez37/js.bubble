

let arr = Array(10)

export const setArr = function() {
    for (let i=0;i<arr.length;i++)
        arr[i] = Math.floor(Math.random() * 51) + 50    
}

export const getArr = function() {
    return arr
}

export const burbuja = function() {
    for (let i=1;i<arr.length;i++){
        for (let j=0;j<arr.length-i ;j++){
            if (arr[j]>arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}