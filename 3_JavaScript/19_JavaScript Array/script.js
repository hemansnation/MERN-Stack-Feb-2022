// array

// let a = 10;

// let b = 20;

// collection of similar type of elements

// let a = [10,20,30,40,5];
// //       0   1  2  3 4

// console.log(typeof a);

// console.log(a);

// console.log(a[0]);

// console.log(typeof a[0]);

// console.log(a[6]);


// console.log(a[-1]);

// // length

// console.log(a.length);

// a[2] = 100;

// console.log(a);

// a[9] = 900;

// console.log(a);

// let b = [
//     "orange",
//     true,
//     {name: "Dev"},
//     function(){ alert("Hello from b"); }
// ];

// console.log(b);

// console.log(b[2].name);

// console.log(b[3]);

// b[3]();

// array methods
//  push

// let f = ["orange", 'apple', 'banana'];

// f.push('papaya');

// alert(f);


// pop

// console.log(f.pop());
// console.log(f);

// f.pop();

// console.log(f);

// shift

// let feb = ["orange", 'apple', 'banana'];

// console.log(feb);

// feb.shift();

// console.log(feb);

// feb.unshift("mango");

// console.log(feb);



// for loop

let may = ["orange", 'apple', 'banana', 'mango'];
//             0        1         2         3

//             y
//             r

// for(let i=0 ; i < may.length ; i++){
//     alert(may[i]);
// }

// for in loop


//       2 in may
// for( let y in may ){
//     console.log(y);   
// }


// for of loop
// for (let r of may) {
//     console.log(r);
// }


// splice


let june = ["orange", 'apple', 'banana', 'mango'];


let x = june.splice(1,2);
console.log(x);

console.log(june);

june.splice(2, 0,'cherry', 'watermelon');

console.log(june);