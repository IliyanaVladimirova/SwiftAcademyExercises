//задача 1 + бонус 1

function getComEmails(array) {
    var newArr = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].includes('.com')) {
            newArr.push(array[i]);
        }
    }
    var strArr = newArr.join(",");
    return strArr;
}

//задача 2
function orderByAge(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}

array.sort(orderByAge);

// бонус задача 2
function removeUnderage(array) {
    var sortedArr = array.sort(orderByAge);
    var newArr = [];
    for (i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i].age >= 18) {
            newArr.push(sortedArr[i]);
        }
    }
    return newArr;
}
//--------------------------------------------------------------------//
// задача 1
function reverseArray(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        var revStr = array[i].split("").reverse().join("");
        newArr.push(revStr);
    }
    return newArr.reverse().join(" ");
}
// задача 2
function doubleTheOdds(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            newArr.push(array[i] * 2)
        }
        else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
function doubleTheOdds(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        array[i] % 2 != 0 ? newArr.push(array[i] * 2) : newArr.push(array[i]);
    }
    return newArr;
}

//бонус задача 
function completeArr(array) {
    for (var i = 0; i < 8; i++) {
        if (!array.includes(i)) {
            array.push(i);
        }
    }
    return array.sort();
}

