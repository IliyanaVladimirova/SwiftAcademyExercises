// Задача 1
function checkIfNumber(num) {
    if (typeof (num) == "number")
        return true;
    else
        return false;
}

//--------------------------
// оптимизирано:
function checkIfNumber(num) {
    return typeof num == "number";
}

// бонус задача
function diff(str1, str2) {
    var same = "the words are the same length";
    var l1 = str1.length;
    var l2 = str2.length;
    if (l1 > l2)
        return l1 - l2;
    else if (l1 < l2)
        return l2 - l1;
    else
        return same;
}

//------------------
// оптимизирано:
function diff(str1, str2) {
    return Math.abs(str1.length - str2.length)
}

//-----------------------------------

//задача 1
function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function sumEven(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += array[i];
        }
    }
    return sum;
}
function sumOdd(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            sum += array[i];
        }
    }
    return sum;
}

// бонус задача
var array = ["dog","cat", "mouse" , "bird"];
function first(array,n){
    if (typeof n == "undefined"){
        return array[0];
    }
    else
    {
    var tempArr = [];
    for(var i = 0; i<n; i++){
        tempArr.push(array[i]);
    }
        return tempArr;
    }

}
