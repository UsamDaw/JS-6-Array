/*
Task 1
function first(array) {
    return array.slice(0, -5);
}

let alpha = [`a`, `b`, `c`, `d`, `e`, `f`];
let firstelement = first(alpha);
document.write(firstelement);
*/

/*
Task 2
function last(array) {
    return array.slice(-1);
}

let alpha = [`a`, `b`, `c`, `d`, `e`, `f`];
document.write(last(alpha));
*/

/*
Task 3
let list = [3, 66, 45];

function ke(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function ar(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}

let sumResult = ke(list);
document.write(sumResult); 
document.write("<br>")
let productResult = ar(list);
document.write(productResult); 
*/

let list1 = [1, 2, 3, 4, 5];
let list2 = [0, 1, 2, 3, 4];

function lister(list1, list2) {
    let result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i] + list2[i]);
    }
    return result;
}

let output = lister(list1, list2);
document.write(output);
