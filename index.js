"use strict";
const func1 = (arr) => {
    arr.splice(3, 1, 15);
    console.log(arr);
};
func1([2187, 644, 776, 333, 777, 333, 7884, 444, 787]);
const fun1 = (arr1) => {
    arr1.splice(2, 0, "ghgjhj");
    console.log(`Add intems in array`, arr1);
};
fun1(['sdfsd', 'sdfsdf', 'asdf', 'qwer']);
let count = 1;
while (count <= 25) {
    console.log(count);
    count++;
}
let count1 = 1;
while (count1 <= 20) {
    if (count1 % 2 == 0) {
        console.log(count1);
    }
    // console.log(`${count%2==0}`)
    count1++;
}
const func3 = () => {
    let c = 5;
    let f = 1;
    if (c > 0) {
        while (c > 0) {
            f = f * c;
            c--;
        }
        console.log(f);
    }
};
func3();
const func4 = (arr) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return arr;
    // console.log(...arr)
};
console.log(func4([3, 5, 7, -6, 34545, 3455, -2]));
// const func3 = () => {
//     let c = 5;
//     let f = 1;
//     if (c > 0) {
//         while (c >= 1) {
//             f = f * c; // Multiply the current factorial value by c
//             c--;
//         }
//         console.log(f);
//     }
// }
// func3();
